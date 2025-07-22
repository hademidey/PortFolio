import React from "react";

export default function Projects() {
  return (
    <div
      className="bg-gray-100/70 text-center p-5 mt-12 space-y-6"
      id="projects"
    >
      <h2  className='text-center text-2xl font-semibold text-gray-500'>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3 className="font-semibold">Portfolio Website</h3>
          <p>A personal website built with React and deployed on Netlify.</p>
          <button className="text-black  border-1 px-4 py-1 rounded-2xl hover:bg-gray-600 transition duration-300">
            <a href="https://ademii.netlify.app/">View</a>
          </button>
        </div>
        <div className="project-card">
          <h3 className="font-semibold p-2">Age Calculator App</h3>
          <p>Manage tasks with real-time updates.</p>
          <button className=" text-black  border-1 px-4 py-1 rounded-2xl hover:bg-gray-600 transition duration-300">
            <a href="https://agey.netlify.app/">View</a>
          </button>
        </div>
      </div>
    </div>
  );
}
