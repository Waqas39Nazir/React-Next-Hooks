"use client";
import React, { useState, useMemo, useEffect } from "react";

const UseCallbackHook = () => {
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

  // function to slow down things
  const doubleNumber: any = () => {
    console.log("I am CALLED without reason");

    // this thing is returned using use memo hook
    return slowFunction(count);
  };
  //   const doubleNumber = useMemo(() => {
  //     // this thing is returned using use memo hook
  //     return slowFunction(count);
  //   }, [count]);

  //
  const [theme, setTheme] = useState("bg-orange-500");

  const themeChangeHandler = () => {
    setTheme((prevValue) => {
      if (prevValue === "bg-orange-500") {
        return "bg-yellow-500";
      } else {
        return "bg-orange-500";
      }
    });
  };
  return (
    <div className="flex flex-col gap-5">
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

      <button onClick={themeChangeHandler} className={`p-5 rounded ${theme}`}>
        Change Theme
      </button>

      <div className=" p-5 rounded bg-green-500"> {doubleNumber}</div>
    </div>
  );
};

export default UseCallbackHook;

const slowFunction = (number: number) => {
  return number * 10;
};
