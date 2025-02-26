import { useState } from "react";
import Arrow from "../assets/arrow.svg?react";

export default function ProjectsSection() {
  const [showVideo, setShowVideo] = useState(false);
  const [videoLink, setVideoLink] = useState("");

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
              <div className="image">
                <img
                  src="https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=256&q=75"
                  onClick={() => {
                    setVideoLink(
                      "https://www.youtube.com/embed/ArVBZZpRVok?si=xsW_QjrYPos325qz"
                    );
                    setShowVideo(true);
                  }}
                />
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
                  Video course that teaches how to build a web app with the
                  Spotify Web API. Topics covered include the principles of REST
                  APIs, user auth flows, Node, Express, React, Styled
                  Components, and more.
                </p>
              </div>
            </div>
          </li>
          <li className="experience">
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
          </li>
        </ul>
      </div>
      <div
        class={`youtube-player-overlay ${showVideo ? "active" : ""}`}
        onClick={() => {
          stopAllYouTubeVideos();
          setShowVideo(false);
        }}
      >
        <div class="youtube-player-popup">
          <iframe
            src={videoLink}
            title="How To Design A Popup YouTube Video Player Using HTML, CSS &amp; JavaScript (Part 1)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
