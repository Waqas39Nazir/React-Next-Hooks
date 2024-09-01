import React from "react";

type Props = {
  doubleNumber?: any;
};

const DoubleNumber = ({ doubleNumber }: Props) => {
  return <div className=" p-5 rounded bg-green-500"> {doubleNumber()}</div>;
};

export default DoubleNumber;
