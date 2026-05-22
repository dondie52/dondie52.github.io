import rawProjects from "./projects.generated.json";

export const allProjects = Array.isArray(rawProjects) ? rawProjects : [];

export function getProjectBySlug(slug) {
  if (!slug) return null;
  return allProjects.find((p) => p?.slug === slug) || null;
}

function parseDateString(value) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date;
}

function sortByStarsThenPushed(a, b) {
  const aStars = a?.stargazersCount || 0;
  const bStars = b?.stargazersCount || 0;
  if (aStars !== bStars) return bStars - aStars;

  const aPushed = a?.pushedAt || "";
  const bPushed = b?.pushedAt || "";
  if (aPushed !== bPushed) return bPushed.localeCompare(aPushed);

  return String(a?.name || "").localeCompare(String(b?.name || ""));
}

export function getFeaturedProjects(limit = 6) {
  const byTopic = allProjects.filter(
    (p) => Array.isArray(p?.topics) && p.topics.includes("portfolio-featured")
  );
  const source = byTopic.length > 0 ? byTopic : allProjects;
  return [...source].sort(sortByStarsThenPushed).slice(0, limit);
}

function iconFromLanguage(language) {
  const l = String(language || "").toLowerCase();
  if (l === "javascript" || l === "typescript") return "Code2";
  if (l === "java") return "Coffee";
  if (l === "python") return "Terminal";
  if (l === "dart") return "Smartphone";
  return "Folder";
}

function prettyTopic(topic) {
  return String(topic || "").replace(/-/g, " ");
}

function buildTech(project) {
  const tech = [];
  if (project?.language) tech.push(project.language);
  const topics = Array.isArray(project?.topics) ? project.topics : [];
  for (const t of topics) {
    if (!t || t === "portfolio-featured") continue;
    tech.push(prettyTopic(t));
    if (tech.length >= 4) break;
  }
  return tech;
}

function displayTitle(project) {
  return project?.displayName || project?.name || "Untitled Project";
}

export function toProjectCardModel(project) {
  const pushed = parseDateString(project?.pushedAt);
  const year = pushed ? String(pushed.getFullYear()) : "";

  return {
    title: displayTitle(project),
    period: year,
    description: project?.description || "No description provided yet.",
    tech: buildTech(project),
    icon: iconFromLanguage(project?.language),
    link: `/projects/${project?.slug || ""}`,
    repoUrl: project?.htmlUrl || "",
    liveUrl: project?.homepage || "",
  };
}
