import { motion } from "framer-motion";
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#B2140B]' />
          <div className='w-1 sm:h-60 h-40 bg-gradient-to-b from-[#B2140B] to-white' />
        </div>

        <div> 
          <h1 className="font-black text-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-black">
            Hello, I'm <span className='text-[#B2140B]'>Pierre</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-black">
          Welcome to my web developer portfolio!  <br className='sm:block hidden' />
          I hope you find in my skills what you're looking for to enhance your project.
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-white mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;