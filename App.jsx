import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, XCircle, Mail, Phone, Github, Linkedin, MapPin, Globe, ArrowRight } from "lucide-react";
import dpImage from "./dp.jpeg";

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
    title: "AgriConnect Botswana",
    period: "2024",
    description:
      "Full-stack web application empowering smallholder farmers in Botswana by connecting them to buyers, providing real-time market prices, weather alerts, and crop planning tools.",
    tech: ["React 18", "Node.js", "Express.js", "PostgreSQL", "Supabase", "Tailwind CSS", "JWT"],
    link: "https://github.com/dondie52/agriconnect",
  },
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
          Business & IT Solutions Developer  • Computer Information Systems
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            I&apos;m <span className="text-sky-400">Georgy&nbsp;Moni</span>.
          </h1>
          <p className="text-lg text-slate-200 leading-relaxed">
            Information Systems student blending business understanding with technical execution. I focus on frontend development, digital systems, and practical IT operations—allowing me to contribute to both the user-facing experience and the underlying infrastructure that supports it.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            I build responsive, user-focused web interfaces while also supporting the IT systems and business processes behind them. Because of my background in IT support, networking, and system operations, I understand how digital solutions behave in real organizational environments—from infrastructure, performance, and security considerations to the workflow and business impact. This combination of business insight and technical ability allows me to design solutions that not only work smoothly for end-users, but also strengthen efficiency, streamline processes, and support broader organizational goals. My approach is to bridge the gap between business requirements and technology implementation to deliver systems that provide real value.
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
          <div className="relative aspect-square rounded-3xl border border-slate-800 bg-gradient-to-br from-sky-500/10 via-slate-900 to-purple-500/10 flex items-center justify-center overflow-hidden">
            <img 
              src={dpImage} 
              alt="Georgy Moni" 
              className="w-full h-full object-cover"
            />
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
        I am a Bachelor of Information Systems (Computer Information Systems) student at the University of Botswana. My work spans frontend web development, IT support, and business-oriented systems analysis. I enjoy designing solutions that are clean, efficient, and aligned with the operational realities of organizations.
      </p>
      <p className="text-slate-300 leading-relaxed">
        My combined experience in development and IT operations gives me a unique perspective on how systems function end-to-end—from user interface behavior and API communication to networks, servers, and business workflows. With this background, I focus on building solutions that are reliable in practice, mindful of business needs, and maintainable in the long term.
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

// --- Beyond Tech media galleries ---

const beyondTechGalleries = {
  bodybuilding: {
    title: "Bodybuilding",
    items: [
      { type: "image", src: "/pictures/gym.jpeg" },
      { type: "video", src: "/pictures/gym2.mp4" },
      { type: "image", src: "/pictures/me_up_kagle_hill.jpeg" },
    ],
  },
  cats: {
    title: "Cats",
    items: [{ type: "image", src: "/pictures/cat_pic.jpeg" }],
  },
  interviewing: {
    title: "Interviewing inspiring people",
    items: [{ type: "image", src: "/pictures/interviewing.jpeg" }],
  },
  pcBuilding: {
    title: "PC building",
    items: [
      { type: "image", src: "/pictures/pc.jpeg" },
      { type: "video", src: "/pictures/pc_build_2.mp4" },
    ],
  },
  music: {
    title: "Music",
    items: [
      { type: "image", src: "/pictures/music.jpeg" },
      { type: "image", src: "/pictures/pinao.jpeg" },
    ],
  },
  reading: {
    title: "Reading",
    items: [{ type: "image", src: "/pictures/books.jpeg" }],
  },
  friends: {
    title: "Friends",
    items: [{ type: "video", src: "/pictures/friends.mp4" }],
  },
  entrepreneurship: {
    title: "Entrepreneurship mindset",
    items: [], // no media yet – using this for "share your idea" modal
  },
};

// Modal slideshow
function MediaModal({ galleryKey, onClose }) {
  const [index, setIndex] = useState(0);

  if (!galleryKey) return null;

  const gallery = beyondTechGalleries[galleryKey];

  if (!gallery) return null;
  const items = gallery.items || [];

  const hasMedia = items.length > 0;
  const current = hasMedia ? items[index] : null;

  const goPrev = () => {
    if (!hasMedia) return;
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goNext = () => {
    if (!hasMedia) return;
    setIndex((prev) => (prev + 1) % items.length);
  };

  const handleBgClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
      onClick={handleBgClick}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-xl rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
          <h3 className="text-sm font-semibold text-slate-100">
            {gallery.title}
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-100 text-xs px-2 py-1 rounded-md hover:bg-slate-800"
          >
            Close
          </button>
        </div>

        {/* Special case: entrepreneurship – no media, just idea CTA */}
        {galleryKey === "entrepreneurship" ? (
          <div className="p-4 space-y-3 text-sm text-slate-200">
            <p>
              I&apos;m always looking for real business ideas and collaboration
              opportunities. If you have a startup idea, side hustle concept, or
              something you&apos;d like to build, share it with me.
            </p>
            <p>
              Tell me briefly:
              <br />• What the business is about
              <br />• Who it helps
              <br />• What stage you&apos;re at (idea, early, running)
            </p>
            <a
              href="mailto:monigeorgy42@gmail.com?subject=Business%20Idea%20for%20Georgy&body=Hi%20Georgy,%0D%0A%0D%0AMy%20business%20idea%20is..."
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-sm font-medium text-slate-950 transition-colors"
            >
              Share your idea via email
            </a>
          </div>
        ) : (
          <div className="p-4">
            {hasMedia ? (
              <>
                <div className="relative rounded-xl overflow-hidden bg-black flex items-center justify-center aspect-video">
                  {current.type === "image" && (
                    <img
                      src={current.src}
                      alt={gallery.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  )}
                  {current.type === "video" && (
                    <video
                      src={current.src}
                      controls
                      className="max-h-full max-w-full"
                    />
                  )}
                  {items.length > 1 && (
                    <>
                      <button
                        onClick={goPrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full px-2 py-1 text-xs text-slate-100"
                      >
                        ‹
                      </button>
                      <button
                        onClick={goNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full px-2 py-1 text-xs text-slate-100"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>

                {items.length > 1 && (
                  <div className="flex justify-center gap-1 mt-3">
                    {items.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-1.5 w-4 rounded-full ${
                          i === index ? "bg-sky-500" : "bg-slate-600"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <p className="text-sm text-slate-300">
                No media added yet. You can add images/videos for this section
                later by editing <code>beyondTechGalleries</code>.
              </p>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}

function BeyondTech() {
  const [activeGallery, setActiveGallery] = useState(null);

  const openGallery = (key) => setActiveGallery(key);
  const closeGallery = () => setActiveGallery(null);

  return (
    <>
      <SectionWrapper id="beyond-tech" title="Beyond Tech">
        <p className="text-slate-300 leading-relaxed">
          Outside of software and systems, I am committed to disciplined personal
          development. I practise bodybuilding, with a focus on strength,
          structure, and consistency. I attend church, stay grounded in my
          values, and invest in relationships and community.
        </p>
        <p className="text-slate-300 leading-relaxed">
          I also interview inspiring individuals in Botswana, giving them space
          to share their journeys and lessons. In my free time I build PCs,
          experiment with music, read, and spend time with friends, while
          maintaining an entrepreneurial mindset and interest in new
          opportunities.
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-[2fr,1.5fr] items-start">
          <div className="space-y-3 text-xs text-slate-400">
            <p>
              Click any interest below to see a small gallery of photos/videos
              from that part of my life.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
            <h3 className="text-sm font-semibold text-slate-100">
              Interests &amp; Values
            </h3>
            <div className="flex flex-wrap gap-2 text-xs text-slate-200">
              <Tag onClick={() => openGallery("bodybuilding")}>💪 Bodybuilding</Tag>
              <Tag onClick={() => openGallery("cats")}>🐱 Cats</Tag>
              <Tag onClick={() => openGallery("interviewing")}>
                🎤 Interviewing inspiring people
              </Tag>
              <Tag onClick={() => openGallery("pcBuilding")}>🖥️ PC building</Tag>
              <Tag onClick={() => openGallery("music")}>🎵 Music</Tag>
              <Tag onClick={() => openGallery("reading")}>📚 Reading</Tag>
              <Tag onClick={() => openGallery("friends")}>🤝 Friends</Tag>
              <Tag onClick={() => openGallery("entrepreneurship")}>
                💡 Entrepreneurship mindset
              </Tag>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <MediaModal galleryKey={activeGallery} onClose={closeGallery} />
    </>
  );
}

function Tag({ children, onClick }) {
  const baseClasses =
    "px-2.5 py-1 rounded-full border border-slate-700 bg-slate-950/70 text-[11px] cursor-pointer hover:border-sky-400 hover:text-sky-300 transition-colors";

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={baseClasses}>
        {children}
      </button>
    );
  }

  return <span className={baseClasses}>{children}</span>;
}

// TODO: Replace 'your_form_id_here' with your actual Formspree form ID
// Get it from https://formspree.io after creating a form
const FORMSPREE_FORM_ID = "your_form_id_here";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [submitState, setSubmitState] = useState("idle"); // idle, loading, success, error
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitState("loading");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      if (response.ok) {
        setSubmitState("success");
        setFormState({ name: "", email: "", message: "" });
        setFocusedField(null);
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitState("idle");
        }, 5000);
      } else {
        setSubmitState("error");
        
        // Reset error message after 5 seconds
        setTimeout(() => {
          setSubmitState("idle");
        }, 5000);
      }
    } catch (error) {
      setSubmitState("error");
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitState("idle");
      }, 5000);
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "monigeorgy42@gmail.com",
      href: "mailto:monigeorgy42@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+267 76 984 827",
      href: "tel:+26776984827",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/dondie52",
      href: "https://github.com/dondie52",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/georgymoni",
      href: "https://linkedin.com/in/georgymoni",
    },
  ];

  const isFieldFocusedOrFilled = (fieldName) => {
    return focusedField === fieldName || formState[fieldName].length > 0;
  };

  return (
    <SectionWrapper id="contact" title="Get in Touch">
      <p className="text-slate-300 text-sm mb-6">
        I am open to frontend roles, internship opportunities, and collaborations on practical
        projects.
      </p>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Make Me a Website CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border-2 border-sky-500/30 bg-gradient-to-br from-sky-500/10 via-slate-900/60 to-purple-500/10 backdrop-blur-sm p-6 relative overflow-hidden"
          >
            {/* Decorative gradient orb */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-500/20 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-400">
                  <Globe size={22} />
                </div>
                <h3 className="font-bold text-lg text-slate-100">Need a Website?</h3>
              </div>
              
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                I build modern, responsive websites for individuals and businesses. 
                From portfolios to landing pages – let&apos;s bring your vision online.
              </p>
              
              <a
                href="mailto:monigeorgy42@gmail.com?subject=I%20Need%20a%20Website%20Built&body=Hi%20Georgy,%0D%0A%0D%0AI'm%20interested%20in%20having%20a%20website%20built.%0D%0A%0D%0AHere's%20what%20I'm%20looking%20for:%0D%0A-%20Type%20of%20website:%20%0D%0A-%20Key%20features:%20%0D%0A-%20Timeline:%20%0D%0A-%20Budget%20range:%20%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you!"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all hover:gap-3"
              >
                Let&apos;s Talk
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="font-semibold text-slate-100 mb-6 flex items-center gap-2">
              <MapPin size={18} className="text-sky-400" />
              Contact Information
            </h3>

            <div className="space-y-4">
              {contactLinks.map(({ icon: Icon, label, value, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-slate-800/50 transition-colors"
                >
                  <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 transition-colors">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">{label}</p>
                    <p className="text-slate-300 group-hover:text-sky-400 transition-colors">
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Location note */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <p className="text-slate-400 text-sm leading-relaxed">
              Based in <span className="text-sky-400 font-medium">Gaborone, Botswana</span>.
              Available for remote work and open to opportunities worldwide.
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-6 space-y-5"
          >
            <h3 className="font-semibold text-slate-100 mb-2">Send a Message</h3>

            <div className="space-y-5">
              {/* Name Field with Floating Label */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    isFieldFocusedOrFilled("name")
                      ? "top-2 text-xs text-sky-400"
                      : "top-4 text-sm text-slate-400"
                  }`}
                >
                  Your name…
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-4 pt-6 pb-2 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-200 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
                />
              </div>

              {/* Email Field with Floating Label */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    isFieldFocusedOrFilled("email")
                      ? "top-2 text-xs text-sky-400"
                      : "top-4 text-sm text-slate-400"
                  }`}
                >
                  Your email…
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-4 pt-6 pb-2 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-200 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all"
                />
              </div>

              {/* Message Field with Floating Label */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    isFieldFocusedOrFilled("message")
                      ? "top-2 text-xs text-sky-400"
                      : "top-4 text-sm text-slate-400"
                  }`}
                >
                  Write something…
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={5}
                  className="w-full px-4 pt-6 pb-2 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-200 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all resize-none"
                />
              </div>
            </div>

            {/* Success/Error Messages */}
            {submitState === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm"
              >
                <CheckCircle2 size={18} />
                <span>Message sent successfully!</span>
              </motion.div>
            )}

            {submitState === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
              >
                <XCircle size={18} />
                <span>Failed to send message. Please try again.</span>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={submitState === "loading"}
              whileHover={{ scale: submitState === "loading" ? 1 : 1.02 }}
              whileTap={{ scale: submitState === "loading" ? 1 : 0.98 }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 text-slate-950 font-semibold hover:from-sky-400 hover:to-sky-500 transition-all duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {submitState === "loading" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>

            {/* Optional Info Text */}
            <p className="text-xs text-slate-500 text-center leading-relaxed">
              This will open your email app only if you prefer.
              <br />
              Direct form submissions send instantly to my inbox.
            </p>
          </motion.form>
        </motion.div>
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
