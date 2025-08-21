import { ChartNoAxesCombined, CodeXml } from "lucide-react";
import React from "react";

export default function Experience() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center m-6 underline ">
        Experience
      </h2>
      <div className="grid  mt-12 w-[90%] mx-auto p-5  rounded-lg  md:grid-cols-2  md:w-[70%]">
        <div className=" w-[90%] mx-auto p-5 bg-gray-200/70 rounded-lg shadow-lg ">
          <h2 className=" flex text-xl font-semibold  mt-2  items-center gap-2">
            <CodeXml className="text-black" />
            Frontend Developer
          </h2>
          <p className="mt-2 text-gray-700 leading-relaxed ">
            Built responsive websites, collaborated with designers, and
            contributed to frontend architecture decisions.
          </p>
        </div>

        <div className=" w-[90%] mx-auto p-5 bg-gray-200/70 rounded-lg shadow-lg ">
          <h2 className="flex items-center gap-2 text-xl font-semibold  mt-2">
            <ChartNoAxesCombined className="text-black" /> Data Analysis
          </h2>
          <p className="mt-2 text-gray-700 leading-relaxed">
            Working with Excel and Power BI for data visualization Analyzing
            datasets (e.g., sales, sleep patterns)
          </p>
        </div>
      </div>
    </div>

    // <div className="mt-12 w-[90%] mx-auto bg-gray-200/70 rounded-lg shadow-lg">
    //   <h2 className="text-2xl font-semibold text-center mb-6 underline">Experience</h2>
    //   <ul className="bg-gray-100/70 text-center">
    //     <li className="p-5">
    //       <h3 className="text-xl font-semibold text-gray-400/90 mt-2">
    //         Frontend Developer
    //       </h3>
    //       <p className="mt-2 text-gray-700 leading-relaxed">
    //         Built responsive websites, collaborated with designers, and
    //         contributed to frontend architecture decisions.
    //       </p>
    //     </li>
    //     <li className="p-5">
    //       <h3 className="text-xl font-semibold text-gray-400/90">
    //         Data Analysis
    //       </h3>
    //       <p className="mt-2 text-gray-700 leading-relaxed">
    //         Working with Excel and Power BI for data visualization Analyzing
    //         datasets (e.g., sales, sleep patterns)
    //       </p>
    //     </li>
    //   </ul>
    // </div>
  );
}
