import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8"
        >
          <h1 className="text-2xl sm:text-3xl font-bold">Page not found</h1>
          <p className="mt-3 text-slate-400">The page you are looking for doesn’t exist (or has moved).</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 font-medium hover:bg-emerald-500/20 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-slate-700 text-slate-300 font-medium hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

