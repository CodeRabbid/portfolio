import { useEffect, useState } from "react";
import "./App.css";
import resume from "./assets/resume.pdf";
import Arrow from "./assets/arrow.svg?react";
import GitLogo from "./assets/git-logo.svg?react";
import LinkedInLogo from "./assets/linked-in-logo.svg?react";
import FacebookLogo from "./assets/facebook-logo.svg?react";

function App() {
  const [currentSection, setCurrentSection] = useState("");
  const [showVideo, setShowVideo] = useState(false);

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
            <section id="experience">
              <div className="section-header">EXPERIENCE</div>
              <div className="content">
                <ol>
                  <li className="experience">
                    <div className="grid">
                      <div className="dates">2024 - PRESENT</div>
                      <div className="description">
                        <h3 className="current-position">
                          <div className="header-link">
                            <a href="https://www.klaviyo.com/" target="_blank">
                              <span>
                                Senior Frontend Engineer, Accessibility ·
                                Klaviyo
                              </span>
                              <span className="arrow">
                                <Arrow fill="white" />
                              </span>
                            </a>
                          </div>
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
                          <div className="header-link">
                            <a href="https://upstatement.com/" target="_blank">
                              <span>Lead Engineer · Upstatement</span>
                              <span className="arrow">
                                <Arrow />
                              </span>
                            </a>
                          </div>
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
                  <div className="header-link">
                    <a href={resume} target="_blank">
                      <span>View Full Résumé</span>
                      <span className="arrow">
                        <Arrow />
                      </span>
                    </a>
                  </div>
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
                          <div className="header-link">
                            <a
                              href="https://www.newline.co/courses/build-a-spotify-connected-app"
                              target="_blank"
                            >
                              <span>Build a Spotify Connected App</span>
                              <span className="arrow">
                                <Arrow />
                              </span>
                            </a>
                          </div>
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
                        <img
                          src="https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&w=256&q=75"
                          onClick={() => setShowVideo(true)}
                        />
                      </div>
                      <div className="description">
                        <h3 className="current-position">
                          <div className="header-link">
                            <a
                              href="https://spotify-profile.herokuapp.com/"
                              target="_blank"
                            >
                              <span>Spotify Profile</span>
                              <span className="arrow">
                                <Arrow />
                              </span>
                            </a>
                          </div>
                        </h3>
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
              <div
                class={`youtube-player-overlay ${showVideo ? "active" : ""}`}
                onClick={() => {
                  setShowVideo(false);
                }}
              >
                <div class="youtube-player-popup">
                  <iframe
                    src="https://www.youtube.com/embed/0EEJM4S5w38"
                    title="How To Design A Popup YouTube Video Player Using HTML, CSS &amp; JavaScript (Part 1)"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
