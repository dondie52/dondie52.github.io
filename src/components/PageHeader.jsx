import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PageHeader({ title, subtitle, backHref = "/", backLabel = "Back" }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl">
      <nav className="max-w-6xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link
          to={backHref}
          className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">{backLabel}</span>
        </Link>

        <div className="hidden sm:block text-right">
          <div className="text-sm font-semibold text-slate-100">{title}</div>
          {subtitle ? <div className="text-xs text-slate-500">{subtitle}</div> : null}
        </div>
      </nav>
    </header>
  );
}

