// import {
//   ArrowDown,
//   ArrowRight,
//   Github,
//   Linkedin,
//   Mail,
// } from "lucide-react";

import { heroData } from "./hero.data";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute right-0 top-1/2 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Left Content */}
          <div>
            {/* Greeting */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

              <span className="text-sm font-medium text-cyan-300">
                Available for opportunities
              </span>
            </div>

            <p className="mb-3 text-lg font-medium text-slate-400">
              {heroData.greeting}
            </p>

            {/* Name */}
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {heroData.name}
            </h1>

            {/* Role */}
            <h2 className="mt-5 text-2xl font-semibold sm:text-3xl">
              <span className="text-slate-300">
                {heroData.role}
              </span>
              <span className="text-cyan-400">.</span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              {heroData.description}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <a
                href={heroData.primaryButton.href}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                {heroData.primaryButton.label}

                {/* <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                /> */}
              </a>

              <a
                href={heroData.secondaryButton.href}
                download
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10"
              >
                {heroData.secondaryButton.label}
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-3">
              <span className="mr-2 text-sm text-slate-500">
                Connect:
              </span>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:text-cyan-400"
              >
                {/* <Github size={18} /> */}
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:text-cyan-400"
              >
                {/* <Linkedin size={18} /> */}
              </a>

              <a
                href="mailto:your-email@example.com"
                aria-label="Email"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:text-cyan-400"
              >
                {/* <Mail size={18} /> */}
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">

            {/* Main Developer Card */}
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-xl">

              {/* Top Bar */}
              <div className="mb-8 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>

                <span className="text-xs text-slate-500">
                  developer.js
                </span>
              </div>

              {/* Code */}
              <div className="font-mono text-sm leading-8">
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">developer</span>{" "}
                  = {"{"}
                </p>

                <p className="pl-5">
                  <span className="text-slate-500">name:</span>{" "}
                  <span className="text-green-300">
                    "Sudeep"
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  <span className="text-slate-500">role:</span>{" "}
                  <span className="text-green-300">
                    "Software Developer"
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  <span className="text-slate-500">
                    stack:
                  </span>{" "}
                  <span className="text-green-300">
                    "React + Node"
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  <span className="text-slate-500">
                    passion:
                  </span>{" "}
                  <span className="text-green-300">
                    "Building"
                  </span>
                </p>

                <p>{"}"}</p>
              </div>

              {/* Status */}
              <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />

                  <span className="text-sm text-slate-300">
                    Currently coding
                  </span>
                </div>

                <span className="text-xs text-slate-500">
                  2026
                </span>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur-xl">
              <p className="text-xs text-slate-500">
                Focus
              </p>

              <p className="mt-1 font-semibold text-white">
                Clean & Scalable
              </p>
            </div>

            <div className="absolute -right-4 -top-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-4 shadow-xl backdrop-blur-xl">
              <p className="text-xs text-cyan-300">
                Stack
              </p>

              <p className="mt-1 font-semibold text-white">
                MERN
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {heroData.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.04]"
            >
              <p className="text-2xl font-bold text-white">
                {stat.value}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="mx-auto mt-16 flex w-fit flex-col items-center gap-2 text-slate-500 transition-colors hover:text-cyan-400"
          aria-label="Scroll to About section"
        >
          <span className="text-xs uppercase tracking-[0.25em]">
            Scroll
          </span>

          {/* <ArrowDown
            size={18}
            className="animate-bounce"
          /> */}
        </a>
      </div>
    </section>
  );
}

export default Hero;