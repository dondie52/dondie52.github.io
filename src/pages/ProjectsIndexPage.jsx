import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Star } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import ProjectCard from "../components/ProjectCard";
import { allProjects, toProjectCardModel } from "../data/projects";

const SORT_OPTIONS = {
  recent: "Recently updated",
  stars: "Most starred",
};

function uniqSorted(values) {
  return [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function normalize(s) {
  return String(s || "").toLowerCase();
}

export default function ProjectsIndexPage() {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("all");
  const [topic, setTopic] = useState("all");
  const [sort, setSort] = useState("recent");

  useEffect(() => {
    document.title = "Projects | Georgy Moni";
  }, []);

  const languages = useMemo(() => uniqSorted(allProjects.map((p) => p.language)), []);

  const topics = useMemo(() => {
    const flat = allProjects.flatMap((p) => (Array.isArray(p.topics) ? p.topics : []));
    return uniqSorted(flat.filter((t) => t !== "portfolio-featured"));
  }, []);

  const filtered = useMemo(() => {
    const q = normalize(query);
    let list = allProjects;

    if (q) {
      list = list.filter((p) => {
        const hay = `${p.displayName || p.name} ${p.description || ""}`.toLowerCase();
        return hay.includes(q);
      });
    }

    if (language !== "all") {
      list = list.filter((p) => normalize(p.language) === normalize(language));
    }

    if (topic !== "all") {
      list = list.filter((p) => Array.isArray(p.topics) && p.topics.includes(topic));
    }

    if (sort === "stars") {
      list = [...list].sort((a, b) => (b.stargazersCount || 0) - (a.stargazersCount || 0));
    } else {
      list = [...list].sort((a, b) => String(b.pushedAt || "").localeCompare(String(a.pushedAt || "")));
    }

    return list;
  }, [query, language, topic, sort]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <PageHeader title="Projects" subtitle="Auto-synced from GitHub" backHref="/" backLabel="Home" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 space-y-10">
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-6"
        >
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">All Projects</h1>
              <p className="mt-1 text-sm text-slate-400">
                Showing <span className="text-slate-200 font-medium">{filtered.length}</span> projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects…"
                  className="w-full sm:w-72 pl-9 pr-3 py-2.5 rounded-xl bg-slate-950/40 border border-slate-800 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                />
              </div>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="px-3 py-2.5 rounded-xl bg-slate-950/40 border border-slate-800 text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              >
                <option value="all">All languages</option>
                {languages.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>

              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="px-3 py-2.5 rounded-xl bg-slate-950/40 border border-slate-800 text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              >
                <option value="all">All topics</option>
                {topics.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-3 py-2.5 rounded-xl bg-slate-950/40 border border-slate-800 text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              >
                {Object.entries(SORT_OPTIONS).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, index) => (
              <ProjectCard key={p.fullName || p.name} project={toProjectCardModel(p)} index={index} />
            ))}
          </div>

          <div className="mt-8 text-xs text-slate-500 flex items-center gap-2">
            <Star size={14} className="text-emerald-400" />
            <span>
              Tip: add the GitHub topic{" "}
              <span className="text-slate-300 font-medium">portfolio-featured</span> to pin projects to the homepage.
            </span>
          </div>

          <div className="mt-3 text-xs text-slate-600">
            Want deeper case studies? Add a markdown file in{" "}
            <code className="text-slate-400">src/content/case-studies/&lt;slug&gt;.md</code>.
          </div>
        </motion.section>

        <div className="text-sm text-slate-400">
          <Link to="/" className="text-emerald-400 hover:text-emerald-300">
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

