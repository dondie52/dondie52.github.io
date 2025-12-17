import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function HospitalInfoSystem() {
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
            <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 text-emerald-400">
              <Building2 size={32} />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">
                Hospital Information System
              </h1>
              <p className="text-slate-400 text-sm mt-1">Princess Marina Hospital • 2025</p>
            </div>
          </div>

          {/* Cover Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden border border-slate-800 mb-8"
          >
            <div className="aspect-video bg-gradient-to-br from-emerald-900/30 via-slate-900 to-teal-900/30 flex items-center justify-center">
              <Building2 size={80} className="text-emerald-500/30" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
          </motion.div>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["Systems Analysis", "DFD", "ERD", "UML", "Research"].map((tech) => (
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
              A comprehensive systems analysis and design mini-project focused on developing a hospital 
              information system for Princess Marina Hospital. This academic project involved rigorous 
              documentation and modelling following industry-standard methodologies.
            </p>
          </section>

          {/* What I Did */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-100 mb-4">What I Did</h2>
            <ul className="space-y-3">
              {[
                "Created context diagrams to define system boundaries and external entities",
                "Designed Data Flow Diagrams (DFDs) showing process and data movement",
                "Developed Entity-Relationship Diagrams (ERDs) for database design",
                "Built comprehensive Use Case diagrams and descriptions",
                "Performed process modelling to understand workflow requirements",
                "Produced full system documentation following academic standards",
                "Conducted research on hospital information systems best practices",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + idx * 0.05 }}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </section>

          {/* Key Deliverables */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-100 mb-4">Key Deliverables</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Context Diagram", desc: "System scope and external entities" },
                { title: "DFD Levels 0-2", desc: "Detailed process decomposition" },
                { title: "ERD", desc: "Complete database schema design" },
                { title: "Use Cases", desc: "User interaction scenarios" },
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 font-medium hover:bg-emerald-500/20 transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back to Portfolio</span>
          </Link>
        </motion.div>
      </main>
    </div>
  );
}

