import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { live } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_code_link_live,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 15,
          scale: 1,
          speed: 450,
        }}
        className='border-double border-8 border-white bg-black p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute-revert inset-0 flex justify-end m-3 card-img_hover gap-2'>
            <div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='border-double border-4 border-black hover:border-dashed bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >  
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
              </div>
            </div>
            
            <div
            onClick={() => window.open(source_code_link_live, "_blank")}
            className='border-double border-4 border-black hover:border-dashed bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={live}
                alt='live demo'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            </div>
        </div>

        <div className='mt-5'>
          <h3 className='mt-14 text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-white text-[14px] h-[200px]'>{description}</p>
        </div>
        <div className='mt-1 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-gray-300 text-[14px]`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-black text-base max-w-3xl leading-8'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className=' mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");