import { motion } from "framer-motion";

export default function SectionWrapper({ id, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`space-y-8 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">{title}</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/50 via-emerald-500/20 to-transparent" />
        </div>
        {subtitle && <p className="text-slate-400 text-sm max-w-2xl">{subtitle}</p>}
      </motion.div>
      {children}
    </section>
  );
}

