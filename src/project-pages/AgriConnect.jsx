import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Wheat, TrendingUp, CloudSun, Users, Database, Shield, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function AgriConnect() {
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
            <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/10 text-emerald-400">
              <Wheat size={32} />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">
                AgriConnect Botswana
              </h1>
              <p className="text-slate-400 text-sm mt-1">Connecting Farmers to Markets • 2024</p>
            </div>
          </div>

          {/* Cover Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden border border-slate-800 mb-8"
          >
            <div className="aspect-video bg-gradient-to-br from-emerald-900/30 via-slate-900 to-green-900/30 flex items-center justify-center">
              <Wheat size={80} className="text-emerald-500/30" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
          </motion.div>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "React 18",
              "Node.js",
              "Express.js",
              "PostgreSQL",
              "Supabase",
              "Tailwind CSS",
              "React Query",
              "JWT",
              "React Router v6",
              "Recharts",
            ].map((tech) => (
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
            <p className="text-slate-300 leading-relaxed mb-4">
              AgriConnect is a full-stack web application that empowers smallholder farmers in Botswana 
              by connecting them directly to buyers, providing real-time market information, weather updates, 
              and tools for crop planning.
            </p>
            <p className="text-slate-300 leading-relaxed">
              The platform addresses three major obstacles faced by Botswana's farmers: poor market access, 
              lack of real-time information, and isolated farming communities.
            </p>
          </section>

          {/* Problems Solved */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-100 mb-4">Problems Solved</h2>
            <div className="space-y-4">
              {[
                {
                  icon: TrendingUp,
                  title: "Poor Market Access",
                  desc: "Enables farmers to reach buyers nationwide, eliminating middlemen and increasing profit margins.",
                },
                {
                  icon: CloudSun,
                  title: "Lack of Real-Time Information",
                  desc: "Provides market prices, weather alerts, and farming guides to help farmers make informed decisions.",
                },
                {
                  icon: Users,
                  title: "Isolated Farmer Community",
                  desc: "Offers crop planning tools to avoid oversupply and connects farmers with each other.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + idx * 0.05 }}
                  className="flex items-start gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/40"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-100 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* What I Did */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-100 mb-4">What I Did</h2>
            <ul className="space-y-3">
              {[
                "Built a responsive React 18 frontend with Tailwind CSS for a modern, mobile-first UI",
                "Developed RESTful backend API using Node.js with Express.js",
                "Implemented PostgreSQL database hosted on Supabase for data persistence",
                "Created secure authentication system using JWT (JSON Web Tokens)",
                "Integrated React Query for efficient server state management",
                "Built interactive data visualizations with Recharts",
                "Implemented file storage system (local with S3 switchability)",
                "Designed intuitive user flows for both farmers and buyers",
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

          {/* Tech Stack Details */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-100 mb-4">Tech Stack</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40">
                <div className="flex items-center gap-2 mb-3">
                  <Database size={18} className="text-emerald-400" />
                  <h3 className="font-medium text-slate-100">Backend</h3>
                </div>
                <ul className="space-y-1.5 text-sm text-slate-400">
                  <li>• Node.js with Express.js</li>
                  <li>• PostgreSQL (Supabase hosted)</li>
                  <li>• JWT Authentication</li>
                  <li>• RESTful API design</li>
                  <li>• Local/S3 file storage</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40">
                <div className="flex items-center gap-2 mb-3">
                  <Globe size={18} className="text-emerald-400" />
                  <h3 className="font-medium text-slate-100">Frontend</h3>
                </div>
                <ul className="space-y-1.5 text-sm text-slate-400">
                  <li>• React 18</li>
                  <li>• Tailwind CSS</li>
                  <li>• React Query + Context API</li>
                  <li>• React Router v6</li>
                  <li>• Recharts for data viz</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-slate-100 mb-4">Key Features</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Market Listings", desc: "Farmers can list and buyers can browse produce" },
                { title: "Price Tracking", desc: "Real-time market price updates and trends" },
                { title: "Weather Alerts", desc: "Localized weather forecasts for planning" },
                { title: "Crop Planning", desc: "Tools to optimize planting schedules" },
                { title: "User Profiles", desc: "Verified farmer and buyer accounts" },
                { title: "Farming Guides", desc: "Educational content for best practices" },
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

          {/* GitHub Link */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/dondie52/agriconnect"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-medium hover:bg-emerald-400 transition-colors"
            >
              View on GitHub
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 font-medium hover:bg-emerald-500/20 transition-colors"
            >
              <ArrowLeft size={18} />
              <span>Back to Portfolio</span>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
