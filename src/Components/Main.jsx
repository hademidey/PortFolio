import { Phone } from "lucide-react";
import CVSection from "./CVSection";
import { Link } from "react-router";

export default function Main() {
  return (
    <div className="w-full flex mt-5 md:px-55 px-2 flex-col md:flex-row justify-center items-center overflow-hidden">
      <div className="md:w-1/2 flex justify-center relative items-center ">
        <div className="md:bg-blue-500/70 w-full absolute -z-10 rounded-full"></div>
        <div className="w-[350px] h-[350px] md:h-[500px] md:w-[500px] -z-10 mx-auto bg-gray-600/50 object-cover rounded-full fading-in md:border-blue-500">
          <img
            src="img/image.png"
            alt=""
            className="w-full h-full object-cover object-center slide-in-four"
          />
        </div>
      </div>

      <div className=" md:w-1/2 flex mt-14 flex-col justify-center items-center slide-in-three">
        <span className="md:text-2xl font-semibold text-xl  text-gray-500">
          Hello, I'm
        </span>
        <span className="md:text-6xl font-semibold text-3xl flex items-center ">
          Alase Samuel
        </span>
        <span className="md:text-3xl md:mt-10  text-3xl text-gray-500 font-bold">
          Frontend Developer
        </span>
        {/* <p className="md:text-2xl   ">
          High level experience in web design and development knownledge,
          producing quality work.
        </p> */}
        <div className="flex justify-center items-center gap-3">
          <button className="md:text-xl mt-10 py-2 px-3 rounded-4xl flex text-black items-center justify-between border gap-2 font-semibold">
            <CVSection />
          </button>

          <Link
            to="/contact"
            className="md:text-xl mt-10  py-2 px-5 rounded-4xl flex text-black items-center justify-between gap-2 border font-semibold"
          >
           <Phone/> <span>Contact Info</span>
          </Link>
        </div>

        {/* <div className="flex justify-center items-center mt-2 text-3xl gap-3 text-gray-500">
          <FaLinkedin />
          <BsGithub />
        </div> */}
      </div>
    </div>
  );
}

{
  /* <LuNavigation className="text-white" /> */
}
