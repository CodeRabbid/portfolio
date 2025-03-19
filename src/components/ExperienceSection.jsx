import Arrow from "../assets/arrow.svg?react";
import resume from "../assets/resume.pdf";

export default function ExperienceSection() {
  return (
    <section id="experience">
      <div className="section-header">EXPERIENCE</div>
      <div className="content">
        <ol>
          <li className="experience">
            <div className="grid">
              <div className="dates">2019 - 2023</div>
              <div className="description">
                <h3 className="current-position">
                  <div className="header-link">
                    <a href="https://www.klaviyo.com/" target="_blank">
                      <span>Senior Consultant Developer · ThoughtWorks</span>
                      <span className="arrow">
                        <Arrow fill="white" />
                      </span>
                    </a>
                  </div>
                </h3>
                <p className="passage">
                  Develop Software for clients in various fields, like
                  Automotive, eCommerce and Big Data. Taking the role of a
                  Fullstack Engineer and Data Engineer.
                </p>
                <ul className="chips">
                  <li>
                    <div className="chip">TypeScript</div>
                  </li>
                  <li>
                    <div className="chip">ReactTS</div>
                  </li>
                  <li>
                    <div className="chip">Java</div>
                  </li>
                  <li>
                    <div className="chip">Spring Boot</div>
                  </li>
                  <li>
                    <div className="chip">python</div>
                  </li>
                  <li>
                    <div className="chip">TypeScript</div>
                  </li>
                  <li>
                    <div className="chip">flask</div>
                  </li>
                  <li>
                    <div className="chip">Storybook</div>
                  </li>
                  <li>
                    <div className="chip">AWS</div>
                  </li>
                  <li>
                    <div className="chip">Azure</div>
                  </li>
                  <li>
                    <div className="chip">GCP</div>
                  </li>
                  <li>
                    <div className="chip">GoLang</div>
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
  );
}
