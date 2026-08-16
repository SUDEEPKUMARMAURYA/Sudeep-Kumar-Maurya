import { useState } from "react";
// import {
//   ArrowUpRight,
//   Github,
//   Linkedin,
//   Mail,
//   MapPin,
//   Send,
// } from "lucide-react";

import { contactData } from "./contact.data";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setStatus("Thank you! Your message is ready to be sent.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 bg-slate-950 py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            {contactData.eyebrow}
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {contactData.title}
            <span className="block text-slate-500">
              {contactData.highlightedTitle}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400">
            {contactData.description}
          </p>
        </div>

        {/* Contact Content */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-[0.75fr_1.25fr]">

          {/* Contact Info */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">

            <h3 className="text-xl font-semibold text-white">
              Get in touch
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Whether you want to discuss a project, a job opportunity or
              simply connect, you can reach me through the following channels.
            </p>

            {/* Email */}
            <a
              href={`mailto:${contactData.email}`}
              className="group mt-8 flex items-center gap-4 rounded-2xl border border-white/5 bg-slate-900/50 p-4 transition-all duration-300 hover:border-cyan-400/20"
            >
              <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                {/* <Mail
                  size={20}
                  className="text-cyan-400"
                /> */}
              </div>

              <div className="min-w-0">
                <p className="text-xs text-slate-600">
                  Email
                </p>

                <p className="mt-1 truncate text-sm font-medium text-slate-300 group-hover:text-cyan-400">
                  {contactData.email}
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="mt-3 flex items-center gap-4 rounded-2xl border border-white/5 bg-slate-900/50 p-4">
              <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                {/* <MapPin
                  size={20}
                  className="text-cyan-400"
                /> */}
              </div>

              <div>
                <p className="text-xs text-slate-600">
                  Location
                </p>

                <p className="mt-1 text-sm font-medium text-slate-300">
                  India
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Find me online
              </p>

              <div className="mt-4 flex gap-3">

                <a
                  href={contactData.socialLinks[0].href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:text-cyan-400"
                >
                  {/* <Github size={19} /> */}
                </a>

                <a
                  href={contactData.socialLinks[1].href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:text-cyan-400"
                >
                  {/* <Linkedin size={19} /> */}
                </a>

              </div>
            </div>

            {/* Availability */}
            <div className="mt-10 rounded-2xl border border-green-400/10 bg-green-400/[0.03] p-4">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />

                <span className="text-sm font-medium text-green-300">
                  Open to opportunities
                </span>
              </div>

              <p className="mt-2 text-xs leading-5 text-slate-600">
                Available for software development roles and selected freelance
                projects.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white">
                Send a message
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Fill out the form and I'll get back to you.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/10"
                  />
                </div>

              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  required
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/10"
                />
              </div>

              {/* Status */}
              {status && (
                <div className="rounded-xl border border-green-400/10 bg-green-400/5 px-4 py-3 text-sm text-green-300">
                  {status}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                Send Message

                {/* <Send
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                /> */}
              </button>

            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-5 rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-center sm:flex-row sm:text-left sm:p-8">
          <div>
            <p className="font-semibold text-white">
              Prefer email?
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Send me a direct message anytime.
            </p>
          </div>

          <a
            href={`mailto:${contactData.email}`}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
          >
            {contactData.email}

            {/* <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            /> */}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;