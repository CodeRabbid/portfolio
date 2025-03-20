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
              <div className="dates">2022 - 2023</div>
              <div className="description">
                <h3 className="current-position">
                  <div className="header-link">
                    <a
                      href="https://www.thoughtworks.com/de-de"
                      target="_blank"
                    >
                      <span>Senior Data Engineer · ThoughtWorks</span>
                      <span className="arrow">
                        <Arrow fill="white" />
                      </span>
                    </a>
                  </div>
                </h3>
                <p className="passage">
                  As Senior Consultant in Data Engineering in the field Big
                  Data, maintained a Analysis-Platform for moving and analysing
                  large amount of data in python. All infrastructure was managed
                  according to IaC.
                </p>
                <ul className="chips">
                  <li>
                    <div className="chip">python</div>
                  </li>
                  <li>
                    <div className="chip">PubSub</div>
                  </li>
                  <li>
                    <div className="chip">BiqQuery</div>
                  </li>
                  <li>
                    <div className="chip">SQL</div>
                  </li>
                  <li>
                    <div className="chip">GCP</div>
                  </li>
                  <li>
                    <div className="chip">Terraform</div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="experience">
            <div className="grid">
              <div className="dates">2022</div>
              <div className="description">
                <h3 className="current-position">
                  <div className="header-link">
                    <a
                      href="https://www.thoughtworks.com/de-de"
                      target="_blank"
                    >
                      <span>Senior Consultant Developer · ThoughtWorks</span>
                      <span className="arrow">
                        <Arrow fill="white" />
                      </span>
                    </a>
                  </div>
                </h3>
                <p className="passage">
                  As a Fullstack Developer, maintained a software solution for
                  monitoring of machinery in the field of warehouse management.
                </p>
                <ul className="chips">
                  <li>
                    <div className="chip">ReactTS</div>
                  </li>
                  <li>
                    <div className="chip">TypeScript</div>
                  </li>
                  <li>
                    <div className="chip">HTML & CSS</div>
                  </li>
                  <li>
                    <div className="chip">GraphQL</div>
                  </li>
                  <li>
                    <div className="chip">GoLang</div>
                  </li>
                  <li>
                    <div className="chip">ProstgreSQL</div>
                  </li>
                  <li>
                    <div className="chip">AWS</div>
                  </li>
                  <li>
                    <div className="chip">Terraform</div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="experience">
            <div className="grid">
              <div className="dates">2020 - 2021</div>
              <div className="description">
                <h3 className="current-position">
                  <div className="header-link">
                    <a
                      href="https://www.thoughtworks.com/de-de"
                      target="_blank"
                    >
                      <span>Consultant Developer · ThoughtWorks</span>
                      <span className="arrow">
                        <Arrow fill="white" />
                      </span>
                    </a>
                  </div>
                </h3>
                <p className="passage">
                  As a Fullstack-Developer, maintained a new software solution
                  for a large Automotive company, enabling ETL process from the
                  cars to the cloud. Infrastructure managed according to IaC
                  principles.
                </p>
                <ul className="chips">
                  <li>
                    <div className="chip">VueJS</div>
                  </li>
                  <li>
                    <div className="chip">HTML & CSS</div>
                  </li>
                  <li>
                    <div className="chip">GoLang</div>
                  </li>
                  <li>
                    <div className="chip">Elasticsearch</div>
                  </li>
                  <li>
                    <div className="chip">Kibana</div>
                  </li>
                  <li>
                    <div className="chip">Logstash</div>
                  </li>
                  <li>
                    <div className="chip">Azure</div>
                  </li>
                  <li>
                    <div className="chip">Terraform</div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="experience">
            <div className="grid">
              <div className="dates">2019 - 2020</div>
              <div className="description">
                <h3 className="current-position">
                  <div className="header-link">
                    <a
                      href="https://www.thoughtworks.com/de-de"
                      target="_blank"
                    >
                      <span>Graduate Consultant Developer · ThoughtWorks</span>
                      <span className="arrow">
                        <Arrow fill="white" />
                      </span>
                    </a>
                  </div>
                </h3>
                <p className="passage">
                  As a Fullstack-Developer, developed and maintained a new
                  software solution for data analysis of a large eCommerce
                  company.
                </p>
                <ul className="chips">
                  <li>
                    <div className="chip">ReactTS</div>
                  </li>
                  <li>
                    <div className="chip">TypeScript</div>
                  </li>
                  <li>
                    <div className="chip">HTML & CSS</div>
                  </li>
                  <li>
                    <div className="chip">Java</div>
                  </li>
                  <li>
                    <div className="chip">Spring Boot</div>
                  </li>
                  <li>
                    <div className="chip">Kubernetes</div>
                  </li>
                  <li>
                    <div className="chip">AWS</div>
                  </li>
                  <li>
                    <div className="chip">PostgreSQL</div>
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
