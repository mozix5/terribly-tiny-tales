import React from "react";
import { LuThumbsUp } from "react-icons/lu";

const Posts = (props) => {
  return (
    <div className="py-8  border-b px-1 md:px-2">
      <div className="flex justify-between items-center">
        <div className=" font-bold capitalize text-xl">{props.title}</div>
        <button className=" rounded-full bg-yellow-400 p-1">
          <LuThumbsUp className="text-white" />
        </button>
      </div>
      <div className="py-8">{props.content}</div>
      <div className="flex justify-between text-xs py-2">
        <div className="flex gap-1 font-semibold items-center">
          <div className=" text-blue-400">{props.type}</div>
          <div>by {props.userName}</div>
        </div>
        <div className="flex gap-1 text-slate-400">
          <div>{props.createdAt}</div>
          <div>{props.readAt} Read</div>
          <div>{props.views} Views</div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
