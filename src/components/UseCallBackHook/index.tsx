"use client";
import React, { useState, useMemo, useEffect, useCallback } from "react";
import DoubleNumber from "./DoubleNumber";

const UseCallbackHook = () => {
  const [count, setCount] = useState(10);

  const decrementHandler = () => {
    setCount((prevState) => prevState - 1);
  };

  const incrementHandler = () => {
    setCount((prevState) => prevState + 1);
  };

  /******/
  // function to slow down things
  //   const doubleNumber: any = () => {
  //     console.log("DOUBLE NUMBER IS CALLED");

  //     // this thing is returned using use memo hook
  //     return slowFunction(count);
  //   };
  //to prevent un-necessary re-renders we will use use callback hook
  const doubleNumber = useCallback(
    //while using use callback the whole arrow function is returned
    () => {
      console.log("DOUBLE NUMBER IS CALLED");
      // this thing is returned using use memo hook
      return count * 10;
    },
    [count]
  );
  /******/

  /******/
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Is function re-created");

    setNumber(doubleNumber());
  }, [doubleNumber]);
  /******/

  /******/
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
  /******/
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
      {/* <DoubleNumber doubleNumber={doubleNumber} /> */}
      <div className=" p-5 rounded bg-green-500"> {number}</div>
    </div>
  );
};

export default UseCallbackHook;

const slowFunction = (number: number) => {
  return number * 10;
};
