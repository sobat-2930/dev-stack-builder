
import { X } from "lucide-react";
import type { Technology } from "../types";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function YourStack({ stack, onRemove, onRemoveAll }: YourStackProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 h-fit sticky top-20">
      <h3 className="font-semibold text-gray-900 mb-1">Your Stack</h3>

      <p className="text-xs text-gray-400 mb-4">
        {stack.length === 0 ? "No technologies selected yet." : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-xl py-10 text-center">
          <p className="text-sm text-gray-400">Your stack is empty</p>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-3">
            {stack.map((tech) => (
              <div key={tech.id} className="flex items-center gap-3 border border-gray-100 rounded-xl p-3">
                <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{tech.name}</p>
                  <p className="text-xs text-gray-400">{tech.category}</p>
                </div>
                <button onClick={() => onRemove(tech.id)} className="text-gray-400 hover:text-red-500" aria-label={`Remove ${tech.name}`}>
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="mt-4 w-full py-2 rounded-lg text-sm font-medium text-red-500 border border-red-100 hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
}