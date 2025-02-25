import { useEffect, useState } from "react";
import "./App.css";
import resume from "./assets/resume.pdf";
import Arrow from "./assets/arrow.svg?react";
import GitLogo from "./assets/git-logo.svg?react";
import LinkedInLogo from "./assets/linked-in-logo.svg?react";
import FacebookLogo from "./assets/facebook-logo.svg?react";

function App() {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    let hoverEffectContainer = document.querySelector(".hover-effect");
    const handleMouseMove = (e) => {
      let x = e.clientX;
      let y = e.clientY;
      hoverEffectContainer.style.setProperty("--x", x + "px");
      hoverEffectContainer.style.setProperty("--y", y + "px");
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
                I develop fast, accessible and visually pleasant web experiences
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
                  I’m a developer passionate about crafting accessible,
                  pixel-perfect user interfaces that blend thoughtful design
                  with robust engineering. My favorite work lies at the
                  intersection of design and development, creating experiences
                  that not only look great but are meticulously built for
                  performance and usability.
                </p>
                <p className="passage">
                  Currently, I'm a Senior Front-End Engineer at Klaviyo,
                  specializing in accessibility. I contribute to the creation
                  and maintenance of UI components that power Klaviyo’s
                  frontend, ensuring our platform meets web accessibility
                  standards and best practices to deliver an inclusive user
                  experience.
                </p>
                <p className="passage">
                  In the past, I've had the opportunity to develop software
                  across a variety of settings — from advertising agencies and
                  large corporations to start-ups and small digital product
                  studios. Additionally, I also released a comprehensive video
                  course a few years ago, guiding learners through building a
                  web app with the Spotify API.
                </p>
                <p className="passage">
                  In my spare time, I’m usually climbing, reading, hanging out
                  with my wife and two cats, or running around Hyrule searching
                  for Korok seeds.
                </p>
              </div>
            </section>
            <section id="experience">
              <div className="section-header">EXPERIENCE</div>
              <div className="content">
                <ol>
                  <li className="experience">
                    <div className="grid">
                      <div className="dates">2024 - PRESENT</div>
                      <div className="description">
                        <h3 className="current-position">
                          Senior Frontend Engineer, Accessibility · Klaviyo
                        </h3>
                        <p className="passage">
                          Build, style, and ship high-quality websites, design
                          systems, mobile apps, and digital experiences for a
                          diverse array of projects for clients including
                          Harvard Business School, Everytown for Gun Safety,
                          Pratt Institute, Koala Health, Vanderbilt University,
                          The 19th News, and more. Provide leadership within
                          engineering department through close collaboration,
                          knowledge shares, and spearheading the development of
                          internal tools.
                        </p>
                        <ul className="chips">
                          <li>
                            <div className="chip">JavaScript</div>
                          </li>
                          <li>
                            <div className="chip">TypeScript</div>
                          </li>
                          <li>
                            <div className="chip">React</div>
                          </li>
                          <li>
                            <div className="chip">Storybook</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="experience">
                    <div className="grid">
                      <div className="dates">2018 — 2024</div>
                      <div className="description">
                        <h3 className="current-position">
                          Lead Engineer · Upstatement
                        </h3>
                        <h3 className="previous-position">Senior Engineer</h3>
                        <h3 className="previous-position">Engineer</h3>
                        <p className="passage">
                          Build and maintain critical components used to
                          construct Klaviyo’s frontend, across the whole
                          product. Work closely with cross-functional teams,
                          including developers, designers, and product managers,
                          to implement and advocate for best practices in web
                          accessibility.
                        </p>
                        <ul className="chips">
                          <li>
                            <div className="chip">JavaScript</div>
                          </li>
                          <li>
                            <div className="chip">TypeScript</div>
                          </li>
                          <li>
                            <div className="chip">HTML & SCSS</div>
                          </li>
                          <li>
                            <div className="chip">React</div>
                          </li>
                          <li>
                            <div className="chip">Next.js</div>
                          </li>
                          <li>
                            <div className="chip">React Native</div>
                          </li>
                          <li>
                            <div className="chip">WordPress</div>
                          </li>
                          <li>
                            <div className="chip">Contentful</div>
                          </li>
                          <li>
                            <div className="chip">Node.js</div>
                          </li>
                          <li>
                            <div className="chip">PHP</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ol>
                <div className="resume">
                  <a href={resume} target="blank">
                    <span>View Full Résumé</span>
                    <span className="arrow">
                      <Arrow fill="white" />
                    </span>
                  </a>
                </div>
              </div>
            </section>
            <section id="projects">
              <div className="section-header">PROJECTS</div>
              <div className="content">
                <ul className="experiences">
                  <li className="experience">
                    <div className="grid">
                      <div className="image">
                        <img src="https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=256&q=75" />
                      </div>
                      <div className="description">
                        <h3 className="current-position">
                          Build a Spotify Connected App
                        </h3>
                        <p className="passage">
                          Video course that teaches how to build a web app with
                          the Spotify Web API. Topics covered include the
                          principles of REST APIs, user auth flows, Node,
                          Express, React, Styled Components, and more.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="experience">
                    <div className="grid">
                      <div className="image">
                        <img src="https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&w=256&q=75" />
                      </div>
                      <div className="description">
                        <h3 className="current-position">Spotify Profile</h3>
                        <p className="passage">
                          Video course that teaches how to build a web app with
                          the Spotify Web API. Topics covered include the
                          principles of REST APIs, user auth flows, Node,
                          Express, React, Styled Components, and more.
                        </p>
                        <ul className="chips">
                          <li>
                            <div className="chip">React</div>
                          </li>
                          <li>
                            <div className="chip">Express</div>
                          </li>
                          <li>
                            <div className="chip">HTML & SCSS</div>
                          </li>
                          <li>
                            <div className="chip">Spotify API</div>
                          </li>
                          <li>
                            <div className="chip">Heroku</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
