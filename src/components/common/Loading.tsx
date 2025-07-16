// src/components/common/Loading.tsx
import React from "react";
import type { LoadingProps } from "../../types/loading";

const Loading: React.FC<LoadingProps> = ({ message = "Loading…" }) => (
  <div className="flex flex-col items-center justify-center p-8">
    <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin" />
    <p className="mt-4 text-gray-600">{message}</p>
  </div>
);

export default Loading;
