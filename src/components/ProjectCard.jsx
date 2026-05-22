import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";

export default function ProjectCard({ project, index }) {
  const IconComponent = Icons[project.icon] || Icons.Folder;
  const isInternalLink = project.link?.startsWith("/");

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10"
    >
      {/* Top gradient bar */}
      <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />

      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 text-emerald-400 group-hover:from-emerald-500/30 group-hover:to-teal-500/20 transition-all duration-300">
              <IconComponent size={22} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-slate-100 group-hover:text-emerald-300 transition-colors">
                {project.title}
              </h3>
              {project.period ? <span className="text-xs text-slate-500">{project.period}</span> : null}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed mb-5">{project.description}</p>

        {/* Tech Stack */}
        {Array.isArray(project.tech) && project.tech.length > 0 ? (
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/50 text-xs font-medium text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}

        {/* Links */}
        <div className="flex flex-wrap items-center gap-3">
          {project.link && isInternalLink ? (
            <Link
              to={project.link}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 transition-colors"
            >
              <ArrowRight size={16} />
              <span>View Details</span>
            </Link>
          ) : project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 transition-colors"
            >
              <Github size={16} />
              <span>View Code</span>
            </a>
          ) : null}

          {isInternalLink && project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 text-slate-400 text-sm font-medium hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          ) : null}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 text-slate-400 text-sm font-medium hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

