// import {
//   ArrowUp,
//   Github,
//   Linkedin,
//   Mail,
// } from "lucide-react";

const footerLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">

          {/* Brand */}
          <div className="max-w-md">

            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 font-bold text-cyan-400">
                SK
              </span>

              <div>
                <p className="font-bold text-white">
                  Sudeep Kumar
                </p>

                <p className="text-xs text-slate-600">
                  Software Developer
                </p>
              </div>
            </a>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Software Developer focused on building modern, responsive
              and scalable web applications with clean and maintainable
              code.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:text-cyan-400"
              >
                {/* <Github size={18} /> */}
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:text-cyan-400"
              >
                {/* <Linkedin size={18} /> */}
              </a>

              <a
                href="mailto:your-email@example.com"
                aria-label="Email"
                className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:text-cyan-400"
              >
                {/* <Mail size={18} /> */}
              </a>

            </div>
          </div>

          {/* Navigation */}
          <div className="md:justify-self-end">

            <h3 className="text-sm font-semibold text-white">
              Navigation
            </h3>

            <nav className="mt-5 grid grid-cols-2 gap-x-10 gap-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-500 transition-colors hover:text-cyan-400"
                >
                  {link.label}
                </a>
              ))}
            </nav>

          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/5" />

        {/* Bottom */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-slate-600">
            © {currentYear} Sudeep Kumar. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <p className="text-xs text-slate-600">
              Built with React & Tailwind CSS
            </p>

            <a
              href="#home"
              aria-label="Back to top"
              className="group rounded-full border border-white/10 p-2 text-slate-500 transition-all duration-300 hover:border-cyan-400/20 hover:text-cyan-400"
            >
              {/* <ArrowUp
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              /> */}
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;