import { FaStar } from "react-icons/fa6";
import { useState } from "react";

export const StarPage = () => {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState(0);
  // const textRating = () => {
  //   setText(text === (rating >= 0 ? "Great" : "Terrible"));
  // };
  const textrating = [rating <= 5 ? "Great" : "Terrible"];
  // console.log(textRating);
  const incrementRating = () => {
    setRating(rating + 1);
    console.log(rating);
  };

  return (
    <div>
      <p>How was your stay?</p>
      <div className="flex gap-7">
        <FaStar
          onClick={incrementRating}
          style={{
            backgroundColor: rating >= 1 ? "green" : "gray",
          }}
        ></FaStar>
        <p>{textrating[rating - 5]}</p>
        <FaStar
          onClick={incrementRating}
          style={{
            backgroundColor: rating >= 2 ? "green" : "gray",
          }}
        ></FaStar>
        <p>{textrating[rating - 2]}</p>
        <FaStar
          onClick={incrementRating}
          style={{ backgroundColor: rating >= 3 ? "green" : "gray" }}
        ></FaStar>
        <p>{textrating[rating - 3]}</p>
        <FaStar
          onClick={incrementRating}
          style={{ backgroundColor: rating >= 4 ? "green" : "gray" }}
        ></FaStar>
        <p>{textrating[rating - 4]}</p>
        <FaStar
          onClick={incrementRating}
          style={{ backgroundColor: rating >= 5 ? "green" : "gray" }}
        ></FaStar>
        <p>{textrating[rating - 5]}</p>
      </div>
    </div>
  );
};
