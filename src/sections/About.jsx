import { motion } from "framer-motion";
import { User, MapPin, Briefcase, GraduationCap } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import { aboutText, personalInfo } from "../data/content";

export default function About() {
  const highlights = [
    { icon: Briefcase, label: "Frontend Developer", color: "emerald" },
    { icon: GraduationCap, label: "Information Systems", color: "teal" },
    { icon: MapPin, label: personalInfo.location, color: "cyan" },
  ];

  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="A brief introduction to who I am and what I do"
    >
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-4"
        >
          {aboutText.map((paragraph, i) => (
            <p key={i} className="text-slate-400 leading-relaxed text-base sm:text-lg">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Highlights card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                <User size={20} />
              </div>
              <h3 className="font-semibold text-slate-100">Quick Facts</h3>
            </div>

            <div className="space-y-4">
              {highlights.map(({ icon: Icon, label, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className={`p-1.5 rounded-md bg-${color}-500/10 text-${color}-400`}
                    style={{
                      backgroundColor:
                        color === "emerald"
                          ? "rgba(16,185,129,0.1)"
                          : color === "teal"
                          ? "rgba(20,184,166,0.1)"
                          : "rgba(6,182,212,0.1)",
                      color:
                        color === "emerald"
                          ? "rgb(52,211,153)"
                          : color === "teal"
                          ? "rgb(45,212,191)"
                          : "rgb(34,211,238)",
                    }}
                  >
                    <Icon size={16} />
                  </div>
                  <span className="text-sm text-slate-300">{label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Status indicator */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <span className="text-sm text-emerald-300">
                Open to frontend roles & collaborations
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

