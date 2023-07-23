import React from "react";

const ProgressCircle = ({ progress }: { progress: number }) => {
  const circumference = 2 * Math.PI * 30;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="inline-flex items-center justify-center overflow-hidden rounded-full">
      <svg className="h-20 w-20">
        <circle
          className="text-gray-300"
          strokeWidth="5"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
        <circle
          className="text-blue-600 transition-all ease-in-out duration-300"
          strokeWidth="5"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
      </svg>
      <span className="absolute text-md text-blue-700">{`${progress}%`}</span>
    </div>
  );
};

export default ProgressCircle;
