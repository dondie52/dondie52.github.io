import SectionWrapper from "../components/SectionWrapper";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { getFeaturedProjects, toProjectCardModel } from "../data/projects";

export default function Projects() {
  const featured = getFeaturedProjects(6);

  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="A quick tour of recent work across UI, data, and systems"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-slate-500">Open any project for tech stack, code, and details.</p>
        <Link
          to="/projects"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 transition-colors"
        >
          View all projects
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, index) => (
          <ProjectCard
            key={project.fullName || project.name}
            project={toProjectCardModel(project)}
            index={index}
          />
        ))}
      </div>

      <details className="rounded-2xl border border-slate-800/50 bg-slate-900/30 backdrop-blur-sm p-5 text-sm">
        <summary className="cursor-pointer select-none text-slate-200 font-medium">
          How projects are selected
        </summary>
        <p className="mt-2 text-slate-400 leading-relaxed">
          Projects are auto-synced from GitHub. Add the{" "}
          <span className="text-slate-200 font-medium">portfolio-featured</span> topic to repos you want to pin here.
        </p>
      </details>
    </SectionWrapper>
  );
}

