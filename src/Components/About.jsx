import React from "react";

export default function About() {
  return (
    <>
      <h2 className="text-center text-2xl mb-10 mt-10 font-bold md:text-4xl">
        About Me
      </h2>
      <div className="mt-12 w-[90%] mx-auto bg-gray-200/70 rounded-lg shadow-lg md:w-[60%]">
        <div className="flex flex-col md:flex-row gap-3 justify-center items-center">
          <div className="text-center w-full h-full">
            <img src="img/img1.jpg" alt="" className="rounded block w-full h-full object-cover object-center slide-in-one" />
          </div>
          <div className="rounded p-5 text-justify ">
            <p>
              I'm Alase Samuel, a passionate Frontend Developer with a love for
              clean UI and seamless user experiences. I enjoy turning complex
              problems into simple, beautiful interfaces using modern tools like
              React, Tailwind, and TypeScript.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
