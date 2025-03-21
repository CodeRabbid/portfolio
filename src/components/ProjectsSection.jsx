import { useState } from "react";
import Arrow from "../assets/arrow.svg?react";

export default function ProjectsSection() {
  const [showVideo, setShowVideo] = useState(false);
  const [videoLink, setVideoLink] = useState(null);

  var stopAllYouTubeVideos = () => {
    var iframe = document.querySelector("iframe");
    if (iframe) {
      var iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    }
  };
  return (
    <section id="projects">
      <div className="section-header">PROJECTS</div>
      <div className="content">
        <ul className="experiences">
          <li className="experience">
            <div className="grid">
              <div
                className="image"
                style={{ position: "relative" }}
                onClick={() => {
                  setVideoLink(
                    "https://www.youtube.com/embed/N81X1tuclp0?si=611ql07kKxmUMTmX"
                  );
                  setShowVideo(true);
                }}
              >
                <img src="https://res.cloudinary.com/dqckq3bjr/image/upload/v1742419579/aiBook_kgbkil.png" />
              </div>
              <div className="description">
                <h3 className="current-position">
                  <div className="header-link">
                    <a href="https://ai-book-kappa.vercel.app/" target="_blank">
                      <span>
                        aiBook - Social Media for AI - Full-Stack project
                      </span>
                      <span className="arrow">
                        <Arrow />
                      </span>
                    </a>
                  </div>
                </h3>
                <p className="passage">
                  aiBook is a full-stack project built with Next.js, designed as
                  a social media platform for AI-generated content. Users can
                  create stories chapter by chapter, complemented by
                  AI-generated images. Even the comments can be AI-generated!
                  It's a fun and engaging experience — give it a try!
                </p>
                <ul className="chips">
                  <li>
                    <div className="chip">NextJS</div>
                  </li>
                  <li>
                    <div className="chip">TypeScript</div>
                  </li>
                  <li>
                    <div className="chip">Tailwind</div>
                  </li>
                  <li>
                    <div className="chip">OpenAI API</div>
                  </li>
                  <li>
                    <div className="chip">Gemini API</div>
                  </li>
                  <li>
                    <div className="chip">Vercel</div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="experience">
            <div className="grid">
              <div
                className="image"
                style={{ position: "relative" }}
                onClick={() => {
                  setVideoLink(
                    "https://www.youtube.com/embed/-F-SddMEUGg?si=5YGkiSsjSib_mVkt"
                  );
                  setShowVideo(true);
                }}
              >
                <img src="https://res.cloudinary.com/dqckq3bjr/image/upload/v1742502328/Group_4_rnsgut.png" />
              </div>
              <div className="description">
                <h3 className="current-position">
                  <div className="header-link">
                    <a
                      href="https://finger-game-l8ue.onrender.com"
                      target="_blank"
                    >
                      <span>FingerGame - a Full-stack real-time project</span>
                      <span className="arrow">
                        <Arrow />
                      </span>
                    </a>
                  </div>
                </h3>
                <p className="passage">
                  Finger Game is a real-time, full-stack mobile browser game
                  where players challenge each other by placing dots randomly on
                  the screen. The opponent must then place their fingers on the
                  dots simultaneously to complete the challenge.
                </p>
                <ul className="chips">
                  <li>
                    <div className="chip">ReactJS</div>
                  </li>
                  <li>
                    <div className="chip">HTML & CSS</div>
                  </li>
                  <li>
                    <div className="chip">JavaScript</div>
                  </li>
                  <li>
                    <div className="chip">socket.io</div>
                  </li>
                  <li>
                    <div className="chip">Render</div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="experience">
            <div className="grid">
              <div
                className="image"
                style={{ position: "relative" }}
                onClick={() => {
                  setVideoLink(
                    "https://www.youtube.com/embed/eWuJYR6CtHo?si=CCSxxkAWBoR4uTvX"
                  );
                  setShowVideo(true);
                }}
              >
                <img src="https://res.cloudinary.com/dqckq3bjr/image/upload/v1742414040/BankDash_soqhmb.png" />
              </div>
              <div className="description">
                <h3 className="current-position">
                  <div className="header-link">
                    <a
                      href="https://coderabbid.github.io/bank-dash/#/"
                      target="_blank"
                    >
                      <span>BankDash - a Frontend project</span>
                      <span className="arrow">
                        <Arrow />
                      </span>
                    </a>
                  </div>
                </h3>
                <p className="passage">
                  BankDash is a purely front-end project that demonstrates my
                  ability to convert a Figma design into a React application
                  while maintaining the original UI/UX as accurately as
                  possible.
                </p>
                <ul className="chips">
                  <li>
                    <div className="chip">ReactJS</div>
                  </li>
                  <li>
                    <div className="chip">HTML & CSS</div>
                  </li>
                  <li>
                    <div className="chip">JavaScript</div>
                  </li>
                  <li>
                    <div className="chip">ChartJS</div>
                  </li>
                  <li>
                    <div className="chip">GitHub Pages</div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div
        className={`youtube-player-overlay ${showVideo ? "active" : ""}`}
        onClick={() => {
          stopAllYouTubeVideos();
          setShowVideo(false);
        }}
      >
        <div className="youtube-player-popup">
          <iframe
            src={videoLink}
            title=""
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
