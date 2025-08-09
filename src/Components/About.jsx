import React from "react";

export default function About() {
  return (
    <div className="mt-12 w-[90%] mx-auto p-5 bg-gray-200/70 rounded-lg shadow-lg md:w-[60%]">
      <h2 className="text-center text-2xl mb-10 font-semibold text-gray-500 underline">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        <div className="mt-2 p-5 text-center w-full h-full object-cover object-center">
          <img
            src="img/img1.jpg"
            alt=""
            className="rounded"
          />
        </div>
        <div className="mt-2 rounded p-10 text-center">
          <p >
            I'm Alase Samuel, a passionate Frontend Developer with a love for
            clean UI and seamless user experiences. I enjoy turning complex
            problems into simple, beautiful interfaces using modern tools like
            React, Tailwind, and TypeScript.
          </p>
        </div>
      </div>
    </div>
  );
}
