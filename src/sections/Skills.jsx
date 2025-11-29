import SectionWrapper from "../components/SectionWrapper";
import SkillCard from "../components/SkillCard";
import { skills } from "../data/content";

export default function Skills() {
  const skillCategories = Object.values(skills);

  return (
    <SectionWrapper
      id="skills"
      title="Skills & Technologies"
      subtitle="The tools and technologies I work with"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <SkillCard
            key={category.title}
            title={category.title}
            icon={category.icon}
            items={category.items}
            index={index}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

