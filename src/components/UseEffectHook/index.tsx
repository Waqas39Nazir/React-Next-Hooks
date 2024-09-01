"use client";
import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [contentType, setContentType] = useState("posts");

  const [content, setContent] = useState([]);

  const contentTypeHandler = (type: string) => {
    setContentType(() => type);
  };

  // this is called on every render
  //useEffect(()=>{
  // })

  //this is called on first render of component
  useEffect(() => {
    console.log("I am Called on render");
  }, []);

  //this is called when state on content type changes
  useEffect(() => {
    console.log("I am Called on State Change Outside");
    if (contentType) {
      console.log("I am Called on State Change inside");

      fetch(`https://jsonplaceholder.typicode.com/${contentType}`)
        .then((response) => response.json())
        .then((json) => {
          setContent(json);
          // console.log(json);
        });
    }
  }, [contentType]);

  useEffect(() => {
    return () => {
      console.log("I am Called when component is unmounted");
    };
  }, []);
  return (
    <div className="flex flex-col gap-7 items-center">
      <div className="flex w-fit text-black bg-white p-20 rounded-lg flex-row items-center justify-center gap-4">
        <button
          onClick={() => contentTypeHandler("posts")}
          className=" p-5 rounded bg-blue-400 hover:bg-blue-800"
        >
          Posts
        </button>

        <button
          onClick={() => contentTypeHandler("users")}
          className=" p-5 rounded bg-blue-400 hover:bg-blue-800"
        >
          Users
        </button>

        <button
          onClick={() => contentTypeHandler("comments")}
          className=" p-5 rounded bg-blue-400 hover:bg-blue-800"
        >
          Comments
        </button>
      </div>

      <div className=" p-5 rounded bg-white text-black">
        <h1 className=" capitalize text-2xl font-medium">{contentType}</h1>

        <div className="flex flex-col min-w-[30rem] gap-2 h-[30rem] overflow-y-auto">
          {content &&
            content.length > 0 &&
            content.map((content: any, index: number) => {
              return (
                <h1 className="  capitalize" key={index}>
                  {index + 1}:
                  {content?.title
                    ? content.title
                    : content.name
                    ? content.name
                    : ""}
                </h1>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default UseEffectHook;
