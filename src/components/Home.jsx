import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope,FaPhoneAlt } from "react-icons/fa";
import  {FiDownload} from "react-icons/fi";
import { GiH2O } from "react-icons/gi";
import { HiH2 } from "react-icons/hi2";
import { RiH3 } from "react-icons/ri";
const iconClass =
  "bg-white dark:bg-white text-3xl text-gray-600 dark:text-black hover:text-blue-500 dark:hover:text-[#831DC6] transition rounded-full p-2";

export default function Home() {

  return (
<section
  id="home"
  className="min-h-screen flex items-center justify-center
             bg-blue-100 dark:bg-gray-900
             transition-colors duration-500 border-2 border-blue-400 dark:border-gray-700"
>
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
       <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
  Hi, I'm <span className="text-indigo-500 dark:text-[#831DC6]  ">Nithya Sri</span>
</h1>

<h2 className="text-xl md:text-2xl text-black dark:text-white mb-6 opacity-200">
  Web Development Intern | React Developer
</h2>

<h2 className="max-w-xl text-black dark:text-white mb-8 leading-relaxed opacity-200">
  A motivated MERN Stack Intern and React Developer focused on creating scalable, responsive, and visually appealing web applications. 
  I enjoy transforming ideas into real-world productrs with clean UI and smooth user interactions. 
</h2>

  
<a
  href="/NithyaSri_Resume.pdf"
  download
  className="
    inline-flex items-center gap-2
    px-6 py-3
    font-medium
    rounded-full
    transition-all duration-300
    hover:scale-105

    /* Light mode */
    bg-indigo-600 hover:bg-indigo-700 text-white shadow-md

    /* Dark mode – soft purple */
    dark:bg-[#831DC6]
    dark:text-[#F5F5F7]
    dark:hover:bg-[#9B3DF5]
    dark:shadow-md
    dark:shadow-purple-500/20
  "
>
  <FiDownload className="text-lg" />
  Download Resume
</a>
<div className="mt-10 flex justify-center gap-10 text-3xl">

  <a href="https://github.com/Nithya-Sri1611" target="_blank" rel="noreferrer" className={iconClass}>
    <FaGithub />
  </a>

  <a href="https://www.linkedin.com/in/nithyasri-m9" target="_blank" rel="noreferrer" className={iconClass}>
    <FaLinkedin />
  </a>

  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nithyasrimuthuraja@gmail.com" target="_blank"
  rel="noopener noreferrer" aria-label="Send Email" className={iconClass}>
    <FaEnvelope />
  </a>

  <a href="tel:+918248517538" className={iconClass}>
    <FaPhoneAlt />
  </a>

</div>

        
      </motion.div>
    </section>
  );
}