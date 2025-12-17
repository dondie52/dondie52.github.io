import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import coverImage from "../../rea.png";

export default function WhatsAppResearch() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-40 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto py-24 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Icon + Title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 text-amber-400">
              <FileText size={32} />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">
                WhatsApp for Academic Collaboration
              </h1>
              <p className="text-slate-400 text-sm mt-1">Research Paper • 2025</p>
            </div>
          </div>

          {/* Cover Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden border border-slate-800 mb-8"
          >
            <img
              src={coverImage}
              alt="Research Cover"
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
          </motion.div>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["Research", "SPSS", "Survey Design"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/50 text-xs font-medium text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-100 mb-3">Overview</h2>
            <p className="text-slate-300 leading-relaxed">
              A comprehensive undergraduate research project exploring how University of Botswana 
              final-year students use WhatsApp as a tool for academic collaboration. The study 
              covers data collection methodologies, statistical analysis, literature review, and 
              actionable recommendations for educational institutions.
            </p>
          </section>

          {/* What I Did */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-100 mb-4">What I Did</h2>
            <ul className="space-y-3">
              {[
                "Conducted comprehensive literature review on academic collaboration tools",
                "Designed and validated survey instruments for data collection",
                "Collected data from UB final-year students using structured surveys",
                "Performed statistical analysis using SPSS software",
                "Analyzed quantitative and qualitative data for insights",
                "Presented findings with clear visualizations and interpretations",
                "Developed practical recommendations for academic use of WhatsApp",
                "Structured the full academic paper following UB research standards",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + idx * 0.05 }}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </section>

          {/* Research Components */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-100 mb-4">Research Components</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Literature Review", desc: "Analysis of existing research" },
                { title: "Methodology", desc: "Survey design and sampling" },
                { title: "Data Analysis", desc: "SPSS statistical processing" },
                { title: "Recommendations", desc: "Actionable academic insights" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-800 bg-slate-900/40"
                >
                  <h3 className="font-medium text-slate-100 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500/10 text-amber-400 font-medium hover:bg-amber-500/20 transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back to Portfolio</span>
          </Link>
        </motion.div>
      </main>
    </div>
  );
}

