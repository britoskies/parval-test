import React from "react";
import type { RequestInfoGridProps } from "../types/grid";

const RequestInfoGrid: React.FC<RequestInfoGridProps> = ({ items }) => (
  <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
    {items.map(({ label, value }) => (
      <div
        key={label}
        className="flex flex-col gap-1 border-t border-[#dbe0e6] pt-4"
      >
        <p className="text-[#60758a] text-sm font-medium">{label}</p>
        <p className="text-[#111418] text-sm">{value}</p>
      </div>
    ))}
  </div>
);

export default RequestInfoGrid;
