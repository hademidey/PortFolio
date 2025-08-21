export default function Skills() {
  const skills = [
    { name: "HTML", type: "Markup Language", img: "img/HTML5 logo PNG.jpg" },
    { name: "Tailwind CSS", type: "CSS Framework", img: "img/tailwind.jpg" },
    { name: "JavaScript", type: "Programming Language", img: "img/js.jpg" },
    { name: "React", type: "JavaScript Library", img: "img/React.jpg" },
    { name: "Excel", type: "Excel Workbook", img: "img/Excel.jpg" },
    { name: "Power Bi", type: "Power Bi Visualizations", img: "img/powerbi.jpg" },
    { name: "GitHub", type: "Developer Platform", img: "img/git.jpg" },
  ];

  return (
    <div className=" bg-gray-200/70 p-20">
      <h2 className="text-center text-4xl font-bold mb-20 underline">
        Skills
      </h2>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md flex flex-col items-center p-4 h-full"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="h-24 w-24 object-contain mb-4"
            />
            <h3 className="text-lg font-bold">{skill.name}</h3>
            <p className="text-gray-600">{skill.type}</p>
          </div>
        ))}
      </div>
    </div>

    // <div className="mt-12 w-[90%] mx-auto p-5 bg-gray-200/70 rounded-lg shadow-lg">
    //   <h2 className="text-2xl text-center font-semibold underline ">Skills</h2>

    //   <div className="flex flex-col justify-center items-center flex-wrap gap-5 mt-5 md:flex-row">
    //     <div className="h-24 w-24 object-contain mb-4">
    //       <li className="bg-white p-4 rounded-lg shadow-md self-start">
    //         <img src= />
    //         <h3 className="text-xl font-semibold">HTML</h3>
    //         <p className="text-gray-500">Markup Language</p>
    //       </li>
    //     </div>

    //     <div className="h-24 w-24 object-contain mb-4">
    //       <li className="bg-gray-600 p-4 rounded-lg shadow-md self-end">
    //         <img src="img/tailwind.jpg" alt="Tailwind logo PNG" />
    //         <h3 className="text-xl text-white font-semibold">Tailwind CSS</h3>
    //         <p className="text-white">CSS Framework</p>
    //       </li>
    //     </div>

    //     <div className="h-24 w-24 object-contain mb-4">
    //       <li className="bg-white p-4 rounded-lg shadow-md self-start">
    //         <img src="img/js.jpg" alt="JS logo PNG" />
    //         <h3 className="text-xl font-semibold">JavaScript</h3>
    //         <p className="text-gray-500">Programming Language</p>
    //       </li>
    //     </div>

    //     <div className="h-24 w-24 object-contain mb-4">
    //       <li className="bg-gray-600 p-4 rounded-lg shadow-md self-end">
    //         <img src="img/react.jpg" alt="react logo PNG" />
    //         <h3 className="text-xl text-white font-semibold">React</h3>
    //         <p className="text-white">JavaScript Library</p>
    //       </li>
    //     </div>
    //   </div>
    // </div>
  );
}
