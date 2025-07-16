import React from "react";
import { Link } from "react-router";
import type { ErrorProps } from "../../types/error";

const Error: React.FC<ErrorProps> = ({
  message = "Something went wrong.",
  backLink = "/",
  backLabel = "Back to list",
}) => (
  <div className="flex flex-col items-center justify-center p-8">
    <svg
      className="w-12 h-12 text-red-600"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M8.257 3.099c.765-1.36 2.675-1.36 3.44 0l6.516 11.58c.75 1.333-.213 3.021-1.72 3.021H3.46c-1.508 0-2.47-1.688-1.72-3.021L8.257 3.1zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-2a1 1 0 01-.993-.883L9 10V7a1 1 0 011.993-.117L11 7v3a1 1 0 01-1 1z"
        clipRule="evenodd"
      />
    </svg>
    <p className="mt-4 text-red-600 text-center">{message}</p>
    <Link
      to={backLink}
      className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      {backLabel}
    </Link>
  </div>
);

export default Error;
