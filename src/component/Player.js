// import { useState } from "react";
import { useState } from "react";
import { Tsom } from "./Icons.js/Tsom";
// import { PlayerPoint } from "./point";
const players = [
  { name: "Jonh Cena", id: 1, playerscore: 10 },
  { name: "Jonh Cena", id: 2, playerscore: 8 },
  { name: "Jonh Cena", id: 3, playerscore: 5 },
];

export const Play = () => {
  const [score, setscore] = useState(players);
  const [reset, setReset] = useState(true);
  const incrementScore = (index) => {
    const updateScore = [...score];
    updateScore[index].playerscore += 1;
    setscore(updateScore);
  };

  const decrementScore = (index) => {
    const updateScore = [...score];
    updateScore[index].playerscore -= 1;
    setscore(updateScore);
  };
  const Reset = () => {
    setReset(!reset);
  };
  return (
    <div className="ml-96">
      <div className="w-[530px] h-[533px] border rounded-2xl p-8">
        <div className="flex justify-between">
          <div className="text-3xl font-bold">Play score</div>
          <Tsom></Tsom>
        </div>
        <p className="font-normal text-gray-500 mt-2">
          Hidden in the middle of text
        </p>
        <div>
          {score.map((item, index) => {
            return (
              <div
                key={index}
                id={item.id}
                className="flex flex-row justify-between items-center w-[466px] h-[72px] mt-6"
              >
                <div className="flex items-center">{item.name}</div>

                <div className="flex items-center rounded-full h-[40px] bg-gray-200 border-1 gap-7 ">
                  {" "}
                  <div
                    onClick={() => decrementScore(index)}
                    className="h-10 w-10 p-2 border-1 rounded-full text-center  bg-gray-50"
                  >
                    -
                  </div>
                  {reset && (
                    <div>
                      <div key={index}>{item.playerscore}</div>
                    </div>
                  )}
                  <div
                    onClick={() => incrementScore(index)}
                    className="h-10 w-10 p-2 border-1 rounded-full text-center  bg-gray-50"
                  >
                    +
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={Reset}
          className="p-6 text-gray-50 rounded-md bg-green-500 "
        >
          Reset
        </button>
      </div>
    </div>
  );
};
