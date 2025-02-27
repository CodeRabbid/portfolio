import { useEffect } from "react";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import AboutSection from "./components/AboutSection";
import Header from "./components/Header";

function App() {
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

    return () => {
      hoverEffectContainer.removeEventListener("mousemove", handleMouseMove);
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
