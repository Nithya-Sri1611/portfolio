import { motion } from "framer-motion";

export default function About() {
  return (
 <section
  id="about"
    className="min-h-screen flex items-center justify-center
             bg-blue-100 dark:bg-gray-900
             transition-colors duration-500 "
  
>
  <div className="max-w-4xl mx-auto text-center" >
   <h2 className="text-5xl font-bold mb-14 text-indigo-900 dark:text-[#831DC6]">
  About Me
</h2>

    <h2
  className="max-w-3xl mx-auto text-center text-black dark:text-white"
  
>
  I am a Computer Science Engineering student and a passionate MERN Stack Intern with a strong interest in frontend development. I enjoy building responsive, user-friendly web applications that combine clean design with smooth user interactions.<br /><br /> I have hands-on experience with React, JavaScript, and modern UI frameworks like Tailwind CSS. I am continuously learning new technologies and improving my skills to create scalable and high-quality web solutions.

</h2>
  </div>
</section>
  );
}