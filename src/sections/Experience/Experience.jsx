import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
} from "lucide-react";

import { experienceData } from "./experience.data";

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-white/5 bg-slate-950 py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Experience
            </p>

            <h2 className="max-w-md text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Building through
              <span className="block text-slate-500">
                real-world experience.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:pt-10">
            <p className="text-base leading-8 text-slate-400 sm:text-lg">
              My experience has been focused on building practical web
              applications, solving development problems and continuously
              improving my approach to writing scalable and maintainable code.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">

          {/* Timeline Line */}
          <div className="absolute left-[11px] top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/60 via-white/10 to-transparent sm:block" />

          <div className="space-y-10">
            {experienceData.map((experience, index) => (
              <article
                key={`${experience.company}-${index}`}
                className="relative sm:pl-14"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-8 hidden h-6 w-6 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950 sm:flex">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/40" />
                </div>

                {/* Experience Card */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.04] sm:p-8">

                  {/* Top */}
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                          {experience.type}
                        </span>

                        <span className="text-sm text-slate-500">
                          {experience.duration}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white">
                        {experience.role}
                      </h3>

                      <p className="mt-2 text-lg font-medium text-cyan-400">
                        {experience.company}
                      </p>
                    </div>

                    <a
                      href="#contact"
                      className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
                    >
                      Let's connect
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </a>
                  </div>

                  {/* Meta */}
                  <div className="mt-6 flex flex-wrap gap-4 border-y border-white/5 py-4">

                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <CalendarDays
                        size={16}
                        className="text-cyan-400"
                      />
                      {experience.duration}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <MapPin
                        size={16}
                        className="text-cyan-400"
                      />
                      {experience.location}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <BriefcaseBusiness
                        size={16}
                        className="text-cyan-400"
                      />
                      {experience.type}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-6 max-w-4xl text-sm leading-7 text-slate-400 sm:text-base">
                    {experience.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mt-8">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                      Key Responsibilities
                    </h4>

                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {experience.responsibilities.map(
                        (responsibility) => (
                          <li
                            key={responsibility}
                            className="flex items-start gap-3 text-sm leading-6 text-slate-500"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                            <span>{responsibility}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mt-8">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                      Technologies
                    </h4>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-white/10 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-400 transition-colors hover:border-cyan-400/20 hover:text-cyan-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="font-semibold text-white">
              Interested in working together?
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Let's discuss your next project or opportunity.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
          >
            Get in touch
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Experience;