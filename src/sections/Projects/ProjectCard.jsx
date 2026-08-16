// import {
//   ArrowUpRight,
//   ExternalLink,
//   Github,
// } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <article
      className={`group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/20 hover:bg-white/[0.04] ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Project Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-sm text-slate-600">
              Project Preview
            </span>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

        {/* Category */}
        <div className="absolute left-5 top-5">
          <span className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-md">
            {project.category}
          </span>
        </div>

        {/* Featured */}
        {project.featured && (
          <div className="absolute right-5 top-5">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-md">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">

        {/* Title */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              {project.title}
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              {project.description}
            </p>
          </div>

          {/* <ArrowUpRight
            size={22}
            className="shrink-0 text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
          /> */}
        </div>

        {/* Features */}
        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          {project.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-sm text-slate-500"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              {feature}
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-white/10 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-400 transition-colors hover:border-cyan-400/20 hover:text-cyan-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-7 flex flex-wrap gap-3 border-t border-white/5 pt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400/20 hover:text-cyan-400"
          >
            {/* <Github size={16} /> */}
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300"
          >
            {/* <ExternalLink size={16} /> */}
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;