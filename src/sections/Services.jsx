import { motion } from "framer-motion";
import { Monitor, Layers, Code, Wrench, HardDrive, Headphones } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";

const services = [
  {
    title: "Web Design & Development",
    icon: Monitor,
    description:
      "Explore my web design and development services tailored to enhance your online presence. From modern UI layouts to robust functionality, I build digital experiences that engage users and support business growth.",
  },
  {
    title: "Custom Application Development",
    icon: Layers,
    description:
      "I design and build custom applications that solve real business needs—streamlining workflows, improving efficiency, and enabling scalable operations.",
  },
  {
    title: "Programming & Software Development",
    icon: Code,
    description:
      "I create efficient, maintainable software solutions. From algorithms to user-ready systems, I focus on performance, clarity, and solving practical problems.",
  },
  {
    title: "Computer Repairs & Software Installations",
    icon: Wrench,
    description:
      "Reliable troubleshooting for hardware and software issues. I diagnose, fix, and optimize systems to ensure smooth day-to-day operations.",
  },
  {
    title: "Data Backup & Recovery",
    icon: HardDrive,
    description:
      "I implement secure data backup strategies and recovery solutions to protect valuable information and reduce downtime.",
  },
  {
    title: "IT Support",
    icon: Headphones,
    description:
      "Fast and dependable IT support for resolving technical problems, improving system performance, and ensuring reliable operations.",
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services" title="Services">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-5 transition-all duration-300 hover:border-sky-500/30 hover:shadow-xl hover:shadow-sky-500/20"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                {/* Icon */}
                <div className="mb-4 inline-flex p-2 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 group-hover:shadow-lg group-hover:shadow-sky-500/20 transition-all duration-300">
                  <IconComponent size={24} />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-slate-100 mb-2">{service.title}</h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

