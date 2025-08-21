import React, { use, useEffect, useState } from "react";

export default function About() {
  function TypingText({ text, speed = 100 }) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText((prev) => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, [text, speed]);
    return <span>{displayedText}</span>
   
  }

  return (
    <>
      <h2 className="text-center text-2xl mb-10 mt-10 font-bold md:text-4xl">
        About Me
      </h2>
      <div className="mt-12 w-[90%] mx-auto bg-gray-200/70 rounded-lg shadow-lg md:w-[70%]">
        <div className="flex flex-col md:flex-row gap-3 justify-center items-center">
          <div className="text-center  h-full md:w-[50%]">
            <img
              src="img/img1.jpg"
              alt=""
              className="rounded block w-full h-full object-cover object-center slide-in-one"
            />
          </div>
          <div className="rounded p-5 text-justify md:w-[60%] ">
            <TypingText text ="
              I'm Alase Samuel, a passionate Frontend Developer with a love for
              clean UI and seamless user experiences. I enjoy turning complex
              problems into simple, beautiful interfaces using modern tools like
              React, Tailwind, and TypeScript." speed={30}/>
           
          </div>
        </div>
      </div>
    </>
  );
}


//  const text =
//     "I'm Alase Samuel, a passionate Frontend Developer with a love for clean UI and seamless user experiences. I enjoy turning complex problems into simple, beautiful interfaces using modern tools like React, Tailwind, and TypeScript.";

//   useEffect(() => {
//     function typewriter() {
//       const element = document.getElementById("typewriter-text");
//       let index = 0;

//       let interval = setInterval(() => {
//         if (index < text.length) {
//           element.innerHTML += text.charAt(index);
//           index++;
//         } else {
//           clearInterval(interval);
//         }
//       }, 100);
//       console.log(element);
//     }
//     typewriter();
//   }, []);
