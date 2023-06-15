import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div>
    <h2 className="text-yellow-400 font-black text-center md:text-6xl sm:text-5xl xs:text-4xl text-3xl">Skills</h2>
    <h3 className="sm:text-18 text-14 text-white uppercase tracking-wider text-center">TECHNOLOGIES</h3>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  </div>
  );
};

export default SectionWrapper(Tech, "");