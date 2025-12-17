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
    title: "CRLTARTL Project",
    description: "Creating a futuristic bank app for FNB Botswana with custom UI & digital experiences.",
    tech: ["Flutter", "Dart", "Firebase", "UI/UX"],
    link: "https://github.com/dondie52/crltartl-project",
    icon: "CreditCard",
  },
  {
    title: "Learning Flutter and Dart",
    description: "A repository for learning and documenting lessons in Flutter and Dart development.",
    tech: ["Dart", "Flutter"],
    link: "https://github.com/dondie52/learning-flutter-and-dart",
    icon: "BookOpen",
  },
  {
    title: "DSS System 2025",
    description: "Decision Support System for a smartphone retail shop—helps managers make structured decisions using weighted scoring and criteria analysis.",
    tech: ["Java", "Decision Support", "CLI"],
    link: "https://github.com/dondie52/dss-system-2025",
    icon: "Brain",
  },
  {
    title: "Trading System",
    description: "A console-based simulation of a trading environment: portfolios, users, and transaction logic, built for academic use.",
    tech: ["Java", "OOP", "File I/O"],
    link: "https://github.com/dondie52/trading-system",
    icon: "TrendingUp",
  },
  {
    title: "AgriConnect Web MVP",
    description: "A digital marketplace MVP for smallholder farmers—features listings, matching, and info, built with React, Node, and PostgreSQL.",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "https://github.com/dondie52/agriconnect-web-mvp",
    icon: "Leaf",
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
  "Outside of software and systems, I am committed to disciplined personal development. I practise bodybuilding, with a focus on strength, structure, and consistency. I attend church, stay grounded in my values, and invest in relationships and community.",
  "I also interview inspiring individuals in Botswana, giving them space to share their journeys and lessons. In my free time I build PCs, experiment with music, read, and spend time with friends, while maintaining an entrepreneurial mindset and interest in new opportunities.",
];

export const beyondTechTags = [
  { emoji: "💪", label: "Bodybuilding", galleryKey: "bodybuilding" },
  { emoji: "🐱", label: "Cats", galleryKey: "cats" },
  { emoji: "🎤", label: "Interviewing inspiring people", galleryKey: "interviewing" },
  { emoji: "🖥️", label: "PC building", galleryKey: "pcBuilding" },
  { emoji: "🎵", label: "Music", galleryKey: "music" },
  { emoji: "📚", label: "Reading", galleryKey: "reading" },
  { emoji: "🤝", label: "Friends", galleryKey: "friends" },
  { emoji: "💡", label: "Entrepreneurship mindset", galleryKey: "entrepreneurship" },
];

export const beyondTechGalleries = {
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
