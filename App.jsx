import React from "react";
import { motion } from "framer-motion";

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const navSections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "beyond-tech", label: "Beyond Tech" },
  { id: "contact", label: "Contact" },
];

const projects = [
  {
    title: "Governance & Monitoring Web Interface",
    period: "2025",
    description:
      "Frontend for a production governance and monitoring platform, focused on responsive layouts, real-time views, and intuitive workflows.",
    tech: ["React 18", "Tailwind CSS", "WebSockets", "REST APIs", "Charting Library"],
    link: "https://github.com/dondie52",
  },
  {
    title: "KYC Review Dashboard",
    period: "2024",
    description:
      "Professional dashboard for document review, approvals, and analytics with a structured, clean UX for financial workflows.",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "https://github.com/dondie52",
  },
  {
    title: "Student Device Management Portal",
    period: "2024",
    description:
      "Web system for tracking student laptop agents and sales across tertiary institutions in Botswana.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    link: "https://github.com/dondie52",
  },
];

const skills = {
  programming: ["JavaScript (ES6+)", "HTML5", "CSS3", "Python", "SQL", "Java", "VBA"],
  frontend: [
    "React 18 (Vite)",
    "Tailwind CSS",
    "React Hooks",
    "Context API / Zustand",
    "Responsive & mobile-first UI",
    "Component-based architecture",
    "Charting libraries (e.g. Chart.js)",
  ],
  backend: ["Node.js (Express)", "REST API integration", "WebSockets / real-time updates"],
  tools: ["Git & GitHub", "Linux (Ubuntu / Mint)", "Supabase", "Firebase", "VS Code", "Postman"],
  itSupport: [
    "Hardware & software troubleshooting",
    "Basic server setup & configuration",
    "Networking & cabling",
    "Printer and workstation support",
    "Technical documentation",
  ],
};

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-24">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <BeyondTech />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <button
          onClick={() => scrollToId("top")}
          className="text-sm font-semibold tracking-tight"
        >
          <span className="text-sky-400">{"<"}</span>
          Georgy&nbsp;Moni
          <span className="text-sky-400">{"/>"}</span>
        </button>
        <div className="hidden sm:flex gap-4 text-sm">
          {navSections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToId(s.id)}
              className="text-slate-300 hover:text-sky-400 transition-colors"
            >
              {s.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-start md:items-center gap-8"
      >
        <div className="flex-1 space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-sky-400">
            Frontend Developer • Information Systems
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            I&apos;m <span className="text-sky-400">Georgy&nbsp;Moni</span>.
          </h1>
          <p className="text-lg text-slate-200 leading-relaxed">
            Frontend Developer with full-spectrum IT skills across systems, support, and software.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            I design and build clean, responsive web interfaces and contribute to production systems
            used by real users. My background in IT support, networking, and system operations gives
            me a practical, end-to-end view of how technology is deployed, maintained, and improved.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => scrollToId("projects")}
              className="px-4 py-2 rounded-full bg-sky-500 hover:bg-sky-400 text-sm font-medium transition-colors"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToId("contact")}
              className="px-4 py-2 rounded-full border border-slate-700 hover:border-sky-400 text-sm font-medium transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full md:w-60"
        >
          <div className="relative aspect-square rounded-3xl border border-slate-800 bg-gradient-to-br from-sky-500/10 via-slate-900 to-purple-500/10 flex items-center justify-center">
            <span className="text-5xl">👨‍💻</span>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-xs text-slate-200">
              Frontend Developer
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function SectionWrapper({ id, title, children }) {
  return (
    <section id={id} className="space-y-6">
      <div className="flex items-center gap-3">
        <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-sky-500/70 to-transparent" />
      </div>
      {children}
    </section>
  );
}

function About() {
  return (
    <SectionWrapper id="about" title="About Me">
      <p className="text-slate-300 leading-relaxed">
        I am a Bachelor of Information Systems (Computer Information Systems) student at the
        University of Botswana. I have practical experience building production-grade frontends and
        supporting technical environments. My focus is on writing reliable, maintainable code and
        delivering interfaces that are clear, efficient, and aligned with user needs.
      </p>
      <p className="text-slate-300 leading-relaxed">
        Combining frontend development with IT support experience allows me to understand how
        applications behave in real environments—from networks and servers up to the browser. I am
        intentional about continuous improvement, professional standards, and learning modern tools
        in the web ecosystem.
      </p>
    </SectionWrapper>
  );
}

function Skills() {
  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="grid gap-6 md:grid-cols-2">
        <SkillCard title="Programming & Languages" items={skills.programming} />
        <SkillCard title="Frontend Development" items={skills.frontend} />
        <SkillCard title="Backend & APIs" items={skills.backend} />
        <SkillCard title="Tools & Platforms" items={skills.tools} />
        <SkillCard title="IT Support & Systems" items={skills.itSupport} />
      </div>
    </SectionWrapper>
  );
}

function SkillCard({ title, items }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
      <h3 className="text-sm font-semibold mb-3 text-slate-100">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="px-2.5 py-1 rounded-full bg-slate-950/70 border border-slate-700 text-[11px] text-slate-200"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Experience() {
  return (
    <SectionWrapper id="experience" title="Experience">
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div>
              <h3 className="font-semibold text-slate-50">Frontend Developer</h3>
              <p className="text-sm text-slate-400">MaungoCraft</p>
            </div>
            <p className="text-xs text-slate-400">August 2025 – Present • Gaborone, Botswana</p>
          </div>
          <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
            <li>
              Build and maintain a modern React 18 + Tailwind CSS frontend used in production
              environments.
            </li>
            <li>
              Develop scalable, reusable UI components and improve layout responsiveness across
              multiple modules.
            </li>
            <li>
              Implement real-time client updates using WebSockets with robust fallback strategies.
            </li>
            <li>
              Integrate REST APIs and deliver interactive visual components using charting libraries.
            </li>
            <li>
              Enhance authentication flows and refine role-based interface behaviour for different
              user types.
            </li>
            <li>
              Optimise React state management and rendering to improve performance and consistency.
            </li>
            <li>
              Reduce unnecessary network traffic by improving data-fetching patterns and usage.
            </li>
            <li>
              Collaborate with backend, QA, and product stakeholders to deliver reliable,
              production-ready features.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div>
              <h3 className="font-semibold text-slate-50">IT Support Technician (Intern)</h3>
              <p className="text-sm text-slate-400">IQube Botswana</p>
            </div>
            <p className="text-xs text-slate-400">June 2025 – July 2025</p>
          </div>
          <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
            <li>
              Provided technical support for hardware, software, and network-related issues for
              office users.
            </li>
            <li>
              Assisted with server configuration, monitoring, and basic maintenance tasks.
            </li>
            <li>
              Prepared workstations, configured user accounts, and set up email and application
              access.
            </li>
            <li>
              Troubleshot printers, network devices, and connectivity problems across locations.
            </li>
            <li>Supported network installations and structured cabling activities.</li>
            <li>Documented incidents and resolutions to improve internal support processes.</li>
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

function Projects() {
  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="font-semibold text-slate-50">{project.title}</h3>
                <span className="text-xs text-slate-400">{project.period}</span>
              </div>
              <p className="text-sm text-slate-300 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-full bg-slate-950/70 border border-slate-700 text-[11px] text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-2 mt-2">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs px-3 py-1 rounded-full bg-sky-500/90 hover:bg-sky-400 text-slate-950 font-medium transition-colors"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}

function Education() {
  return (
    <SectionWrapper id="education" title="Education">
      <div className="space-y-4">
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <h3 className="font-semibold text-slate-50">
            Bachelor of Information Systems (Computer Information Systems)
          </h3>
          <p className="text-sm text-slate-400">University of Botswana</p>
          <p className="text-xs text-slate-400 mt-1">2021 – Expected Graduation: 2026</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <h3 className="font-semibold text-slate-50">IGCSE – High School</h3>
          <p className="text-sm text-slate-400">Kgaswe International School</p>
        </div>
      </div>
    </SectionWrapper>
  );
}

function BeyondTech() {
  return (
    <SectionWrapper id="beyond-tech" title="Beyond Tech">
      <p className="text-slate-300 leading-relaxed">
        Outside of software and systems, I am committed to disciplined personal development. I
        practise bodybuilding, with a focus on strength, structure, and consistency. I attend Christ
        Embassy, where I stay grounded in my values and community.
      </p>
      <p className="text-slate-300 leading-relaxed">
        I also interview inspiring individuals in Botswana, giving them space to share their
        journeys and lessons. In my free time I build PCs, game, read, and listen to music, while
        maintaining an entrepreneurial mindset and interest in new opportunities.
      </p>

      <div className="flex flex-wrap gap-2 pt-3 text-xs text-slate-200">
        <Tag>💪 Bodybuilding</Tag>
        <Tag>✝️ Christ Embassy</Tag>
        <Tag>🎤 Interviewing inspiring people</Tag>
        <Tag>🖥️ PC building</Tag>
        <Tag>🎮 Gaming</Tag>
        <Tag>📚 Reading</Tag>
        <Tag>🎧 Music</Tag>
        <Tag>💡 Entrepreneurship mindset</Tag>
      </div>
    </SectionWrapper>
  );
}

function Tag({ children }) {
  return (
    <span className="px-2.5 py-1 rounded-full bg-slate-950/70 border border-slate-700 text-[11px]">
      {children}
    </span>
  );
}

function Contact() {
  return (
    <SectionWrapper id="contact" title="Contact">
      <p className="text-slate-300 text-sm mb-4">
        I am open to frontend roles, internship opportunities, and collaborations on practical
        projects.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <InfoRow label="Phone" value="+267 76 984 827" />
        <InfoRow
          label="Email"
          value="monigeorgy42@gmail.com"
          link="mailto:monigeorgy42@gmail.com"
        />
        <InfoRow
          label="LinkedIn"
          value="linkedin.com/in/georgymoni"
          link="https://linkedin.com/in/georgymoni"
        />
        <InfoRow
          label="GitHub"
          value="github.com/dondie52"
          link="https://github.com/dondie52"
        />
      </div>
    </SectionWrapper>
  );
}

function InfoRow({ label, value, link }) {
  const content = link ? (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="text-sky-400 hover:text-sky-300 text-sm"
    >
      {value}
    </a>
  ) : (
    <span className="text-slate-200 text-sm">{value}</span>
  );
  return (
    <div className="flex flex-col">
      <span className="text-xs uppercase tracking-[0.15em] text-slate-500">{label}</span>
      {content}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Georgy Moni. All rights reserved.</p>
        <p className="text-[11px]">Built with React, Tailwind CSS &amp; Framer Motion.</p>
      </div>
    </footer>
  );
}

export default App;
