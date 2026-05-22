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
      subtitle="Auto-synced from my GitHub (no manual updates)"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          Tip: add the <span className="text-slate-300 font-medium">portfolio-featured</span> topic to repos you want
          to highlight.
        </p>
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
    </SectionWrapper>
  );
}

