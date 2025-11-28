import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import Reveal from './components/Reveal';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    setIsLoaded(true);
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
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const skills = [
    { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
    { name: 'JavaScript', icon: '📜', color: 'from-yellow-400 to-orange-500' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-400 to-indigo-500' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-500' },
    { name: 'Python', icon: '🐍', color: 'from-blue-400 to-yellow-500' },
    { name: 'CSS', icon: '🎨', color: 'from-pink-400 to-purple-500' },
    { name: 'HTML', icon: '🌐', color: 'from-orange-400 to-red-500' },
    { name: 'Git', icon: '🔧', color: 'from-gray-400 to-slate-500' },
  ];

  const titleText = "Georgy's Portfolio";

  return (
    <AnimatePresence>
      <motion.div 
        className="body-gradient min-h-screen text-slate-100 relative overflow-hidden"
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
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/15 to-transparent animate-gradient-shift" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-slate-900/50 to-cyan-500/10 animate-gradient-shift-reverse" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        </motion.div>

        {/* Floating Orbs */}
        <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ top: '10%', left: '10%' }}
          />
          <motion.div
            className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-pink-500/10 to-cyan-500/10 blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 80, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{ bottom: '20%', right: '10%' }}
          />
        </div>

        {/* Navigation */}
        <motion.nav 
          className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur-xl border-b border-slate-800/50"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <motion.a
                href="#"
                className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Portfolio
              </motion.a>
              <div className="flex gap-6">
                {sections.map((s, i) => (
                  <motion.a
                    key={s.id}
                    href={`#${s.id}`}
                    className="relative text-slate-300 hover:text-cyan-400 transition-colors duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    {s.label}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="min-h-screen flex items-center justify-center px-4 py-24 relative"
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <div className="max-w-5xl mx-auto text-center">
            {/* Animated Title with Letter Animation */}
            <motion.div className="overflow-hidden mb-4">
              <motion.h1
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent pb-2"
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
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>
            
            <motion.p
              className="text-xl md:text-2xl text-slate-300 mb-10"
              variants={fadeInUp}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                Full Stack Developer
              </motion.span>
            </motion.p>

            {/* Animated line decoration */}
            <motion.div
              className="w-32 h-1 mx-auto mb-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.div
              className="flex gap-4 justify-center flex-wrap"
              variants={fadeInUp}
            >
              <motion.a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold overflow-hidden shadow-lg shadow-cyan-500/25"
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
                className="group relative px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-xl font-semibold overflow-hidden backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: 'rgba(6, 182, 212, 1)',
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
            <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
              <motion.div
                className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2"
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
            className="py-24 px-4"
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <div className="max-w-5xl mx-auto">
              <motion.div className="text-center mb-16" variants={fadeInUp}>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  About Me
                </h2>
                <div className="w-20 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <Tilt 
                  tiltMaxAngleX={15} 
                  tiltMaxAngleY={15} 
                  glareEnable={true} 
                  glareColor="#00d4ff" 
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
                      className="relative rounded-3xl overflow-hidden bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 p-8 shadow-2xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
                      
                      <div className="relative z-10">
                        <motion.div 
                          className="w-48 h-48 mx-auto mb-6 rounded-full p-1 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                        >
                          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
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
                        <p className="text-slate-300 text-center">
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
                  <p className="text-slate-300 leading-relaxed text-lg">
                    Add your about content here. This section will animate in from the right.
                  </p>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    Your existing content will be preserved exactly as it is.
                  </p>
                  
                  {/* Stats */}
                  <motion.div 
                    className="grid grid-cols-3 gap-4 pt-6"
                    variants={staggerContainer}
                  >
                    {[
                      { value: '3+', label: 'Years Exp' },
                      { value: '20+', label: 'Projects' },
                      { value: '10+', label: 'Clients' },
                    ].map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        className="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-700/50"
                        variants={scaleIn}
                        whileHover={{ scale: 1.05, borderColor: 'rgba(6, 182, 212, 0.5)' }}
                      >
                        <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                        <div className="text-sm text-slate-400">{stat.label}</div>
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
            className="py-24 px-4 relative"
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />
            
            <div className="max-w-5xl mx-auto relative z-10">
              <motion.div className="text-center mb-16" variants={fadeInUp}>
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
                      className="relative p-6 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 overflow-hidden cursor-pointer"
                      whileHover={{ 
                        scale: 1.08, 
                        y: -10,
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
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
                        <motion.div 
                          className="text-4xl mb-3"
                          whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.4 }}
                        >
                          {skill.icon}
                        </motion.div>
                        <div className="font-semibold text-slate-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>
        </Reveal>

        {/* Projects Section with Hover Glow */}
        <Reveal>
          <motion.section
            ref={projectsRef}
            id="projects"
            className="py-24 px-4"
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <div className="max-w-5xl mx-auto">
              <motion.div className="text-center mb-16" variants={fadeInUp}>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Projects
                </h2>
                <div className="w-20 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
              </motion.div>
              
              <motion.div
                className="grid md:grid-cols-2 gap-8"
                variants={staggerContainer}
              >
                {[1, 2, 3, 4].map((project, index) => (
                  <motion.div
                    key={project}
                    className="relative group"
                    variants={fadeInUp}
                    custom={index}
                  >
                    <motion.div
                      className="relative rounded-2xl overflow-hidden"
                      whileHover={{ y: -10 }}
                      initial={{ opacity: 0, y: 50 }}
                      animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {/* Animated glowing border */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 animate-gradient-border" />
                      
                      <div className="relative p-6 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 h-full">
                        {/* Project image placeholder */}
                        <div className="relative h-40 mb-4 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.span 
                              className="text-5xl opacity-50"
                              whileHover={{ scale: 1.2, rotate: 10 }}
                            >
                              🚀
                            </motion.span>
                          </div>
                          
                          {/* Shimmer effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                          />
                        </div>
                        
                        <div className="relative z-10">
                          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                            Project {project}
                          </h3>
                          <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition-colors">
                            Project description goes here. Your existing project content will be preserved.
                          </p>
                          
                          {/* Tech stack tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {['React', 'Node.js', 'MongoDB'].map((tech) => (
                              <span 
                                key={tech}
                                className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300 border border-slate-700"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          <motion.a
                            href="#"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold shadow-lg shadow-cyan-500/20 group/btn"
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
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>
        </Reveal>

        {/* Contact Section */}
        <Reveal>
          <motion.section
            ref={contactRef}
            id="contact"
            className="py-24 px-4 relative"
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {/* Background glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
            </div>
            
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <motion.div className="mb-12" variants={fadeInUp}>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Get In Touch
                </h2>
                <div className="w-20 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mb-6" />
                <p className="text-slate-300 text-lg">
                  Your contact information and form will go here.
                </p>
              </motion.div>
              
              <motion.div
                className="flex gap-4 justify-center flex-wrap"
                variants={fadeInUp}
              >
                <motion.a
                  href="mailto:your@email.com"
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold overflow-hidden shadow-lg shadow-cyan-500/25"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(6, 182, 212, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    📧 Email Me
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
                  className="group relative px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-xl font-semibold overflow-hidden backdrop-blur-sm"
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
                  className="group relative px-8 py-4 border-2 border-purple-500/50 text-purple-400 rounded-xl font-semibold overflow-hidden backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.05, 
                    borderColor: 'rgba(168, 85, 247, 1)',
                    boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    🐙 GitHub
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
          className="py-8 text-center text-slate-500 border-t border-slate-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>© 2024 Georgy's Portfolio. Built with ❤️ and React</p>
        </motion.footer>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
