import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const interests = [
  {
    id: 1,
    title: "Photography",
    description: "Capturing moments and exploring visual storytelling",
    icon: "📸",
    emoji: "🎨",
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-500/10"
  },
  {
    id: 2,
    title: "Music",
    description: "Playing instruments and discovering new genres",
    icon: "🎵",
    emoji: "🎸",
    color: "from-purple-400 to-indigo-500",
    bgColor: "bg-purple-500/10"
  },
  {
    id: 3,
    title: "Gaming",
    description: "Strategy games and immersive RPG experiences",
    icon: "🎮",
    emoji: "🕹️",
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-500/10"
  },
  {
    id: 4,
    title: "Reading",
    description: "Tech blogs, sci-fi novels, and self-improvement",
    icon: "📚",
    emoji: "📖",
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-500/10"
  },
  {
    id: 5,
    title: "Fitness",
    description: "Staying active and maintaining a healthy lifestyle",
    icon: "💪",
    emoji: "🏃",
    color: "from-cyan-400 to-blue-500",
    bgColor: "bg-cyan-500/10"
  },
  {
    id: 6,
    title: "Travel",
    description: "Exploring new places and experiencing different cultures",
    icon: "✈️",
    emoji: "🌍",
    color: "from-teal-400 to-cyan-500",
    bgColor: "bg-teal-500/10"
  },
];

function InterestCard({ interest, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 30 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <motion.div
        className={`relative p-6 rounded-2xl ${interest.bgColor} backdrop-blur-sm border border-slate-700/30 dark:border-slate-700/30 light:border-slate-200/50 overflow-hidden cursor-pointer`}
        whileHover={{ 
          scale: 1.03,
          y: -5,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Gradient border on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${interest.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}
        />
        
        {/* Animated icon container */}
        <div className="flex items-start gap-4">
          <motion.div
            className={`relative flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${interest.color} flex items-center justify-center shadow-lg`}
            initial={{ rotate: -10 }}
            whileHover={{ 
              rotate: 0,
              scale: 1.1,
            }}
            animate={isInView ? {
              y: [0, -5, 0],
            } : {}}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }
            }}
          >
            <motion.span 
              className="text-2xl"
              whileHover={{ scale: 1.2 }}
            >
              {interest.icon}
            </motion.span>
            
            {/* Glow effect */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${interest.color} rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
            />
          </motion.div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                {interest.title}
              </h3>
              
              {/* Colored emoji badge */}
              <motion.span
                className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${interest.bgColor} text-sm`}
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ 
                  delay: index * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.3,
                  rotate: 15,
                }}
              >
                {interest.emoji}
              </motion.span>
            </div>
            
            <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm leading-relaxed">
              {interest.description}
            </p>
          </div>
        </div>

        {/* Decorative corner accent */}
        <motion.div
          className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${interest.color} opacity-5 rounded-tl-full`}
          whileHover={{ opacity: 0.15 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function BeyondTech() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section id="beyond" className="py-32 px-4 relative">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent" />
      
      <div className="max-w-5xl mx-auto relative z-10" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              className="text-4xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              ✨
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Beyond Tech
            </h2>
            <motion.span
              className="text-4xl"
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              ✨
            </motion.span>
          </motion.div>
          
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full mb-6" />
          
          <motion.p
            className="text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            When I'm not coding, you'll find me exploring these passions
          </motion.p>
        </motion.div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <InterestCard key={interest.id} interest={interest} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

