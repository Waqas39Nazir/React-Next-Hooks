"use client";
import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(10);
  // OR
  // const [count, setCount] = useState(() => {
  //   return 10;
  // });

  //on every state change a console will be render this means
  // that on state change on whole component re-renders
  console.log("Re-render - Re-render - Re-render - Re-render");

  const decrementHandler = () => {
    // instead of this
    // seCount(count - 1); does not immediately update the state, you can test this by calling it twice
    //use this approach
    setCount((prevState) => prevState - 1);
  };

  const incrementHandler = () => {
    setCount((prevState) => prevState + 1);
  };
  return (
    <div className="flex w-fit text-black bg-white p-20 rounded-lg flex-row items-center justify-center gap-4">
      <button
        onClick={decrementHandler}
        className=" p-5 rounded bg-blue-400 hover:bg-blue-800"
      >
        -
      </button>
      <span className=" p-5 rounded bg-gray-300">{count}</span>
      <button
        onClick={incrementHandler}
        className=" p-5 rounded bg-blue-400 hover:bg-blue-800"
      >
        +
      </button>
    </div>
  );
};

export default UseStateHook;
