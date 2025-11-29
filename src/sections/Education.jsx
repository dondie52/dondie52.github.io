import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import { education } from "../data/content";

export default function Education() {
  return (
    <SectionWrapper id="education" title="Education" subtitle="My academic background">
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item, index) => {
          const IconComponent = Icons[item.icon] || Icons.GraduationCap;

          return (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-emerald-500/30 hover:bg-slate-900/60 hover:shadow-xl hover:shadow-emerald-500/5"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 text-emerald-400 group-hover:from-emerald-500/30 group-hover:to-teal-500/20 transition-all duration-300">
                  <IconComponent size={24} />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-slate-100 group-hover:text-emerald-300 transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-emerald-400 font-medium mt-1">{item.institution}</p>
                  {item.period && <p className="text-sm text-slate-500 mt-2">{item.period}</p>}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

