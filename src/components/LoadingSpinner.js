import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div
        className="animate-bounce "
        role="status"
      >
        <span className="text-black">Loading.....</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
