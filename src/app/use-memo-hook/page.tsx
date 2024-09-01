import React from "react";
import UseMemoHook from "@/components/UseMemoHook";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-row items-center justify-center">
      {<UseMemoHook />}
    </div>
  );
};

export default page;
