import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef, useState } from "react";
import dpImage from "../assets/dp.jpeg";

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// Premium Avatar Component with interactive effects
function PremiumAvatar() {
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // Mouse position for tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Mouse position for glass reflection
  const [glassPosition, setGlassPosition] = useState({ x: 50, y: 50 });
  
  // Smooth spring animations for tilt (max 6 degrees)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Normalized position (-0.5 to 0.5)
    const normalizedX = (e.clientX - centerX) / rect.width;
    const normalizedY = (e.clientY - centerY) / rect.height;
    
    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
    
    // Glass reflection position (0 to 100)
    const glassX = ((e.clientX - rect.left) / rect.width) * 100;
    const glassY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlassPosition({ x: glassX, y: glassY });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovering(false);
    setGlassPosition({ x: 50, y: 50 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
      className="relative"
      style={{ perspective: 1000 }}
    >
      {/* Hologram glow background layers */}
      <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/40 via-purple-500/30 to-cyan-500/40 rounded-[2rem] blur-2xl animate-hologram-pulse" />
      <div className="absolute -inset-2 bg-gradient-to-tr from-purple-500/20 via-cyan-400/20 to-purple-500/20 rounded-3xl blur-xl animate-pulse-slow" />
      
      {/* Rotating gradient border */}
      <div className="absolute -inset-[2px] rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-conic from-cyan-500 via-purple-500 to-cyan-500 animate-glow-rotate opacity-60" 
          style={{ 
            background: 'conic-gradient(from 0deg, #06b6d4, #a855f7, #06b6d4)',
          }} 
        />
      </div>

      {/* Main avatar container with 3D tilt */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 gpu-accelerate"
      >
        {/* Inner container with clean border */}
        <div className="absolute inset-0 rounded-3xl bg-slate-950 border border-slate-700/50 overflow-hidden hologram-glow">
          {/* Subtle inner gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
          
          {/* Profile image */}
          <img 
            src={dpImage} 
            alt="Georgy Moni" 
            className="relative w-full h-full object-cover"
          />
          
          {/* Glass reflection overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: isHovering 
                ? `radial-gradient(circle at ${glassPosition.x}% ${glassPosition.y}%, rgba(255,255,255,0.15) 0%, transparent 50%)`
                : 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)'
            }}
            transition={{ duration: 0.15 }}
          />
          
          {/* Light sweep animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute -inset-full w-[200%] h-[200%] animate-light-sweep"
              style={{
                background: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)',
              }}
            />
          </div>
          
          {/* Top edge highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
          
          {/* Bottom edge highlight */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
        </div>

        {/* Floating sparkle element */}
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -right-4 p-3 rounded-xl bg-slate-900/90 border border-cyan-500/30 shadow-lg shadow-cyan-500/20 backdrop-blur-sm"
          style={{ transform: "translateZ(40px)" }}
        >
          <Sparkles className="text-cyan-400" size={24} />
        </motion.div>

        {/* Floating label */}
        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-slate-900/90 border border-purple-500/30 shadow-lg shadow-purple-500/20 backdrop-blur-sm"
          style={{ transform: "translateZ(40px)" }}
        >
          <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Frontend Dev
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="pt-0 relative min-h-[90vh]">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      {/* Main Hero Content - Single Flex Container */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-16 min-h-[90vh] w-full"
      >
        {/* Text Content */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6 text-center lg:text-left"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for opportunities
            </motion.div>

            {/* Main heading */}
            <div className="space-y-3">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-slate-400 text-lg"
              >
                Hi, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                <span className="text-slate-100">Georgy</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                  Moni
                </span>
              </motion.h1>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl sm:text-2xl text-slate-300 font-medium max-w-xl mx-auto lg:mx-0"
            >
              Frontend Developer with Full-Spectrum IT Skills Across Systems, Support & Software
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-slate-400 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              I design and build clean, responsive web interfaces and contribute to production
              systems used by real users. My background in IT support, networking, and system
              operations gives me a practical, end-to-end view of how technology is deployed and
              improved.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <button
                onClick={() => scrollToId("projects")}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-semibold hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105"
              >
                View Projects
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() => scrollToId("contact")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 text-slate-300 font-medium hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all duration-300"
              >
                Get in Touch
              </button>
          </motion.div>
        </motion.div>

        {/* Premium Avatar with interactive effects */}
        <PremiumAvatar />
      </motion.div>
    </section>
  );
}

