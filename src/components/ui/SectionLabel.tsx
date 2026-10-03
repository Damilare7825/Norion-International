import React from "react";

interface SectionLabelProps {
  number?: string;
  label: string;
  light?: boolean;
  className?: string;
}

export function SectionLabel({
  number,
  label,
  light = false,
  className = "",
}: SectionLabelProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 mb-4 ${className}`}>
      {number && (
        <span
          className={`font-mono text-xs tracking-wider font-semibold ${
            light ? "text-[#0088C9]" : "text-[#087A5B]"
          }`}
        >
          {number}
        </span>
      )}
      {number && (
        <span
          className={`w-4 h-px ${light ? "bg-[#0088C9]/40" : "bg-[#087A5B]/40"}`}
        />
      )}
      <span
        className={`text-xs font-semibold uppercase tracking-[0.2em] ${
          light ? "text-gray-300" : "text-[#6B6B6B]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
