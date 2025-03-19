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
                  BankDash is a purely frontend project, that showcases how I
                  can convert a figma file into a react frontend app, keeping
                  the desing as close as possible to the UI/UX Designer's idea.
                </p>
                <ul className="chips">
                  <li>
                    <div className="chip">ReactJS</div>
                  </li>
                  <li>
                    <div className="chip">HTML & SCSS</div>
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
          {/* <li className="experience">
            <div className="grid">
              <div className="image">
                <img
                  src="https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&w=256&q=75"
                  onClick={() => {
                    setVideoLink(
                      "https://www.youtube.com/embed/cw21m2S5PXQ?si=yITS1ls9KPlyfsJm"
                    );
                    setShowVideo(true);
                  }}
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
                  Video course that teaches how to build a web app with the
                  Spotify Web API. Topics covered include the principles of REST
                  APIs, user auth flows, Node, Express, React, Styled
                  Components, and more.
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
          </li> */}
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
            title="How To Design A Popup YouTube Video Player Using HTML, CSS &amp; JavaScript (Part 1)"
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
