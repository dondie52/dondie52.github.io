import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo } from "../data/content";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <footer className="relative border-t border-slate-800/50 bg-slate-950">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-slate-500">
            <span>© {new Date().getFullYear()}</span>
            <span className="text-slate-400 font-medium">{personalInfo.name}</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:flex items-center gap-1">
              Built with <Heart size={12} className="text-rose-500 fill-rose-500" /> using React
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="p-2 text-slate-500 hover:text-emerald-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200 hover:scale-110"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <p className="mt-4 text-center text-xs text-slate-600">
          React • Tailwind CSS • Framer Motion • Vite
        </p>
      </div>
    </footer>
  );
}

