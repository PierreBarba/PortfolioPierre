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
</div>

  );
};

export default SectionWrapper(Tech, "");
