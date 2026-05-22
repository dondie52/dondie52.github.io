import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star, GitFork, Clock } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import NotFoundPage from "./NotFoundPage";
import { getProjectBySlug } from "../data/projects";

function formatDate(value) {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function loadCaseStudies() {
  // Optional: add files like `src/content/case-studies/<slug>.md`
  // We load raw text to avoid adding dependencies.
  const modules = import.meta.glob("../content/case-studies/*.md", { as: "raw", eager: true });
  const map = new Map();
  for (const [file, content] of Object.entries(modules)) {
    const match = file.match(/case-studies\/(.+)\.md$/);
    const slug = match?.[1];
    if (slug && typeof content === "string") map.set(slug, content);
  }
  return map;
}

function renderMarkdownBasic(markdown) {
  const lines = String(markdown || "").replace(/\r\n/g, "\n").split("\n");
  const blocks = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i += 1;
      continue;
    }

    // code fence
    if (line.startsWith("```")) {
      const codeLines = [];
      i += 1;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i += 1;
      }
      i += 1;
      blocks.push({ type: "code", value: codeLines.join("\n") });
      continue;
    }

    // headings
    const headingMatch = line.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      blocks.push({ type: "heading", level: headingMatch[1].length, value: headingMatch[2].trim() });
      i += 1;
      continue;
    }

    // unordered list
    if (line.match(/^[-*]\s+/)) {
      const items = [];
      while (i < lines.length && lines[i].match(/^[-*]\s+/)) {
        items.push(lines[i].replace(/^[-*]\s+/, "").trim());
        i += 1;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    // paragraph (merge until blank)
    const para = [line.trim()];
    i += 1;
    while (i < lines.length && lines[i].trim()) {
      para.push(lines[i].trim());
      i += 1;
    }
    blocks.push({ type: "p", value: para.join(" ") });
  }

  return blocks.map((b, idx) => {
    if (b.type === "heading") {
      const Tag = b.level === 1 ? "h2" : b.level === 2 ? "h3" : "h4";
      return (
        <Tag key={idx} className="mt-8 first:mt-0 text-slate-100 font-semibold">
          {b.value}
        </Tag>
      );
    }
    if (b.type === "ul") {
      return (
        <ul key={idx} className="mt-4 list-disc pl-5 space-y-2 text-slate-300">
          {b.items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ul>
      );
    }
    if (b.type === "code") {
      return (
        <pre
          key={idx}
          className="mt-4 overflow-auto rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-sm text-slate-200"
        >
          <code>{b.value}</code>
        </pre>
      );
    }
    return (
      <p key={idx} className="mt-4 text-slate-300 leading-relaxed">
        {b.value}
      </p>
    );
  });
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = useMemo(() => getProjectBySlug(slug), [slug]);
  const caseStudies = useMemo(() => loadCaseStudies(), []);
  const caseStudyText = slug ? caseStudies.get(slug) : null;

  useEffect(() => {
    document.title = project ? `${project.displayName || project.name} | Georgy Moni` : "Project | Georgy Moni";
  }, [project]);

  if (!project) return <NotFoundPage />;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-slate-100 focus:ring-2 focus:ring-emerald-500/60"
      >
        Skip to content
      </a>
      <PageHeader title="Project" subtitle={project.displayName || project.name} backHref="/projects" backLabel="All projects" />

      <main id="content" tabIndex={-1} className="max-w-3xl mx-auto px-4 sm:px-6 pt-24 pb-20">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">{project.displayName || project.name}</h1>
          {project.description ? <p className="mt-3 text-slate-300 leading-relaxed">{project.description}</p> : null}

          <div className="mt-6 flex flex-wrap gap-2">
            {project.language ? (
              <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/50 text-xs font-medium text-slate-300">
                {project.language}
              </span>
            ) : null}
            {(Array.isArray(project.topics) ? project.topics : [])
              .filter((t) => t && t !== "portfolio-featured")
              .slice(0, 10)
              .map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg bg-slate-800/30 border border-slate-800 text-xs font-medium text-slate-400"
                >
                  {t}
                </span>
              ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Star size={16} className="text-emerald-400" />
                Stars
              </div>
              <div className="mt-1 text-lg font-semibold">{project.stargazersCount || 0}</div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <GitFork size={16} className="text-emerald-400" />
                Forks
              </div>
              <div className="mt-1 text-lg font-semibold">{project.forksCount || 0}</div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Clock size={16} className="text-emerald-400" />
                Updated
              </div>
              <div className="mt-1 text-sm text-slate-200">{formatDate(project.pushedAt) || "—"}</div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.htmlUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 font-medium hover:bg-emerald-500/20 transition-colors"
            >
              <Github size={18} />
              <span>View on GitHub</span>
            </a>
            {project.homepage ? (
              <a
                href={project.homepage}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 text-slate-300 font-medium hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            ) : null}
          </div>

          {caseStudyText ? (
            <section className="mt-10 rounded-2xl border border-slate-800/50 bg-slate-900/30 p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-emerald-400">Case study</div>
              <article className="mt-4">{renderMarkdownBasic(caseStudyText)}</article>
            </section>
          ) : (
            <section className="mt-10 rounded-2xl border border-slate-800/50 bg-slate-900/30 p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-emerald-400">Case study</div>
              <p className="mt-3 text-slate-300 leading-relaxed">
                This page is auto-generated from GitHub metadata. To add a richer case study, create{" "}
                <code className="text-slate-200">src/content/case-studies/{project.slug}.md</code>.
              </p>
            </section>
          )}

          <div className="mt-10 flex gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 font-medium hover:bg-emerald-500/20 transition-colors"
            >
              Back to projects
            </Link>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-slate-700 text-slate-300 font-medium hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
            >
              Contact me
            </a>
          </div>
        </motion.div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
