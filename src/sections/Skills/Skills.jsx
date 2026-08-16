import { ArrowUpRight } from "lucide-react";
import { skillCategories } from "./skills.data";

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/5 bg-slate-950 py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Skills & Technologies
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Tools I use to turn
            <span className="block text-slate-500">
              ideas into products.
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            A practical toolkit built through real-world projects,
            continuous learning and hands-on development.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04] sm:p-8"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                      <Icon
                        size={23}
                        className="text-cyan-400"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {category.title}
                      </h3>

                      <p className="mt-1 max-w-md text-sm leading-6 text-slate-500">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                  />
                </div>

                {/* Skills */}
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="rounded-xl border border-white/5 bg-slate-900/60 p-4 transition-colors duration-300 hover:border-white/10"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-medium text-slate-200">
                          {skill.name}
                        </span>

                        <span className="text-[11px] text-slate-500">
                          {skill.level}
                        </span>
                      </div>

                      {/* Skill Indicator */}
                      <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/5">
                        <div
                          className={`h-full rounded-full ${
                            skill.level === "Advanced"
                              ? "w-[90%]"
                              : "w-[70%]"
                          } bg-cyan-400/70 transition-all duration-500 group-hover:bg-cyan-400`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Tech Statement */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-400/5 via-transparent to-blue-500/5 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">
                Always exploring new technologies
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Currently focused on improving full-stack development
                and building production-ready applications.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-cyan-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              Learning & Building
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;