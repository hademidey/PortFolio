import React from "react";
import { Link } from "react-router";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      image: "img/weatha.png",
      name: "Weather App",
      description: "Get real-time weather updates for any location.",
      link: "https://weathas.netlify.app/",
      skills: (
        <div className="flex gap-2 text-sm text-gray-500 mt-2">
          <p>React</p> <p>TailwindCss</p> <p>JavaScript</p>
        </div>
      ),
    },
    {
      image: "img/Nexora.png",
      name: "Nexora App",
      description: "Manage tasks with real-time updates.",
      link: "https://nexoray.netlify.app/",
      skills: (
        <div className="flex gap-2 text-sm text-gray-500 mt-2">
          <p>React</p> <p>TailwindCss</p> <p>JavaScript</p>
        </div>
      ),
    },
    {
      image: "img/portfolio.png",
      name: "Portfolio Website",
      description:
        "A personal website built with React and deployed on Netlify.",
      link: "https://ademii.netlify.app/",
      skills: (
        <div className="flex gap-2 text-sm text-gray-500 mt-2">
          <p>React</p> <p>TailwindCss</p> <p>JavaScript</p>
        </div>
      ),
    },
    {
      image: "img/agecalc.png",
      name: "Age Calculator App",
      description: "Calculate age based on birthdate input.",
      link: "https://agey.netlify.app/",
      skills: (
        <div className="flex gap-2 text-sm text-gray-500 mt-2">
          <p>React</p> <p>TailwindCss</p> <p>JavaScript</p>
        </div>
      ),
    },
  ];

  return (
    <>
      <h1 className="text-center text-2xl m-10 font-bold md:text-4xl">
        Projects
      </h1>
      <div className="mt-12 w-[90%] mx-auto p-5 md:w-[60%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-50 object-cover rounded-t-lg"
              />
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold mt-3">{project.name}</h3>
                <Link
                  to={project.link}
                  target="_blank"
                  className="mt-4 inline-block  text-gray px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  <FiExternalLink />
                </Link>
              </div>
              <p className="text-gray-600 mt-2">{project.description}</p>
              {project.skills}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
