import { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const sections = ["home", "about", "skills", "projects", "contact"];

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("home");

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  // ✅ Scroll spy (fixed & reliable)
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((sec) => {
        const section = document.getElementById(sec);
        if (!section) return;

        const offsetTop = section.offsetTop - 120;
        const offsetHeight = section.offsetHeight;
        const scrollY = window.scrollY;

        if (
          scrollY >= offsetTop &&
          scrollY < offsetTop + offsetHeight
        ) {
          current = sec;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-indigo-900 dark:bg-[#831DC6] backdrop-blur z-50 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        <h1 className="font-bold text-3xl text-white">Nithya Sri</h1>

        <div className="hidden md:flex gap-10 text-xl font-bold">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              onClick={() => setActive(sec)} // ✅ FIX
              className={`
                capitalize relative transition duration-300
                ${active === sec ? "text-white" : "text-indigo-200 hover:text-white dark:text-black  "}
                
              `}
            >
              {sec}

              {/* underline */}
              <span
                className={`
                  absolute left-0 -bottom-1 h-[3px] w-full bg-white
                  transition-transform duration-300 origin-left
                  ${active === sec ? "scale-x-100" : "scale-x-0 hover:scale-x-100"}
                `}
              ></span>
            </a>
          ))}
        </div>

        <button
          onClick={toggleTheme}
           className="
  bg-white dark:bg-white
  text-3xl
  text-blue-600
  dark:text-[#831DC6]
  hover:text-blue-500
  dark:hover:text-[#831DC6]
  transition
  rounded-full p-2
"
        >
          {dark ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </nav>
  );
}