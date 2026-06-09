import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Resume from "../assets/resume.pdf";
import ResumePierreBarba from "../assets/ResumePierreBarba.pdf";
import ResumeEspañol from "../assets/ResumeEspañol.pdf";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Jean Pierre Barba",
          from_email: form.email,
          to_email: "magpe02@hotmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-10 flex xl:flex-row flex-col-reverse gap-5 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] border-double border-8 border-white hover:border-double bg-black p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 flex flex-col gap-6'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Your name."
              className='border border-2 border-white hover:border-double bg-black py-4 px-6 placeholder:text-gray-300 text-white rounded-lg outline-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Your email address"
              className='border border-2 border-white bg-black hover:border-double py-4 px-6 placeholder:text-gray-300 text-white rounded-lg outline-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={3}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Leave a message'
              className='border border-2 border-white bg-black hover:border-double py-4 px-6 placeholder:text-gray-300 text-white rounded-lg outline-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='border border-2 border-white bg-black hover:border-double py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3">
              <a
                href={Resume}
                download
                className="bg-black border-2 border-white rounded-2xl p-4 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
              >
                <div className="text-5xl mb-3">📄</div>
                <h3 className="text-white font-bold text-lg">
                  Resume
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  English Version
                </p>
              </a>
              <a
                href={ResumeEspañol}
                download
                className="bg-black border-2 border-white rounded-2xl p-4 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
              >
                <div className="text-5xl mb-3">📄</div>
                <h3 className="text-white font-bold text-lg">
                  CV Español
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Versión en Español
                </p>
              </a>
              <a
                href={ResumePierreBarba}
                download
                className="bg-black border-2 border-white rounded-2xl p-4 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
              >
                <div className="text-5xl mb-3">📄</div>
                <h3 className="text-white font-bold text-lg">
                  CV con Foto
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Español + Portfolio Photo
                </p>
              </a>
            </div>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");