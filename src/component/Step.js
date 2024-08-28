import { useState } from "react";
const messages = ["learn react", " apply jobs", " invest your new income"];
const StepS = () => {
  const [step, setStep] = useState(0);
  const [hide, setHide] = useState(true);
  const incrementStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  console.log(step);
  const toggle = () => {
    setHide(!hide);
  };
  return (
    <div>
      <div onClick={toggle}>X</div>
      {hide && <div>hahaha</div>}
      <div>
        <div
          className="w-10 h-10 border-2 rounded-full"
          style={{ backgroundColor: step >= 1 ? "purple" : "gray" }}
        >
          1
        </div>

        <div
          className="w-10 h-10 border-2 rounded-full"
          style={{ backgroundColor: step >= 2 ? "purple" : "gray" }}
        >
          2
        </div>
        <div
          style={{ backgroundColor: step >= 3 ? "purple" : "gray" }}
          className="w-10 h-10 border-2 rounded-full"
        >
          3
        </div>
      </div>
      <p>{messages[step - 1]} </p>
      <div>
        <button onClick={incrementStep}>next</button>{" "}
        <button onClick={prevStep}>prev</button>
      </div>
    </div>
  );
};
export default StepS;
