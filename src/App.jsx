import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import Reveal from './components/Reveal';
import ParticlesBackground from './components/ParticlesBackground';
import ThemeToggle from './components/ThemeToggle';
import ExperienceTimeline from './components/ExperienceTimeline';
import BeyondTech from './components/BeyondTech';
import { useTheme } from './context/ThemeContext';
import './App.css';

// Skill icons mapping
const skillIcons = {
  React: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
      <path d="M12 21.35c-1.13 0-2.17-.28-3.07-.77-.91.49-1.94.77-3.08.77-1.8 0-3.24-.76-3.95-2.08-.7-1.32-.55-3.01.42-4.65.5-.85 1.18-1.66 2.01-2.42-.83-.76-1.51-1.57-2.01-2.42-.97-1.64-1.12-3.33-.42-4.65C2.61 3.81 4.05 3.05 5.85 3.05c1.14 0 2.17.28 3.08.77.9-.49 1.94-.77 3.07-.77 1.13 0 2.17.28 3.07.77.91-.49 1.94-.77 3.08-.77 1.8 0 3.24.76 3.95 2.08.7 1.32.55 3.01-.42 4.65-.5.85-1.18 1.66-2.01 2.42.83.76 1.51 1.57 2.01 2.42.97 1.64 1.12 3.33.42 4.65-.71 1.32-2.15 2.08-3.95 2.08-1.14 0-2.17-.28-3.08-.77-.9.49-1.94.77-3.07.77Zm-4.54-3.22c.81.82 1.78 1.53 2.87 2.09.38.19.78.35 1.19.47-.77-.49-1.47-1.08-2.07-1.74-.65-.71-1.2-1.49-1.63-2.3-.15.52-.26 1.03-.36 1.48Zm9.08 0c-.1-.45-.21-.96-.36-1.48-.43.81-.98 1.59-1.63 2.3-.6.66-1.3 1.25-2.07 1.74.41-.12.81-.28 1.19-.47 1.09-.56 2.06-1.27 2.87-2.09Z"/>
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.006.003zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"/>
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M3 3h18v18H3V3zm10.71 14.86c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8zm-5.6-4.45v1.36h2.3v6.61h1.67v-6.61h2.3v-1.36h-6.27z"/>
    </svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 0 1-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 0 1 1.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.954c.11 0 .201.073.201.184.147.971.568 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.184-.825-2.587-1.065-1.999-.203-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 0 1-.056.165c-.037.036-.091.073-.146.073h-.953a.212.212 0 0 1-.202-.164c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.237.697 2.514.99 2.256.293 3.32.715 3.32 2.294-.019 1.615-1.339 2.531-3.67 2.531z"/>
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.67.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z"/>
    </svg>
  ),
  CSS: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
    </svg>
  ),
  HTML: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
    </svg>
  ),
};

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const { isDark } = useTheme();
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroAvatarY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const heroAvatarRotate = useTransform(scrollYProgress, [0, 0.3], [0, 5]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Track mouse for spotlight effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Refs for scroll animations
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.3 });
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.3 });
  const contactInView = useInView(contactRef, { once: true, amount: 0.3 });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -80, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      x: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 80, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      x: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.03, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    })
  };

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'beyond', label: 'Beyond' },
    { id: 'contact', label: 'Contact' },
  ];

  const skills = [
    { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500', category: 'frontend' },
    { name: 'JavaScript', icon: '📜', color: 'from-yellow-400 to-orange-500', category: 'language' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-400 to-indigo-500', category: 'language' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-500', category: 'backend' },
    { name: 'Python', icon: '🐍', color: 'from-blue-400 to-yellow-500', category: 'language' },
    { name: 'CSS', icon: '🎨', color: 'from-pink-400 to-purple-500', category: 'frontend' },
    { name: 'HTML', icon: '🌐', color: 'from-orange-400 to-red-500', category: 'frontend' },
    { name: 'Git', icon: '🔧', color: 'from-gray-400 to-slate-500', category: 'tools' },
  ];

  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Project description goes here. Your existing project content will be preserved.",
      tech: ['React', 'Node.js', 'MongoDB'],
      github: "https://github.com",
      live: "#",
      emoji: "🚀"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Project description goes here. Your existing project content will be preserved.",
      tech: ['React', 'TypeScript', 'Firebase'],
      github: "https://github.com",
      live: "#",
      emoji: "⚡"
    },
    {
      id: 3,
      title: "Project 3",
      description: "Project description goes here. Your existing project content will be preserved.",
      tech: ['Python', 'FastAPI', 'PostgreSQL'],
      github: "https://github.com",
      live: "#",
      emoji: "🔥"
    },
    {
      id: 4,
      title: "Project 4",
      description: "Project description goes here. Your existing project content will be preserved.",
      tech: ['Next.js', 'Tailwind', 'Prisma'],
      github: "https://github.com",
      live: "#",
      emoji: "✨"
    },
  ];

  const titleText = "Georgy's Portfolio";

  return (
    <AnimatePresence>
      <motion.div 
        className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
          isDark 
            ? 'body-gradient text-slate-100' 
            : 'bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 text-slate-900'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Particles Background */}
        <ParticlesBackground />

        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 z-[60] origin-left"
          style={{ scaleX: scrollYProgress }}
        />

        {/* Animated Gradient Background */}
        <motion.div
          className="fixed inset-0 -z-10 opacity-40"
          style={{ y: backgroundY }}
        >
          <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-cyan-500/20 via-purple-500/15 to-transparent' : 'bg-gradient-to-br from-cyan-300/30 via-purple-300/20 to-transparent'} animate-gradient-shift`} />
          <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-tr from-transparent via-slate-900/50 to-cyan-500/10' : 'bg-gradient-to-tr from-transparent via-white/50 to-blue-300/20'} animate-gradient-shift-reverse`} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        </motion.div>

        {/* Floating Orbs */}
        <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none">
          <motion.div
            className={`absolute w-96 h-96 rounded-full ${isDark ? 'bg-gradient-to-br from-cyan-500/10 to-purple-500/10' : 'bg-gradient-to-br from-cyan-400/20 to-purple-400/20'} blur-3xl`}
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ top: '10%', left: '10%' }}
          />
          <motion.div
            className={`absolute w-72 h-72 rounded-full ${isDark ? 'bg-gradient-to-br from-pink-500/10 to-cyan-500/10' : 'bg-gradient-to-br from-pink-400/20 to-cyan-400/20'} blur-3xl`}
            animate={{
              x: [0, -80, 0],
              y: [0, 80, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{ bottom: '20%', right: '10%' }}
          />
          <motion.div
            className={`absolute w-64 h-64 rounded-full ${isDark ? 'bg-gradient-to-br from-amber-500/10 to-rose-500/10' : 'bg-gradient-to-br from-amber-400/15 to-rose-400/15'} blur-3xl`}
            animate={{
              x: [0, 60, 0],
              y: [0, -60, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            style={{ top: '50%', right: '30%' }}
          />
        </div>

        {/* Floating Glassmorphism Navigation */}
        <motion.nav 
          className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 px-2 py-2 rounded-2xl ${
            isDark 
              ? 'bg-slate-900/60 border-slate-700/50' 
              : 'bg-white/60 border-white/50'
          } backdrop-blur-xl border shadow-lg shadow-black/5`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-1 md:gap-2">
            <motion.a
              href="#"
              className="px-3 py-2 text-lg font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GP
            </motion.a>
            
            <div className="hidden md:flex items-center gap-1">
              {sections.map((s, i) => (
                <motion.a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`relative px-3 py-2 text-sm font-medium rounded-xl transition-colors duration-300 group ${
                    isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {s.label}
                  {/* Smooth underline animation */}
                  <motion.span
                    className="absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Theme Toggle */}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="min-h-screen flex items-center justify-center px-4 py-32 relative"
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Hero background glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <motion.div
              className="w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-[100px]"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            {/* Parallax Avatar */}
            <motion.div
              className="mb-8"
              style={{ y: heroAvatarY, rotate: heroAvatarRotate }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareColor={isDark ? "#06b6d4" : "#0891b2"}
                glareMaxOpacity={0.3}
                glareBorderRadius="50%"
                scale={1.02}
              >
                <motion.div
                  className="relative w-32 h-32 md:w-40 md:h-40 mx-auto"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isLoaded ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                >
                  {/* Avatar glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-xl opacity-60"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Avatar border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-1">
                    <div className={`w-full h-full rounded-full ${isDark ? 'bg-slate-900' : 'bg-white'} flex items-center justify-center overflow-hidden`}>
                      <motion.span 
                        className="text-5xl md:text-6xl"
                        whileHover={{ scale: 1.2 }}
                      >
                        👤
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            </motion.div>

            {/* Animated Title with Letter Animation and Glow */}
            <motion.div className="overflow-hidden mb-6 relative">
              {/* Name glow effect */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="w-full h-full bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-3xl" />
              </motion.div>
              
              <motion.h1
                className="relative text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent pb-2"
                variants={fadeInUp}
              >
                {titleText.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterAnimation}
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                    className="inline-block"
                    style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
                    whileHover={{ 
                      scale: 1.2, 
                      color: '#06b6d4',
                      textShadow: '0 0 20px rgba(6, 182, 212, 0.5)'
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>
            
            <motion.p
              className={`text-xl md:text-2xl mb-10 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
              variants={fadeInUp}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="inline-block"
              >
                Full Stack Developer
              </motion.span>
              <motion.span
                className="inline-block ml-2"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                💻
              </motion.span>
            </motion.p>

            {/* Animated line decoration */}
            <motion.div
              className="w-32 h-1 mx-auto mb-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 128, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.div
              className="flex gap-4 justify-center flex-wrap"
              variants={fadeInUp}
            >
              <motion.a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-2xl font-semibold overflow-hidden shadow-lg shadow-cyan-500/25"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(6, 182, 212, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.a
                href="#contact"
                className={`group relative px-8 py-4 border-2 rounded-2xl font-semibold overflow-hidden backdrop-blur-sm ${
                  isDark 
                    ? 'border-cyan-500/50 text-cyan-400' 
                    : 'border-cyan-600/50 text-cyan-600'
                }`}
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: isDark ? 'rgba(6, 182, 212, 1)' : 'rgba(8, 145, 178, 1)',
                  boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get In Touch</span>
                <motion.div
                  className="absolute inset-0 bg-cyan-500/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.a>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${isDark ? 'border-slate-500' : 'border-slate-400'}`}>
              <motion.div
                className="w-1.5 h-3 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mt-2"
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.section>

        {/* About Section with 3D Profile Card */}
        <Reveal>
          <motion.section
            ref={aboutRef}
            id="about"
            className="py-32 px-4"
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <div className="max-w-5xl mx-auto">
              <motion.div className="text-center mb-20" variants={fadeInUp}>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  About Me
                </h2>
                <div className="w-20 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <Tilt 
                  tiltMaxAngleX={15} 
                  tiltMaxAngleY={15} 
                  glareEnable={true} 
                  glareColor={isDark ? "#00d4ff" : "#0891b2"}
                  glareMaxOpacity={0.4}
                  glareBorderRadius="24px"
                  perspective={1000}
                  scale={1.02}
                >
                  <motion.div
                    className="relative group"
                    variants={fadeInLeft}
                  >
                    {/* Animated glowing border */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-border" />
                    
                    <motion.div
                      className={`relative rounded-3xl overflow-hidden backdrop-blur-xl border p-8 shadow-2xl ${
                        isDark 
                          ? 'bg-slate-900/90 border-slate-700/50' 
                          : 'bg-white/90 border-slate-200/50'
                      }`}
                    >
                      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10' : 'bg-gradient-to-br from-cyan-400/5 via-purple-400/5 to-pink-400/5'}`} />
                      
                      <div className="relative z-10">
                        <motion.div 
                          className="w-48 h-48 mx-auto mb-6 rounded-full p-1 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                        >
                          <div className={`w-full h-full rounded-full flex items-center justify-center overflow-hidden ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
                            <motion.span 
                              className="text-6xl"
                              whileHover={{ scale: 1.2 }}
                            >
                              👤
                            </motion.span>
                          </div>
                        </motion.div>
                        <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                          Your Name
                        </h3>
                        <p className={`text-center ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                          Passionate developer creating amazing web experiences
                        </p>
                      </div>

                      {/* Corner decorations */}
                      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-lg" />
                      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-purple-500/50 rounded-br-lg" />
                    </motion.div>
                  </motion.div>
                </Tilt>
                
                <motion.div
                  className="space-y-6"
                  variants={fadeInRight}
                >
                  <p className={`leading-relaxed text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    Add your about content here. This section will animate in from the right.
                  </p>
                  <p className={`leading-relaxed text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    Your existing content will be preserved exactly as it is.
                  </p>
                  
                  {/* Stats */}
                  <motion.div 
                    className="grid grid-cols-3 gap-4 pt-8"
                    variants={staggerContainer}
                  >
                    {[
                      { value: '3+', label: 'Years Exp' },
                      { value: '20+', label: 'Projects' },
                      { value: '10+', label: 'Clients' },
                    ].map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        className={`text-center p-4 rounded-xl border ${
                          isDark 
                            ? 'bg-slate-800/50 border-slate-700/50' 
                            : 'bg-white/50 border-slate-200/50'
                        }`}
                        variants={scaleIn}
                        whileHover={{ 
                          scale: 1.05, 
                          borderColor: 'rgba(6, 182, 212, 0.5)',
                          boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)'
                        }}
                      >
                        <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                        <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </Reveal>

        {/* Skills Section with Animated Cards */}
        <Reveal>
          <motion.section
            ref={skillsRef}
            id="skills"
            className="py-32 px-4 relative"
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {/* Background decoration */}
            <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-transparent via-slate-900/50 to-transparent' : 'bg-gradient-to-b from-transparent via-blue-50/50 to-transparent'}`} />
            
            <div className="max-w-5xl mx-auto relative z-10">
              <motion.div className="text-center mb-20" variants={fadeInUp}>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Skills
                </h2>
                <div className="w-20 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
              </motion.div>
              
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
                variants={staggerContainer}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="relative group"
                    variants={fadeInUp}
                    custom={index}
                  >
                    <motion.div
                      className={`relative p-6 rounded-2xl backdrop-blur-xl border overflow-hidden cursor-pointer ${
                        isDark 
                          ? 'bg-slate-900/80 border-slate-700/50' 
                          : 'bg-white/80 border-slate-200/50'
                      }`}
                      whileHover={{ 
                        scale: 1.03, 
                        y: -8,
                        boxShadow: isDark 
                          ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(6, 182, 212, 0.2)'
                          : '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 30px rgba(6, 182, 212, 0.15)'
                      }}
                      initial={{ opacity: 0, y: 40, rotateX: -15 }}
                      animate={skillsInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 40, rotateX: -15 }}
                      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {/* Animated gradient background on hover */}
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      />
                      
                      {/* Glowing border effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10`} />
                      
                      {/* Top glow line */}
                      <motion.div
                        className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${skill.color}`}
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="relative z-10 text-center">
                        {/* Icon with category-based styling */}
                        <motion.div 
                          className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${skill.color} p-3 flex items-center justify-center text-white`}
                          whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.4 }}
                        >
                          {skillIcons[skill.name] || <span className="text-3xl">{skill.icon}</span>}
                        </motion.div>
                        <div className={`font-semibold transition-colors ${isDark ? 'text-slate-200 group-hover:text-white' : 'text-slate-700 group-hover:text-slate-900'}`}>
                          {skill.name}
                        </div>
                        {/* Category badge */}
                        <motion.span
                          className={`inline-block mt-2 px-2 py-0.5 text-xs rounded-full ${
                            isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'
                          }`}
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {skill.category}
                        </motion.span>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>
        </Reveal>

        {/* Experience Timeline */}
        <Reveal>
          <ExperienceTimeline />
        </Reveal>

        {/* Projects Section with Hover Glow and Tilt */}
        <Reveal>
          <motion.section
            ref={projectsRef}
            id="projects"
            className="py-32 px-4"
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <div className="max-w-5xl mx-auto">
              <motion.div className="text-center mb-20" variants={fadeInUp}>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Projects
                </h2>
                <div className="w-20 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
              </motion.div>
              
              <motion.div
                className="grid md:grid-cols-2 gap-8"
                variants={staggerContainer}
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="relative group"
                    variants={fadeInUp}
                    custom={index}
                  >
                    <Tilt
                      tiltMaxAngleX={8}
                      tiltMaxAngleY={8}
                      glareEnable={true}
                      glareColor={isDark ? "#06b6d4" : "#0891b2"}
                      glareMaxOpacity={0.2}
                      glareBorderRadius="16px"
                      scale={1.02}
                    >
                      <motion.div
                        className="relative rounded-2xl overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {/* Animated glowing border */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 animate-gradient-border" />
                        
                        {/* Animated shadow on hover */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl"
                          whileHover={{
                            boxShadow: isDark 
                              ? '0 30px 60px -15px rgba(6, 182, 212, 0.3), 0 0 40px rgba(168, 85, 247, 0.2)'
                              : '0 30px 60px -15px rgba(6, 182, 212, 0.2), 0 0 40px rgba(168, 85, 247, 0.1)'
                          }}
                        />
                        
                        <div className={`relative p-6 rounded-2xl backdrop-blur-xl border h-full ${
                          isDark 
                            ? 'bg-slate-900/90 border-slate-700/50' 
                            : 'bg-white/90 border-slate-200/50'
                        }`}>
                          {/* Project image placeholder */}
                          <div className={`relative h-44 mb-6 rounded-xl overflow-hidden ${
                            isDark 
                              ? 'bg-gradient-to-br from-slate-800 to-slate-900' 
                              : 'bg-gradient-to-br from-slate-100 to-slate-200'
                          }`}>
                            <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20' : 'bg-gradient-to-br from-cyan-400/10 to-purple-400/10'}`} />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <motion.span 
                                className="text-6xl opacity-50"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                              >
                                {project.emoji}
                              </motion.span>
                            </div>
                            
                            {/* Shimmer effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                            />
                          </div>
                          
                          <div className="relative z-10">
                            <h3 className={`text-2xl font-bold mb-3 transition-colors ${
                              isDark 
                                ? 'text-white group-hover:text-cyan-400' 
                                : 'text-slate-900 group-hover:text-cyan-600'
                            }`}>
                              {project.title}
                            </h3>
                            <p className={`mb-4 transition-colors ${
                              isDark 
                                ? 'text-slate-400 group-hover:text-slate-300' 
                                : 'text-slate-600 group-hover:text-slate-700'
                            }`}>
                              {project.description}
                            </p>
                            
                            {/* Tech stack tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                              {project.tech.map((tech) => (
                                <span 
                                  key={tech}
                                  className={`px-3 py-1 text-xs rounded-full border ${
                                    isDark 
                                      ? 'bg-slate-800 text-slate-300 border-slate-700' 
                                      : 'bg-slate-100 text-slate-600 border-slate-200'
                                  }`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            
                            {/* Action buttons */}
                            <div className="flex gap-3">
                              <motion.a
                                href={project.live}
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold shadow-lg shadow-cyan-500/20 group/btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                View Project
                                <motion.span
                                  className="group-hover/btn:translate-x-1 transition-transform"
                                >
                                  →
                                </motion.span>
                              </motion.a>
                              
                              {/* Animated GitHub Button */}
                              <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold border transition-colors ${
                                  isDark 
                                    ? 'border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-cyan-400' 
                                    : 'border-slate-300 text-slate-600 hover:border-cyan-500 hover:text-cyan-600'
                                }`}
                                whileHover={{ 
                                  scale: 1.05,
                                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)'
                                }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <motion.svg
                                  viewBox="0 0 24 24"
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  whileHover={{ rotate: 360 }}
                                  transition={{ duration: 0.5 }}
                                >
                                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                                </motion.svg>
                                <span>GitHub</span>
                              </motion.a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </Tilt>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>
        </Reveal>

        {/* Beyond Tech Section */}
        <Reveal>
          <BeyondTech />
        </Reveal>

        {/* Contact Section */}
        <Reveal>
          <motion.section
            ref={contactRef}
            id="contact"
            className="py-32 px-4 relative"
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {/* Background glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div 
                className="w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <motion.div className="mb-16" variants={fadeInUp}>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Get In Touch
                </h2>
                <div className="w-20 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mb-6" />
                <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Your contact information and form will go here.
                </p>
              </motion.div>
              
              <motion.div
                className="flex gap-4 justify-center flex-wrap"
                variants={fadeInUp}
              >
                <motion.a
                  href="mailto:your@email.com"
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-2xl font-semibold overflow-hidden shadow-lg shadow-cyan-500/25"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(6, 182, 212, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      📧
                    </motion.span>
                    Email Me
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative px-8 py-4 border-2 rounded-2xl font-semibold overflow-hidden backdrop-blur-sm ${
                    isDark 
                      ? 'border-cyan-500/50 text-cyan-400' 
                      : 'border-cyan-600/50 text-cyan-600'
                  }`}
                  whileHover={{ 
                    scale: 1.05, 
                    borderColor: 'rgba(6, 182, 212, 1)',
                    boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    💼 LinkedIn
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-cyan-500/10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.a>
                
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative px-8 py-4 border-2 rounded-2xl font-semibold overflow-hidden backdrop-blur-sm ${
                    isDark 
                      ? 'border-purple-500/50 text-purple-400' 
                      : 'border-purple-600/50 text-purple-600'
                  }`}
                  whileHover={{ 
                    scale: 1.05, 
                    borderColor: 'rgba(168, 85, 247, 1)',
                    boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <motion.span
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      🐙
                    </motion.span>
                    GitHub
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-purple-500/10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.a>
              </motion.div>
            </div>
          </motion.section>
        </Reveal>

        {/* Footer */}
        <motion.footer
          className={`py-10 text-center border-t ${
            isDark 
              ? 'text-slate-500 border-slate-800/50' 
              : 'text-slate-500 border-slate-200/50'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.p
            whileHover={{ scale: 1.02 }}
            className="mb-2"
          >
            © 2024 G. Built with{' '}
            <motion.span
              className="inline-block"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ❤️
            </motion.span>
            {' '}React, Tailwind CSS & Framer Motion
          </motion.p>
        </motion.footer>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
