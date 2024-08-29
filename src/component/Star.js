import { FaStar } from "react-icons/fa6";
import { useState } from "react";

export const StarPage = () => {
  const [rating, setRating] = useState(0);
  const incrementRating = (newrating) => {
    setRating(newrating);
    console.log(rating);
  };
  return (
    <div>
      <p>How was your stay?</p>
      <div className="flex">
        <FaStar
          onClick={incrementRating}
          style={{ backgroundColor: rating > 1 ? "green" : "gray" }}
        ></FaStar>
        <FaStar
          onClick={incrementRating}
          style={{ backgroundColor: rating > 2 ? "green" : "gray" }}
        ></FaStar>
        <FaStar
          onClick={incrementRating}
          style={{ backgroundColor: rating > 3 ? "green" : "gray" }}
        ></FaStar>
        <FaStar
          onClick={incrementRating}
          style={{ backgroundColor: rating > 4 ? "green" : "gray" }}
        ></FaStar>
        <FaStar
          onClick={incrementRating}
          style={{ backgroundColor: rating > 5 ? "green" : "gray" }}
        ></FaStar>
      </div>
    </div>
  );
};
