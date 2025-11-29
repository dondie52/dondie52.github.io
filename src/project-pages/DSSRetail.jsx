import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Brain } from "lucide-react";
import { Link } from "react-router-dom";

export default function DSSRetail() {
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
            <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/10 text-purple-400">
              <Brain size={32} />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">
                Decision Support System
              </h1>
              <p className="text-slate-400 text-sm mt-1">Smartphone Retail Shop • 2025</p>
            </div>
          </div>

          {/* Cover Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden border border-slate-800 mb-8"
          >
            <div className="aspect-video bg-gradient-to-br from-purple-900/30 via-slate-900 to-indigo-900/30 flex items-center justify-center">
              <Brain size={80} className="text-purple-500/30" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
          </motion.div>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["Java", "Decision Support Systems", "AHP", "Weighted Scoring"].map((tech) => (
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
              A Decision Support System (DSS) designed to assist managers of a smartphone retail shop 
              in making structured, data-driven decisions. The system implements weighted scoring models 
              and criteria analysis to evaluate performance and guide strategic choices.
            </p>
          </section>

          {/* What I Did */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-100 mb-4">What I Did</h2>
            <ul className="space-y-3">
              {[
                "Developed a Java-based DSS application from scratch",
                "Implemented Analytic Hierarchy Process (AHP) methodology",
                "Created weighted scoring models for multi-criteria evaluation",
                "Built performance evaluation modules for product comparison",
                "Designed user-friendly console interface for decision input",
                "Applied decision theory concepts to real-world retail scenarios",
                "Documented system design and usage instructions",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + idx * 0.05 }}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </section>

          {/* Key Features */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-100 mb-4">Key Features</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Weighted Scoring", desc: "Multi-criteria decision analysis" },
                { title: "AHP Integration", desc: "Analytic Hierarchy Process logic" },
                { title: "Performance Metrics", desc: "Quantitative evaluation system" },
                { title: "Decision Output", desc: "Clear recommendations with rationale" },
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-500/10 text-purple-400 font-medium hover:bg-purple-500/20 transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back to Portfolio</span>
          </Link>
        </motion.div>
      </main>
    </div>
  );
}

