import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollTop from "./components/ScrollTop";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
     <div
  className="min-h-screen transition-colors duration-500"
  style={{
    backgroundColor: "var(--bg-main)",
    color: "var(--text-normal)",
  }}
>
        <Navbar dark={dark} setDark={setDark} />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ScrollTop />
      </div>
    </div>
  );
}

export default App;