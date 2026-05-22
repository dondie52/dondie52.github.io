import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import BeyondTech from "./sections/BeyondTech";
import Contact from "./sections/Contact";

import ProjectsIndexPage from "./pages/ProjectsIndexPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 space-y-28">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Services />
        <Projects />
        <Education />
        <BeyondTech />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsIndexPage />} />
      <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

