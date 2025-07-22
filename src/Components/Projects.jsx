import React from "react";
import { Link } from "react-router";

export default function Projects() {
  return (
    <div
      className='mt-12 w-[80%] mx-auto p-5 bg-gray-200/70 rounded-lg shadow-lg md:w-[50%]' 
    >
      <h2  className='text-center text-2xl font-semibold text-gray-500'>Projects</h2>
      <div className="project-grid">
        <div className="text-center">
          <h3 className="font-semibold mt-5 text-center">Portfolio Website</h3>
          <p  className="text-center">A personal website built with React and deployed on Netlify.</p>
          <button className="text-black  border-1 px-4 py-1 rounded-2xl mt-6 hover:bg-gray-600 transition duration-300">
            <Link to="https://ademii.netlify.app/">View</Link>
          </button>
        </div>
        <div className="text-center">
          <h3 className="font-semibold mt-5 text-center">Age Calculator App</h3>
          <p className="text-center">Manage tasks with real-time updates.</p>
          <button className=" text-black  border-1 px-4 py-1 rounded-2xl mt-6 hover:bg-gray-600 transition duration-300">
            <Link to="https://agey.netlify.app/">View</Link>
          </button>
        </div>
        <div className="text-center">
          <h3 className="font-semibold mt-5 text-center">Weather App</h3>
          <p  className="text-center">Get real-time weather updates for any location.</p>
          <button className=" text-black  border-1 px-4 py-1 rounded-2xl mt-6 hover:bg-gray-600 transition duration-300">
            <Link to="https://weathas.netlify.app/">View</Link>
          </button>
      </div>

         <div className="text-center">
          <h3 className="font-semibold mt-5 text-center">Nexora App</h3>
          <p  className="text-center">Manage tasks with real-time updates.</p>
          <button className=" text-black  border-1 px-4 py-1 rounded-2xl  mt-6 hover:bg-gray-600 transition duration-300">
            <Link to="https://nexoray.netlify.app/?#about">View</Link>
          </button>
        </div>
        </div>
    </div>
  );
}
