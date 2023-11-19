import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-black flex justify-between h-[4.3rem] xl:h-16 items-center px-7 w-full sticky top-0 z-10 ">
      <div className="flex items-center gap-2">
        <img
          src="https://i.pinimg.com/280x280_RS/45/13/ed/4513ede75c1139af511c64152c953907.jpg"
          className=" rounded-full object-cover  h-10 w-10"
        ></img>
        <div className=" uppercase text-white border-l-2 border-yellow-400 px-2 h-9 flex items-center text-base" style={{letterSpacing:"4px"}}>
          stories
        </div>
      </div>
      <div>
        <button className=" bg-yellow-400 rounded-md px-3 font-semibold py-2">
          Courses
        </button>
      </div>
    </div>
  );
};

export default Navbar;
