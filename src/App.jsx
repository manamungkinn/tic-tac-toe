import React from "react";
import { useState } from "react";
import Board from "./components/Board";
const App = () => {
  const [count, setCount] = useState([Array(9).fill(null)]);
  const [currentSquare, setCurrentSquare] = useState(0);
  const currentCount = count[currentSquare];
  const [nextValue, setNextValue] = useState(true);
  const [xoro, setXoro] = useState(nextValue ? "❌" : "⭕");

  console.log({ count });
  console.log({ currentCount });

  const onPlay = (nextCount) => {
    const nextSquare = [...count.slice(0, currentSquare + 1), nextCount];
    // setCount([...count, nextCount]);
    setCount(nextSquare);
    setCurrentSquare(nextSquare.length - 1);
    setNextValue((prev) => !prev);
  };

  const jumpTo = (to) => {
    setCurrentSquare(to);
    setNextValue(to % 2 === 0 ? setXoro("❌") : setXoro("⭕"));
  };

  const move = count.map((s, i) => {
    let description = "";
    i > 0 ? (description = `#${i}`) : (description = "Beginning");
    return (
      <>
        <li key={i} className={`w-[100px]`}>
          <button
            className="p-1 bg-gray-200 hover:bg-gray-300 text-sm font-semibold m-1 rounded-sm"
            onClick={() => {
              jumpTo(i);
            }}
          >
            {description}
          </button>
        </li>
      </>
    );
  });

  return (
    <>
      <div className="h-screen  flex justify-center items-center">
        <Board count={currentCount} nextValue={nextValue} onplay={onPlay} move={move} setXoro={setXoro} xoro={xoro} />
      </div>
    </>
  );
};

export default App;
