import { motion } from "framer-motion";

export default function Tag({ emoji, label, index }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700/50 text-sm text-slate-300 hover:border-emerald-500/40 hover:bg-slate-800/80 transition-all cursor-default"
    >
      <span className="text-base">{emoji}</span>
      <span>{label}</span>
    </motion.span>
  );
}

