import React from "react";

function Projects() {
  return (
    <section
      id="projects"
      className="
        min-h-screen
        flex items-center justify-center
        py-20 px-6
        bg-blue-100 dark:bg-gray-900
        transition-colors duration-300
      "
    >
      {/* CENTER WRAPPER */}
      <div className="w-full text-center">

        {/* Heading */}
        
          <h2 className="text-5xl font-bold mb-12 text-indigo-900 dark:text-[#831DC6]">
          Projects
        </h2>

        <div className="w-20 h-1 mx-auto mb-12 rounded-full"></div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {[
            {
              title: "Task Management System",
              description:
                "A MERN stack CRUD application to manage daily tasks efficiently.",
              tech: "● React ● Node ● MongoDB",
            },
            {
              title: "LMS Dashboard",
              description:
                "React-based Learning Management System with progress tracking.",
              tech: "● React ● JavaScript",
            },
            {
              title: "Personal Portfolio",
              description:
                "A responsive and animated portfolio built with React.",
              tech: "● React ● Tailwind",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="
                p-6 rounded-xl text-black
                bg-white hover:bg-indigo-900 hover:text-white
                shadow-md hover:shadow-lg
                dark:shadow-purple-500/20
                transition-all duration-300
                hover:-translate-y-2
                

                dark:bg-[#0B0B10]
                dark:text-[#F5F5F7]
                dark:hover:bg-[#831DC6]
                dark:shadow-purple-500/20
              "
            >
              <h3 className="text-xl font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-l opacity-200 mb-4">
                {project.description}
              </p>
              <span className="text-m font-medium opacity-200">
                {project.tech}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default Projects; 