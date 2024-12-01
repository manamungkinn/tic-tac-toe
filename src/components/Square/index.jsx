import { useState } from "react";

const Square = ({ value, handle }) => {
  return (
    <>
      <button onClick={handle} className="w-[60px] h-[60px] min-[425px]:w-[80px] min-[425px]:h-[80px] md:w-[100px] md:h-[100px] text-center md  text-3xl border-gray-600 border cursor-pointer flex justify-center items-center">
        {value}
      </button>
    </>
  );
};

export default Square;
