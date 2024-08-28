// import { useState } from "react";
// const userList = ["Tergel", "HULAN", "haliunaa"];

// export default function State() {
//   const [index, setIndex] = useState(0);
//   const [user, setUser] = useState(userList);
//   const handlePlus = () => {
//     setIndex(index + 1);
//   };
//   const handleMinus = () => {
//     setIndex(index - 1);
//   };
//   const text = () => {
//     setIndex(index / 2);
//   };

//   return (
//     <div className="flex">
//       <button onClick={handlePlus}>nemeh</button>
//       <p>{index}</p>
//       <button onClick={handleMinus}>hasah</button>

//       {user.map((element) => {
//         return <p>{element}</p>;
//       })}
//     </div>
//   );
// }
// const messages = ["learn react", " apply jobs", " invest your new income"];
// export default function State() {
//   const [step, setStep] = useState(0);
//   const [ishideStep, setIshideStep] = useState(true);
//   const incrementStep = () => {
//     setStep(step + 1);
//   };
//   console.log(step);
//   const handlePreStep = () => {
//     setStep(step - 1);
//   };
//   const Hide = () => {
//     setIshideStep(!ishideStep);
//   };
//   return (
//     <div>
//       {" "}
//       <div>
//         <p onClick={Hide}>X</p>
//       </div>
//       {ishideStep && (
//         <div>
//           <div className="flex gap-2">
//             <div
//               className="w-10 h-10 border-2 rounded-full bg-blue-600 mb-10"
//               style={{ backgroundColor: step >= 1 ? "purple" : "gray" }}
//             >
//               1
//             </div>
//             <div
//               className="w-10 h-10 border-2 rounded-full bg-blue-600 mb-10"
//               style={{ backgroundColor: step >= 2 ? "purple" : "gray" }}
//             >
//               2
//             </div>
//             <div
//               className="w-10 h-10 border-2 rounded-full bg-blue-600 mb-10"
//               style={{ backgroundColor: step >= 3 ? "purple" : "gray" }}
//             >
//               3
//             </div>
//           </div>
//           <p>{messages[step - 1]}</p>
//           <div className="">
//             <button onClick={incrementStep}>next</button>
//             <button onClick={handlePreStep}>prev</button>
//           </div>{" "}
//         </div>
//       )}
//     </div>
//   );
// }
