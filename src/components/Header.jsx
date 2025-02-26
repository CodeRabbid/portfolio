import GitLogo from "../assets/git-logo.svg?react";
import LinkedInLogo from "../assets/linked-in-logo.svg?react";
import FacebookLogo from "../assets/facebook-logo.svg?react";
import { useEffect, useState } from "react";

export default function Header() {
  const [currentSection, setCurrentSection] = useState("");
  useEffect(() => {
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
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <header>
      <div>
        <h1 className="name">Artyom Moskalew</h1>
        <h2 className="title">Full Stack Engineer</h2>
        <p className="slogan">
          I develop fast, scalable and engaging web experiences from front to
          back.
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
          <a href="https://www.facebook.com/artem.moskalew/" target="_blank">
            <FacebookLogo />
          </a>
        </li>
      </ul>
    </header>
  );
}
