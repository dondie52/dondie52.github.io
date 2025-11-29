import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import Tag from "../components/Tag";
import { beyondTechText, beyondTechTags } from "../data/content";

export default function BeyondTech() {
  return (
    <SectionWrapper
      id="beyond-tech"
      title="Beyond Tech"
      subtitle="Life outside of code and systems"
    >
      <div className="grid lg:grid-cols-5 gap-8">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 space-y-4"
        >
          {beyondTechText.map((paragraph, i) => (
            <p key={i} className="text-slate-400 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-6">
            <h3 className="font-semibold text-slate-100 mb-4">Interests & Values</h3>
            <div className="flex flex-wrap gap-3">
              {beyondTechTags.map((tag, index) => (
                <Tag key={tag.label} emoji={tag.emoji} label={tag.label} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

