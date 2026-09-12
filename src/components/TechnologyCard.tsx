import { Star } from "lucide-react";
import type { Technology } from "../types";

interface TechnologyCardProps {
  tech: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
}

const badgeColors: Record<string, string> = {
  Frontend: "bg-blue-50 text-blue-600",
  Backend: "bg-green-50 text-green-600",
  Database: "bg-sky-50 text-sky-600",
  Language: "bg-amber-50 text-amber-600",
  Styling: "bg-cyan-50 text-cyan-600",
  DevOps: "bg-indigo-50 text-indigo-600",
  Tools: "bg-purple-50 text-purple-600",
};

const chipStyle =
  "px-1.5 py-0.5 rounded-md text-[10px] font-medium bg-gray-100 text-gray-600 whitespace-nowrap";

export default function TechnologyCard({
  tech,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  const badgeClass = badgeColors[tech.category] || "bg-gray-100 text-gray-600";

  return (
    <div
      className={`relative bg-white rounded-2xl border p-5 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
        isAdded
          ? "border-[#DB2777]/40"
          : "border-gray-100 hover:border-gray-200"
      } shadow-sm`}
    >
      {tech.badge && (
        <span
          className={`absolute top-4 right-4 px-2.5 py-1 rounded-full text-[11px] font-semibold ${badgeClass}`}
        >
          {tech.badge}
        </span>
      )}
      <img
        src={tech.icon}
        alt={tech.name}
        className="w-8 h-8 object-contain"
        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <h3 className="font-semibold text-gray-900 text-base">{tech.name}</h3>
      <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
        {tech.description}
      </p>
      <div className="flex items-center gap-1.5 flex-nowrap">
        <span className={chipStyle}>{tech.category}</span>
        <span className={chipStyle}>{tech.difficulty}</span>
        <span className="flex items-center gap-1 text-xs font-medium text-gray-700 shrink-0 ml-auto">
          <Star
            size={12}
            className="fill-yellow-400 text-yellow-400 shrink-0"
          />
          {tech.rating}
        </span>
      </div>
      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-1 w-full py-2.5 rounded-lg text-sm font-medium transition-colors ${
          isAdded
            ? "bg-pink-50 text-[#DB2777] cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
