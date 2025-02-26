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
              <div className="dates">2024 - PRESENT</div>
              <div className="description">
                <h3 className="current-position">
                  <div className="header-link">
                    <a href="https://www.klaviyo.com/" target="_blank">
                      <span>
                        Senior Frontend Engineer, Accessibility · Klaviyo
                      </span>
                      <span className="arrow">
                        <Arrow fill="white" />
                      </span>
                    </a>
                  </div>
                </h3>
                <p className="passage">
                  Build, style, and ship high-quality websites, design systems,
                  mobile apps, and digital experiences for a diverse array of
                  projects for clients including Harvard Business School,
                  Everytown for Gun Safety, Pratt Institute, Koala Health,
                  Vanderbilt University, The 19th News, and more. Provide
                  leadership within engineering department through close
                  collaboration, knowledge shares, and spearheading the
                  development of internal tools.
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
                  Build and maintain critical components used to construct
                  Klaviyo’s frontend, across the whole product. Work closely
                  with cross-functional teams, including developers, designers,
                  and product managers, to implement and advocate for best
                  practices in web accessibility.
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
  );
}
