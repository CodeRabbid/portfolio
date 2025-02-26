import { useEffect, useState } from "react";
import "./App.css";
import GitLogo from "./assets/git-logo.svg?react";
import LinkedInLogo from "./assets/linked-in-logo.svg?react";
import FacebookLogo from "./assets/facebook-logo.svg?react";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";

function App() {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    let hoverEffectContainer = document.querySelector(".hover-effect");
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
    <div className="hover-effect">
      <div className="app">
        <div className="header-and-main">
          <header>
            <div>
              <h1 className="name">Artyom Moskalew</h1>
              <h2 className="title">Full Stack Developer</h2>
              <p className="slogan">
                I develop fast, scalable and visually pleasant web experiences
                from front to back.
              </p>
              <nav>
                <ul>
                  <li className="about">
                    <a href="#about">
                      <span className="bullet"></span>
                      <span className="text">ABOUT</span>
                    </a>
                  </li>
                  <li className="experience">
                    <a href="#experience">
                      <span className="bullet"></span>
                      <span className="text">EXPERIENCE</span>
                    </a>
                  </li>
                  <li className="projects">
                    <a href="#projects">
                      <span className="bullet"></span>
                      <span className="text">PROJECTS</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <ul className="social-media">
              <li className="social-media-logo">
                <a href="https://github.com/CodeRabbid" target="_blank">
                  <GitLogo />
                </a>
              </li>
              <li className="social-media-logo">
                <a
                  href="https://www.linkedin.com/in/artyom-moskalew-6024b6123/"
                  target="_blank"
                >
                  <LinkedInLogo />
                </a>
              </li>
              <li className="social-media-logo">
                <a
                  href="https://www.facebook.com/artem.moskalew/"
                  target="_blank"
                >
                  <FacebookLogo />
                </a>
              </li>
            </ul>
          </header>
          <main id="content">
            <section id="about">
              <div className="section-header">ABOUT</div>
              <div className="content">
                <p className="passage">
                  I’m a developer passionate about building seamless, scalable,
                  and accessible full-stack applications that blend thoughtful
                  design with robust engineering. I thrive at the intersection
                  of front-end and back-end development, crafting experiences
                  that are not only visually engaging but also optimized for
                  performance, security, and maintainability.
                </p>
                <p className="passage">
                  In my previous role as a Senior Consultant Developer at
                  Thoughtworks, I designed, developed, and maintained software
                  systems across diverse environments. My work spanned front-end
                  development with React and Vue.js, back-end development with
                  Spring and Flask, database management with SQL, data
                  processing using the ELK stack and Terraforming on AWS, Azure,
                  and GCP.
                </p>
                <p className="passage">
                  I collaborated with clients from various industries, including
                  e-commerce, automotive, and big data analytics. Most of my
                  experience comes from working alongside the talented teams at
                  Thoughtworks and their clients. Through this, I gained a deep
                  appreciation for agile software development methodologies,
                  clean code, TDD, pair-programming and facilitating effective
                  group discussions.
                </p>
                <p className="passage">
                  Outside of work, I enjoy playing chess, reading, spending time
                  with my friends, and going for a run.
                </p>
              </div>
            </section>
            <ExperienceSection />
            <ProjectsSection />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
