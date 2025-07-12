import { useEffect, useState } from 'react';
import { MdOutlineMail } from "react-icons/md";

export default function Navbar() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100); 
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 bg-white px-6 py-4 shadow transition-transform duration-700 ease-out ${
        loaded ? 'translate-y-0' : '-translate-y-40'
      }`}
    >
      <div className="flex justify-between items-center px-10">
        {/* <h1 className="text-xl font-bold text-blue-500">ALASE SAMUEL ADEMIDE</h1> */}
        {/* <ul className="flex space-x-6 text-blue-500 font-medium">
          <li className="hover:text-blue-700 transition duration-300 cursor-pointer">Home</li>
          <li className="hover:text-blue-700 transition duration-300 cursor-pointer">About</li>
          <li className="hover:text-blue-700 transition duration-300 cursor-pointer">Contact</li>
          <li className="hover:text-blue-700 transition duration-300 cursor-pointer">Portfolio</li> */}

        {/* </ul> */}
        <div className='flex justify-center items-center gap-2  font-semibold text-2xl'> 
        Alase Samuel 
        </div>
        
      </div>
    </nav>
  );
}




































// import React from "react";

// export default function Navbar() {
//   return (
//     <nav className="flex justify-between px-10 mt-5 py-4 ">
//       <span className="text-2xl text-blue-600">ALASE SAMUEL ADEMIDE</span>
//       <div>
//         <ul className="flex justify-center gap-10 text-blue-600 ">
//           <li>Home</li>
//           <li>About</li>
//           <li>Skills</li>
//           <li>Services</li>
//           <li>Portfolio</li>
//           <li>Contact Me</li>
//         </ul>
//       </div>
//     </nav>
//   );
// }


