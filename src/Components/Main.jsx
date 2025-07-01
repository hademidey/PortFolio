import React from "react";
import { LuNavigation } from "react-icons/lu";

export default function Main() {
  return (
    <div className="w-full flex mt-20 px-10  justify-center items-center">
      <div className=" w-1/2">
        <span className="text-6xl font-semibold">Hello, I'm Miide</span>
        <br />
        <span className="text-2xl mt-7 font-semibold">Frontend Developer</span>
        <p className="text-xl ">
          High level experience in web design and development knownledge,
          producing quality work.
        </p>
        <button className="text-xl mt-10 bg-blue-600 p-3 rounded-xl flex text-white items-center justify-between gap-2 font-semibold">
          Contact Me <LuNavigation className="text-white" />
        </button>
      </div>

      <div className="w-1/2 flex justify-center relative items-center " >
        <div className="bg-blue-600 w-[500px] h-[500px] absolute -z-10 border rounded-full"></div>
        <div className="">
          <img
            src="img/image.png"
            alt=""
            className="w-full h-full rounded-b-xl object-cover  border-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
