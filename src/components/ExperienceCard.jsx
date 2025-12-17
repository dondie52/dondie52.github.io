import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export default function ExperienceCard({ experience, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 to-transparent hidden sm:block" />

      <div className="relative sm:pl-16">
        {/* Timeline dot */}
        <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-950 hidden sm:block group-hover:scale-125 transition-transform" />

        {/* Card */}
        <div className="rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-emerald-500/30 hover:bg-slate-900/60 hover:shadow-xl hover:shadow-emerald-500/5">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Briefcase size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-slate-100">{experience.title}</h3>
                <p className="text-emerald-400 font-medium">{experience.company}</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                <span>{experience.period}</span>
              </div>
              {experience.location && (
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  <span>{experience.location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Responsibilities */}
          <ul className="space-y-2">
            {experience.responsibilities.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-start gap-3 text-sm text-slate-400"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500/60 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

