import { useState } from "react";
export const PlayerPoint = () => {
  const [score, setscore] = useState(0);
  const [reset, setReset] = useState(true);

  const scorePlus = () => {
    setscore(score + 1);
  };
  console.log(score);
  const scoreMinus = () => {
    setscore(score - 1);
  };
  const Reset = () => {
    setReset(!reset);
  };
  return (
    <div className="flex items-center rounded-full h-[40px] bg-gray-200 border-1 gap-7 ">
      <div
        onClick={scoreMinus}
        className="h-10 w-10 p-2 border-1 rounded-full text-center  bg-gray-50"
      >
        -
      </div>
      {reset && (
        <div>
          <div>{score}</div>
        </div>
      )}
      <div
        onClick={scorePlus}
        className="h-10 w-10 p-2 border-1 rounded-full text-center  bg-gray-50"
      >
        +
      </div>
    </div>
  );
};
