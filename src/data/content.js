// Centralized content data for the portfolio

export const personalInfo = {
  name: "Georgy Moni",
  tagline: "Frontend Developer with Full-Spectrum IT Skills Across Systems, Support & Software",
  location: "Gaborone, Botswana",
  email: "monigeorgy42@gmail.com",
  phone: "+267 76 984 827",
  github: "https://github.com/dondie52",
  linkedin: "https://linkedin.com/in/georgymoni",
};

export const navSections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "beyond-tech", label: "Beyond Tech" },
  { id: "contact", label: "Contact" },
];

export const aboutText = [
  "I am a Bachelor of Information Systems (Computer Information Systems) student at the University of Botswana. I have practical experience building production-grade frontends and supporting technical environments. My focus is on writing reliable, maintainable code and delivering interfaces that are clear, efficient, and aligned with user needs.",
  "Combining frontend development with IT support experience allows me to understand how applications behave in real environments—from networks and servers up to the browser. I am intentional about continuous improvement, professional standards, and learning modern tools in the web ecosystem.",
];

export const skills = {
  programming: {
    title: "Programming & Languages",
    icon: "Code2",
    items: ["JavaScript (ES6+)", "HTML5", "CSS3", "Python", "SQL", "Java", "VBA"],
  },
  frontend: {
    title: "Frontend Development",
    icon: "Layout",
    items: [
      "React 18 (Vite)",
      "Tailwind CSS",
      "React Hooks",
      "Context API / Zustand",
      "Responsive & mobile-first UI",
      "Component-based architecture",
      "Charting libraries (e.g. Chart.js)",
    ],
  },
  backend: {
    title: "Backend & APIs",
    icon: "Server",
    items: ["Node.js (Express)", "REST API integration", "WebSockets / real-time updates"],
  },
  tools: {
    title: "Tools & Platforms",
    icon: "Wrench",
    items: ["Git & GitHub", "Linux (Ubuntu / Mint)", "Supabase", "Firebase", "VS Code", "Postman"],
  },
  itSupport: {
    title: "IT Support & Systems",
    icon: "Monitor",
    items: [
      "Hardware & software troubleshooting",
      "Basic server setup & configuration",
      "Networking & cabling",
      "Printer and workstation support",
      "Technical documentation",
    ],
  },
};

export const experiences = [
  {
    title: "Frontend Developer",
    company: "MaungoCraft",
    period: "August 2025 – Present",
    location: "Gaborone, Botswana",
    responsibilities: [
      "Build and maintain a modern React 18 + Tailwind CSS frontend used in production environments.",
      "Develop scalable, reusable UI components and improve layout responsiveness across multiple modules.",
      "Implement real-time client updates using WebSockets with robust fallback strategies.",
      "Integrate REST APIs and deliver interactive visual components using charting libraries.",
      "Enhance authentication flows and refine role-based interface behaviour for different user types.",
      "Optimise React state management and rendering to improve performance and consistency.",
      "Reduce unnecessary network traffic by improving data-fetching patterns and usage.",
      "Collaborate with backend, QA, and product stakeholders to deliver reliable, production-ready features.",
    ],
  },
  {
    title: "IT Support Technician (Intern)",
    company: "IQube Botswana",
    period: "June 2025 – July 2025",
    location: "Gaborone, Botswana",
    responsibilities: [
      "Provided technical support for hardware, software, and network-related issues for office users.",
      "Assisted with server configuration, monitoring, and basic maintenance tasks.",
      "Prepared workstations, configured user accounts, and set up email and application access.",
      "Troubleshot printers, network devices, and connectivity problems across locations.",
      "Supported network installations and structured cabling activities.",
      "Documented incidents and resolutions to improve internal support processes.",
    ],
  },
];

export const projects = [
  {
    title: "Hospital Information System – Princess Marina",
    period: "2025",
    description:
      "A structured analysis and design mini-project for a hospital information system, including context diagrams, DFDs, ERDs, use cases, process modelling and full system documentation.",
    tech: ["Systems Analysis", "DFD", "ERD", "UML", "Research"],
    link: "/project/hospital-info-system",
    icon: "Building2",
  },
  {
    title: "Decision Support System – Smartphone Retail Shop",
    period: "2025",
    description:
      "A DSS that helps managers of a smartphone retail shop make structured decisions based on weighted scoring, criteria analysis, and performance evaluation.",
    tech: ["Java", "Decision Support Systems", "AHP", "Weighted Scoring"],
    link: "/project/dss-retail",
    icon: "Brain",
  },
  {
    title: "Student Device Management Portal",
    period: "2025",
    description:
      "A web system for tracking student laptop agents, sales, and inventory across tertiary institutions in Botswana. Created to improve transparency and operational reporting.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    link: "/project/device-portal",
    icon: "Laptop",
  },
  {
    title: "Trading System (Java)",
    period: "2025",
    description:
      "A console-based trading simulation system for handling transactions, users, and basic portfolio functions.",
    tech: ["Java", "OOP", "File Handling"],
    link: "https://github.com/dondie52/trading-system",
    icon: "TrendingUp",
  },
  {
    title: "Research Paper – WhatsApp for Academic Collaboration",
    period: "2025",
    description:
      "A full undergraduate research project exploring how UB final-year students use WhatsApp for collaboration, covering data collection, analysis, literature review, and recommendations.",
    tech: ["Research", "SPSS", "Survey Design"],
    link: "/project/whatsapp-research",
    icon: "FileText",
  },
];

export const education = [
  {
    degree: "Bachelor of Information Systems (Computer Information Systems)",
    institution: "University of Botswana",
    period: "2021 – Expected Graduation: 2026",
    icon: "GraduationCap",
  },
  {
    degree: "IGCSE – High School",
    institution: "Kgaswe International School",
    period: "",
    icon: "School",
  },
];

export const beyondTechText = [
  "Outside of software and systems, I am committed to disciplined personal development. I practise bodybuilding, with a focus on strength, structure, and consistency. I attend Christ Embassy, where I stay grounded in my values and community.",
  "I also interview inspiring individuals in Botswana, giving them space to share their journeys and lessons. In my free time I build PCs, game, read, and listen to music, while maintaining an entrepreneurial mindset and interest in new opportunities.",
];

export const beyondTechTags = [
  { emoji: "💪", label: "Bodybuilding" },
  { emoji: "✝️", label: "Christ Embassy" },
  { emoji: "🎤", label: "Interviewing inspiring people" },
  { emoji: "🖥️", label: "PC building" },
  { emoji: "🎮", label: "Gaming" },
  { emoji: "📚", label: "Reading" },
  { emoji: "🎧", label: "Music" },
  { emoji: "💡", label: "Entrepreneurship mindset" },
];

