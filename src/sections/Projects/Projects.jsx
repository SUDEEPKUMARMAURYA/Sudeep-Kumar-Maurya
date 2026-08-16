import { ArrowUpRight } from "lucide-react";

import { projectsData } from "./projects.data";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/5 bg-slate-950 py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Selected Work
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Projects that turn
              <span className="block text-slate-500">
                ideas into reality.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400">
              A selection of applications and projects I've worked on,
              focusing on usability, responsive design and maintainable
              architecture.
            </p>
          </div>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
          >
            View GitHub
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-400/5 via-transparent to-blue-500/5 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-semibold text-white">
                Have an idea for a project?
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Let's turn it into a working product.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              Start a conversation
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;