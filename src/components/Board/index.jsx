import { useState } from "react";
import Square from "../Square";
import ResetButton from "../ResetButton";

function Board({ count, nextValue, onplay, move,xoro,setXoro }) {
  // const [count, setCount] = useState(Array(9).fill(null));
  // const [nextValue, setNextValue] = useState(true);

  const [showButton, setShowButton] = useState(false);

  const btnHandle = () => {
    setShowButton((prev) => !prev);
  };

  const winner = (count) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [satu, dua, tiga] = lines[i];
      if (count[satu] && count[satu] === count[dua] && count[satu] === count[tiga]) {
        return count[satu];
      }
    }

    return null;
  };

  const handle = (i) => {
    if (winner(count) || count[i]) return;
    const nextCount = count.slice();
    nextValue ? ((nextCount[i] = "❌"), setXoro("⭕")) : ((nextCount[i] = "⭕"), setXoro("❌"));
    onplay(nextCount);
  };

  const isWinner = winner(count);

  let status;

  if (isWinner) {
    status = `Winner is : ${isWinner}`;
  } else {
    status = `Next ${xoro}`;
  }
  return (
    <div className=" p-4 items-start flex w-[500px]  justify-center container gap-3 h-fit">
      <div className="w-[180px]  min-[425px]:w-[290px] md:w-[300px]">
        <h1 className={`font-bold text-md p-3 text-center `}>{status}</h1>
        <div className="flex-wrap justify-center flex ">
          {count.map((data, i) => {
            return (
              <div key={i}>
                <Square value={data} handle={() => handle(i)} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <div className="relative">
          <button onClick={btnHandle} className="text-center min-[450px]:px-5 py-1 px-2 bg-gray-200 hover:bg-gray-300 font-semibold m-1 rounded-sm">
            Option
          </button>
          {showButton ? (
            <div className="absolute bg-[#DBD3D3] py-2 rounded">
              <ResetButton />
              <ol className="">{move}</ol>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Board;
