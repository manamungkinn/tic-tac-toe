import React from "react";


const ResetButton = () => {
  const handle = () => {
    location.reload();
  };
  return (
    <div className="w-fit">
      <button className="min-[450px]:py-2 text-sm text-red-700 text-center min-[450px]:px-5 py-1 px-2 bg-gray-200 hover:bg-gray-300 font-semibold m-1 rounded-sm"
        onClick={() => {
          handle();
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default ResetButton;