import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    id: 1,
    title: "Senior Developer",
    company: "Your Company",
    period: "2023 - Present",
    description: "Your experience description goes here. This content will be preserved exactly as you write it.",
    icon: "💼",
    color: "from-cyan-400 to-blue-500"
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Previous Company",
    period: "2021 - 2023",
    description: "Your experience description goes here. This content will be preserved exactly as you write it.",
    icon: "🚀",
    color: "from-purple-400 to-pink-500"
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "First Company",
    period: "2019 - 2021",
    description: "Your experience description goes here. This content will be preserved exactly as you write it.",
    icon: "⚡",
    color: "from-amber-400 to-orange-500"
  },
];

function TimelineItem({ experience, index, isLeft }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      ref={ref}
      className={`flex items-center w-full ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-8 md:mb-0`}
    >
      {/* Content Card */}
      <motion.div
        className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}
        initial={{ 
          opacity: 0, 
          x: isLeft ? -100 : 100,
          filter: 'blur(10px)'
        }}
        animate={isInView ? { 
          opacity: 1, 
          x: 0,
          filter: 'blur(0px)'
        } : {}}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.2,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <motion.div
          className="relative p-6 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/50 group hover-lift"
          whileHover={{ 
            scale: 1.02,
            boxShadow: '0 25px 50px -12px rgba(6, 182, 212, 0.25)'
          }}
        >
          {/* Glow effect on hover */}
          <div className={`absolute -inset-0.5 bg-gradient-to-r ${experience.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
          
          <div className="relative z-10">
            {/* Period Badge */}
            <motion.span
              className={`inline-block px-3 py-1 mb-3 text-xs font-semibold rounded-full bg-gradient-to-r ${experience.color} text-white`}
              whileHover={{ scale: 1.05 }}
            >
              {experience.period}
            </motion.span>
            
            <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mb-1">
              {experience.title}
            </h3>
            <p className={`text-transparent bg-clip-text bg-gradient-to-r ${experience.color} font-semibold mb-3`}>
              {experience.company}
            </p>
            <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm leading-relaxed">
              {experience.description}
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Center Icon */}
      <div className="hidden md:flex w-2/12 justify-center">
        <motion.div
          className={`relative z-10 w-14 h-14 rounded-full bg-gradient-to-br ${experience.color} flex items-center justify-center shadow-lg`}
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.2 + 0.3,
            type: "spring",
            stiffness: 200
          }}
          whileHover={{ 
            scale: 1.2,
            rotate: 360,
            boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)'
          }}
        >
          <span className="text-2xl">{experience.icon}</span>
          
          {/* Pulse rings */}
          <motion.div
            className={`absolute inset-0 rounded-full bg-gradient-to-br ${experience.color}`}
            animate={{
              scale: [1, 1.5, 1.5],
              opacity: [0.5, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.3
            }}
          />
        </motion.div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="hidden md:block w-5/12" />
    </div>
  );
}

export default function ExperienceTimeline() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="py-32 px-4 relative">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Animated Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full"
              initial={{ scaleY: 0, originY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
            
            {/* Animated glow on the line */}
            <motion.div
              className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-cyan-400 to-transparent rounded-full blur-sm"
              animate={{
                top: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={exp.id}
                experience={exp}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

