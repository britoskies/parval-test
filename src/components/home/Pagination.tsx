import React from "react";
import type { PaginationProps } from "../../types/home";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => (
  <div className="flex justify-center items-center space-x-2 mt-6">
    <button
      onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
      disabled={currentPage === 1}
      className="px-3 py-1 border rounded-md text-gray-700 bg-white border-gray-300 hover:bg-gray-100 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      Prev
    </button>

    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
      <button
        key={page}
        onClick={() => onPageChange(page)}
        className={`px-3 py-1 border rounded-md text-sm transition-colors ${
          currentPage === page
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400"
        }`}
      >
        {page}
      </button>
    ))}

    <button
      onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
      disabled={currentPage === totalPages}
      className="px-3 py-1 border rounded-md text-gray-700 bg-white border-gray-300 hover:bg-gray-100 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      Next
    </button>
  </div>
);

export default Pagination;
