import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send, MapPin, Globe, ArrowRight } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import { personalInfo } from "../data/content";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Build the mailto URL with form data
    const subject = encodeURIComponent(`Website Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Hi Georgy,\n\n${formState.message}\n\n---\nFrom: ${formState.name}\nEmail: ${formState.email}`
    );
    
    // Open email client with pre-filled data
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    
    // Reset form
    setFormState({ name: "", email: "", message: "" });
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/dondie52",
      href: personalInfo.github,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/georgymoni",
      href: personalInfo.linkedin,
    },
  ];

  return (
    <SectionWrapper
      id="contact"
      title="Get in Touch"
      subtitle="I'm open to frontend roles, internship opportunities, and collaborations"
    >
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Make Me a Website CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border-2 border-sky-500/30 bg-gradient-to-br from-sky-500/10 via-slate-900/60 to-purple-500/10 backdrop-blur-sm p-6 relative overflow-hidden"
          >
            {/* Decorative gradient orb */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-500/20 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-400">
                  <Globe size={22} />
                </div>
                <h3 className="font-bold text-lg text-slate-100">Need a Website?</h3>
              </div>
              
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                I build modern, responsive websites for individuals and businesses. 
                From portfolios to landing pages – let&apos;s bring your vision online.
              </p>
              
              <a
                href={`mailto:${personalInfo.email}?subject=${encodeURIComponent("I Need a Website Built")}&body=${encodeURIComponent("Hi Georgy,\n\nI'm interested in having a website built.\n\nHere's what I'm looking for:\n- Type of website: \n- Key features: \n- Timeline: \n- Budget range: \n\nLooking forward to hearing from you!")}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all hover:gap-3"
              >
                Let&apos;s Talk
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          <div className="rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-6">
            <h3 className="font-semibold text-slate-100 mb-6 flex items-center gap-2">
              <MapPin size={18} className="text-emerald-400" />
              Contact Information
            </h3>

            <div className="space-y-4">
              {contactLinks.map(({ icon: Icon, label, value, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-slate-800/50 transition-colors"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">{label}</p>
                    <p className="text-slate-300 group-hover:text-emerald-400 transition-colors">
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Location note */}
          <div className="rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-6">
            <p className="text-slate-400 text-sm leading-relaxed">
              Based in <span className="text-emerald-400 font-medium">Gaborone, Botswana</span>.
              Available for remote work and open to opportunities worldwide.
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-6 space-y-5"
          >
            <h3 className="font-semibold text-slate-100 mb-2">Send a Message</h3>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-slate-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/25 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-slate-400 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/25 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-slate-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/25 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-semibold hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
            >
              <Send size={18} />
              Send Message
            </button>

            <p className="text-xs text-slate-500 text-center">
              This will open your email app with the message pre-filled.
            </p>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
