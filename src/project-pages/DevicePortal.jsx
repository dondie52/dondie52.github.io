import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Laptop } from "lucide-react";
import { Link } from "react-router-dom";

export default function DevicePortal() {
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
            <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 text-cyan-400">
              <Laptop size={32} />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">
                Student Device Management Portal
              </h1>
              <p className="text-slate-400 text-sm mt-1">Tertiary Institutions • 2025</p>
            </div>
          </div>

          {/* Cover Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden border border-slate-800 mb-8"
          >
            <div className="aspect-video bg-gradient-to-br from-cyan-900/30 via-slate-900 to-blue-900/30 flex items-center justify-center">
              <Laptop size={80} className="text-cyan-500/30" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
          </motion.div>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["React", "Firebase", "Tailwind CSS"].map((tech) => (
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
              A comprehensive web system for tracking student laptop agents, sales, and inventory 
              across tertiary institutions in Botswana. Built to improve transparency, streamline 
              operations, and enhance reporting capabilities for device distribution programs.
            </p>
          </section>

          {/* What I Did */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-100 mb-4">What I Did</h2>
            <ul className="space-y-3">
              {[
                "Built responsive React frontend with modern component architecture",
                "Implemented Firebase backend for real-time data synchronization",
                "Created agent management and tracking functionality",
                "Developed sales recording and inventory management modules",
                "Designed reporting dashboards for operational insights",
                "Styled interface with Tailwind CSS for consistent, clean UX",
                "Ensured mobile-responsive design for field access",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + idx * 0.05 }}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
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
                { title: "Agent Tracking", desc: "Monitor laptop agent activities" },
                { title: "Sales Recording", desc: "Track transactions and payments" },
                { title: "Inventory System", desc: "Real-time stock management" },
                { title: "Reporting Tools", desc: "Generate operational reports" },
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 font-medium hover:bg-cyan-500/20 transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back to Portfolio</span>
          </Link>
        </motion.div>
      </main>
    </div>
  );
}

