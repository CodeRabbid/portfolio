import { useEffect, useState } from "react";
import "./App.css";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import AboutSection from "./components/AboutSection";
import Header from "./components/Header";

function App() {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    let hoverEffectContainer = document.querySelector(".spotlight");
    const handleMouseMove = (e) => {
      if (window.innerWidth > 640) {
        let x = e.clientX;
        let y = e.clientY;
        hoverEffectContainer.style.setProperty("--x", x + "px");
        hoverEffectContainer.style.setProperty("--y", y + "px");
      }
    };
    hoverEffectContainer.addEventListener("mousemove", handleMouseMove);

    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav ul li");

    const handleScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY > sectionTop - 200) {
          setCurrentSection(section.getAttribute("id"));
        }
      });
      navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(currentSection)) {
          li.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      hoverEffectContainer.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="spotlight">
      <div className="app">
        <div className="header-and-main">
          <Header />
          <main id="content">
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
