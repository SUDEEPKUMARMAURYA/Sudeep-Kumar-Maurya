import { ArrowUpRight, Code2 } from "lucide-react";
import { aboutData } from "./about.data";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/5 bg-slate-950 py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              {aboutData.eyebrow}
            </p>

            <h2 className="max-w-md text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {aboutData.title}{" "}
              <span className="text-slate-500">
                {aboutData.highlightedTitle}
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-3xl">
            {aboutData.description.map((paragraph) => (
              <p
                key={paragraph}
                className="mb-5 text-base leading-8 text-slate-400 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}

            {/* Tech Stack */}
            <div className="mt-8 flex flex-wrap gap-3">
              {aboutData.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutData.highlights.map((item) => (
            <article
              key={item.number}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04]"
            >
              {/* Number */}
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-mono text-cyan-400">
                  {item.number}
                </span>

                <ArrowUpRight
                  size={18}
                  className="text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                />
              </div>

              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom Developer Card */}
        <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-start gap-4">
              <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                <Code2
                  size={24}
                  className="text-cyan-400"
                />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Always building. Always learning.
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Exploring better ways to build useful digital products.
                </p>
              </div>
            </div>

            <a
              href="#projects"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
            >
              Explore my work
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;