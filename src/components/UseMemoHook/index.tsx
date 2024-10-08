"use client";
import React, { useState, useMemo, useEffect } from "react";

const UseMemoHook = () => {
  const [count, setCount] = useState(10);

  console.log("Re-render - Re-render - Re-render - Re-render");

  const decrementHandler = () => {
    setCount((prevState) => prevState - 1);
  };

  const incrementHandler = () => {
    setCount((prevState) => prevState + 1);
  };

  // function to slow down things
  //   const doubleNumber = slowFunction(count);

  const doubleNumber = useMemo(() => {
    // this thing is returned using use memo hook
    return slowFunction(count);
  }, [count]);

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

export default UseMemoHook;

const slowFunction = (number: number) => {
  for (let i = 0; i < 1000000000; i++) {}

  for (let i = 0; i < 100000000; i++) {}

  return number * 2;
};
