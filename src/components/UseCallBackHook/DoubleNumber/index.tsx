import React, { useEffect, useState } from "react";

type Props = {
  doubleNumber?: any;
};

const DoubleNumber = ({ doubleNumber }: Props) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Is function re-created");

    setNumber(doubleNumber());
  }, [doubleNumber]);

  return <div className=" p-5 rounded bg-green-500"> {number}</div>;
};

export default DoubleNumber;
