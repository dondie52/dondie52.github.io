import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");

const owner = process.env.GITHUB_OWNER || "dondie52";
const siteUrl = (process.env.SITE_URL || `https://${owner}.github.io`).replace(/\/+$/, "");

const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || "";
const headers = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": `${owner}.github.io sync`,
};
if (token) headers.Authorization = `Bearer ${token}`;

async function fetchJson(url) {
  const res = await fetch(url, { headers });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`GitHub API ${res.status} for ${url}\n${body.slice(0, 500)}`);
  }
  return res.json();
}

function slugify(input) {
  return String(input || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

function toDisplayName(repoName) {
  const base = String(repoName || "").replace(/[-_]+/g, " ").trim();
  if (!base) return "";
  return base
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

async function fetchAllRepos() {
  const repos = [];
  const perPage = 100;
  for (let page = 1; page < 50; page++) {
    const url =
      `https://api.github.com/users/${encodeURIComponent(owner)}/repos` +
      `?per_page=${perPage}&page=${page}&type=owner&sort=pushed&direction=desc`;

    const batch = await fetchJson(url);
    if (!Array.isArray(batch) || batch.length === 0) break;
    repos.push(...batch);
    if (batch.length < perPage) break;
  }
  return repos;
}

async function fetchTopics(fullName) {
  const url = `https://api.github.com/repos/${fullName}/topics`;
  const res = await fetch(url, {
    headers: {
      ...headers,
      Accept: "application/vnd.github+json",
    },
  });
  if (!res.ok) return [];
  const json = await res.json().catch(() => null);
  if (!json || !Array.isArray(json.names)) return [];
  return json.names;
}

function toProjectModel(repo, topics) {
  const slug = slugify(repo.name);
  return {
    id: repo.id,
    name: repo.name,
    fullName: repo.full_name,
    slug,
    displayName: toDisplayName(repo.name),
    description: repo.description || "",
    htmlUrl: repo.html_url,
    homepage: repo.homepage || "",
    language: repo.language || "",
    topics: Array.isArray(topics) ? topics : [],
    stargazersCount: repo.stargazers_count || 0,
    forksCount: repo.forks_count || 0,
    openIssuesCount: repo.open_issues_count || 0,
    pushedAt: repo.pushed_at || "",
    updatedAt: repo.updated_at || "",
    createdAt: repo.created_at || "",
    archived: Boolean(repo.archived),
    fork: Boolean(repo.fork),
    private: Boolean(repo.private),
  };
}

function buildSitemap(projects) {
  const urls = [
    { loc: `${siteUrl}/`, lastmod: "" },
    { loc: `${siteUrl}/projects`, lastmod: "" },
    ...projects.map((p) => ({
      loc: `${siteUrl}/projects/${encodeURIComponent(p.slug)}`,
      lastmod: (p.pushedAt || "").slice(0, 10),
    })),
  ];

  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(({ loc, lastmod }) => {
      if (lastmod) {
        return `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`;
      }
      return `  <url><loc>${loc}</loc></url>`;
    }),
    "</urlset>",
    "",
  ];
  return lines.join("\n");
}

function buildRobotsTxt() {
  return [`User-agent: *`, `Allow: /`, ``, `Sitemap: ${siteUrl}/sitemap.xml`, ``].join("\n");
}

async function writeFile(filePath, content) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, content, "utf8");
}

async function main() {
  const rawRepos = await fetchAllRepos();

  const filtered = rawRepos.filter((r) => {
    if (!r || typeof r !== "object") return false;
    if (r.fork) return false;
    if (r.archived) return false;
    if (r.name === `${owner}.github.io`) return false;
    return true;
  });

  const projects = [];
  for (const repo of filtered) {
    const topics = Array.isArray(repo.topics) ? repo.topics : await fetchTopics(repo.full_name);
    projects.push(toProjectModel(repo, topics));
  }

  projects.sort((a, b) => {
    const aDate = a.pushedAt || "";
    const bDate = b.pushedAt || "";
    if (aDate !== bDate) return bDate.localeCompare(aDate);
    return (a.name || "").localeCompare(b.name || "");
  });

  const generatedJsonPath = path.join(repoRoot, "src", "data", "projects.generated.json");
  const sitemapPath = path.join(repoRoot, "public", "sitemap.xml");
  const robotsPath = path.join(repoRoot, "public", "robots.txt");

  await writeFile(generatedJsonPath, JSON.stringify(projects, null, 2) + "\n");
  await writeFile(sitemapPath, buildSitemap(projects));
  await writeFile(robotsPath, buildRobotsTxt());

  console.log(`Synced ${projects.length} projects for ${owner}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
