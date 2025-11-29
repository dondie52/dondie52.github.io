import SectionWrapper from "../components/SectionWrapper";
import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../data/content";

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      title="Work Experience"
      subtitle="My professional journey and contributions"
    >
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceCard key={experience.company} experience={experience} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}

