import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../types";

interface TechGridProps {
  technologies: Technology[];
  stack: Technology[];
  onAdd: (tech: Technology) => void;
}

export default function TechGrid({
  technologies,
  stack,
  onAdd,
}: TechGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {technologies.map((tech) => (
        <TechnologyCard
          key={tech.id}
          tech={tech}
          isAdded={stack.some((item) => item.id === tech.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}
