import React from "react";
import { LuThumbsUp } from "react-icons/lu";

const Posts = (props) => {
  const limitText = (text, limit = 30) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + " ...";
    }
    return text;
  };

  return (
    <div className="py-8  border-b px-1 md:px-2">
      <div className="flex justify-between items-center">
        <div className=" font-bold capitalize text-xl sm:text-2xl">{props.title}</div>
        <button className=" rounded-full bg-yellow-400 p-1">
          <LuThumbsUp className="text-white" />
        </button>
      </div>
      <div className="py-8 sm:text-xl text-[#808080] overflow-hidden ">
        {limitText(props.content)}
      </div>
      <div className="flex justify-between text-sm max-sm:text-xs py-2  text-[#808080]">
        <div className="flex gap-1 font-semibold items-center ">
          <div className=" text-blue-400">{props.type}</div>
          <div>by {props.userName}</div>
        </div>
        <div className="flex gap-1 sm:gap-2 items-center">
          <div>{props.createdAt}</div>
          <span className=" h-1 w-1 bg-[#808080]  rounded-full"/>
          <div>{props.readAt} Read</div>
          <div>{props.views} Views</div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
