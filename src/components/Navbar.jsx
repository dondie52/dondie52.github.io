import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navSections, personalInfo } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  el.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(navSections.map((s) => s.id));
  const firstMobileItemRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    requestAnimationFrame(() => {
      firstMobileItemRef.current?.focus?.();
    });

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleNavClick = (id) => {
    scrollToId(id);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-slate-950/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <motion.button
          onClick={() => scrollToId("top")}
          type="button"
          aria-label="Scroll to top"
          className="text-sm font-semibold tracking-tight group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors">
            {"<"}
          </span>
          <span className="text-slate-100">{personalInfo.name.split(" ")[0]}</span>
          <span className="text-slate-400">&nbsp;{personalInfo.name.split(" ")[1]}</span>
          <span className="text-emerald-400 group-hover:text-emerald-300 transition-colors">
            {"/>"}
          </span>
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navSections.map((s) => {
            const isActive = activeSection === s.id;
            const isCta = s.id === "contact";

            return (
              <button
                key={s.id}
                onClick={() => handleNavClick(s.id)}
                type="button"
                aria-current={isActive ? "location" : undefined}
                className={
                  isCta
                    ? `ml-1 px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                        isActive
                          ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                          : "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
                      }`
                    : `relative px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                        isActive
                          ? "text-emerald-400"
                          : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                      }`
                }
              >
                {s.label}
                {!isCta && isActive ? (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-emerald-500/10 border border-emerald-500/20 rounded-lg -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                ) : null}
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 rounded-lg transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50"
            id="mobile-nav"
          >
            <div className="px-4 py-4 space-y-1">
              {navSections.map((s, i) => (
                <motion.button
                  key={s.id}
                  ref={i === 0 ? firstMobileItemRef : undefined}
                  type="button"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(s.id)}
                  aria-current={activeSection === s.id ? "location" : undefined}
                  className={`block w-full text-left px-4 py-3 text-sm rounded-lg transition-colors ${
                    s.id === "contact"
                      ? activeSection === s.id
                        ? "bg-emerald-500 text-slate-950 font-semibold"
                        : "bg-emerald-500/10 text-emerald-400 font-semibold hover:bg-emerald-500/20"
                      : activeSection === s.id
                      ? "text-emerald-400 bg-emerald-500/10 font-medium"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 font-medium"
                  }`}
                >
                  {s.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

