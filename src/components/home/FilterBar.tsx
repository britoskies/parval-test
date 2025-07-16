import React from "react";
import type { FilterBarProps } from "../../types/home";

const FilterBar: React.FC<FilterBarProps> = ({ filters }) => (
  <div className="flex gap-3 p-4 flex-wrap">
    {filters.map(({ label, value, options, onChange }) => (
      <div key={label} className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none flex h-8 items-center rounded-lg bg-[#f0f2f5] pl-4 pr-8 text-sm font-medium text-[#111418]"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt === "All" ? label : opt}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#111418]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
          </svg>
        </div>
      </div>
    ))}
  </div>
);

export default FilterBar;
