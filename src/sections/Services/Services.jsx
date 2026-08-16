import { ArrowUpRight } from "lucide-react";

import { servicesData } from "./services.data";

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-white/5 bg-slate-950 py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Services
            </p>

            <h2 className="max-w-md text-4xl font-bold tracking-tight text-white sm:text-5xl">
              What I can
              <span className="block text-slate-500">
                build for you.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:pt-10">
            <p className="text-base leading-8 text-slate-400 sm:text-lg">
              From responsive interfaces to complete web applications,
              I focus on building practical digital solutions that are
              clean, scalable and easy to maintain.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04] sm:p-7"
              >
                {/* Hover Glow */}
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/5 blur-2xl transition-all duration-500 group-hover:bg-cyan-400/10" />

                {/* Icon */}
                <div className="relative flex items-center justify-between">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                    <Icon
                      size={23}
                      className="text-cyan-400"
                    />
                  </div>

                  <span className="font-mono text-xs text-slate-600">
                    0{service.id}
                  </span>
                </div>

                {/* Content */}
                <div className="relative mt-7">
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="relative mt-6 space-y-3 border-t border-white/5 pt-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-slate-400"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Arrow */}
                <div className="relative mt-7 flex justify-end">
                  <span className="rounded-full border border-white/10 p-2 text-slate-600 transition-all duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-400">
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-cyan-400/10 bg-cyan-400/[0.03] p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Have a project in mind?
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Let's build something useful.
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Tell me about your idea, requirements or business problem
                and let's discuss how it can be turned into a web solution.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              Start a Project

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;