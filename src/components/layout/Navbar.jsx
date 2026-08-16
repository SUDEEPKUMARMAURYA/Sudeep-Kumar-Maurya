import { useEffect, useState } from "react";
import {
  Download,
  Menu,
  X,
} from "lucide-react";

import { navigationLinks } from "../../data/navigation";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-slate-950/80 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={handleNavClick}
            className="group flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-sm font-bold text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/15">
              SK
            </span>

            <div className="hidden sm:block">
              <p className="text-sm font-bold text-white">
                Sudeep Kumar
              </p>

              <p className="text-[11px] text-slate-600">
                Software Developer
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-400 transition-all duration-300 hover:bg-white/[0.04] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2.5 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/15 hover:text-cyan-200"
            >
              <Download
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />

              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((previous) => !previous)}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-slate-300 transition-colors hover:border-cyan-400/20 hover:text-cyan-400 lg:hidden"
          >
            {isMenuOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isMenuOpen
              ? "max-h-[500px] pb-5 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="rounded-2xl border border-white/10 bg-slate-900/95 p-3 shadow-2xl backdrop-blur-xl">

            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-2 border-t border-white/5 pt-2">
              <a
                href="/resume.pdf"
                download
                onClick={handleNavClick}
                className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>

          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;