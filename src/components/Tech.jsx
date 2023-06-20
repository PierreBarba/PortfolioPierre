import React from "react";
import { technologies } from "../constants/index";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";


const Tech = () => {
  return (
    <div>
  <h2 className="text-yellow-400 font-black text-center md:text-6xl sm:text-5xl xs:text-4xl text-3xl">Skills</h2>
  <h3 className="text-sm text-white uppercase tracking-wider text-center my-4">TECHNOLOGIES</h3>
  <div className="flex flex-row flex-wrap justify-center gap-10 ">
    {technologies.map((technology) => (
      <div
      className="w-28 h-34 hover:border-solid border-double border-4 border-black bg-white rounded-[20px] hover:border-double-black"
      key={technology.name}
    >
        <div>
          <img src={technology.icon} alt={technology.name} />
        </div>
      </div>
    ))}
  </div>
  <h3 className="mt-4 text-yellow-400 font-black text-center md:text-4xl sm:text-3xl xs:text-2xl text-xl">Soft Skills</h3>
  <div className="mt-4 flex flex-row flex-wrap justify-center gap-10 ">
  <h4 className="text-center w-32 h-34 hover:border-solid border-double border-4 border-white bg-black rounded-[12px] hover:border-double-black ">Leadership</h4>
  <h4 className="text-center w-32 h-34 hover:border-solid border-double border-4 border-white bg-black rounded-[12px] hover:border-double-black ">Deep work</h4>
  <h4 className="text-center w-32 h-34 hover:border-solid border-double border-4 border-white bg-black rounded-[12px] hover:border-double-black ">Project Management</h4>
  <h4 className="text-center w-32 h-34 hover:border-solid border-double border-4 border-white bg-black rounded-[12px] hover:border-double-black ">Pair programming</h4>
  <h4 className="text-center w-32 h-34 hover:border-solid border-double border-4 border-white bg-black rounded-[12px] hover:border-double-black ">Time management</h4>
  <h4 className="text-center w-32 h-34 hover:border-solid border-double border-4 border-white bg-black rounded-[12px] hover:border-double-black ">Team Work</h4>
  <h4 className="text-center w-32 h-34 hover:border-solid border-double border-4 border-white bg-black rounded-[12px] hover:border-double-black ">Self-Driven learning</h4>
  </div>
</div>

  );
};

export default SectionWrapper(Tech, "");
