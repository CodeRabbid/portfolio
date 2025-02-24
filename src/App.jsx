import { useEffect, useState } from "react";
import "./App.css";

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
              <div className="name">Artyom Moskalew</div>
              <div className="title">Full-stack developer</div>
              <div className="status">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
                aliquid? Magnam, officiis sunt. Dolore saepe voluptatibus
                laboriosam, enim fuga, perferendis temporibus nobis soluta
                minima error odio excepturi ut voluptates sapiente!
              </div>
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
            <div className="social-media">Social Media</div>
          </header>
          <main>
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
                <div className="grid">
                  <div className="dates">2024 - PRESENT</div>
                  <div className="description">
                    <h3>Senior Frontend Engineer, Accessibility · Klaviyo</h3>
                    <p className="passage">
                      Build and maintain critical components used to construct
                      Klaviyo’s frontend, across the whole product. Work closely
                      with cross-functional teams, including developers,
                      designers, and product managers, to implement and advocate
                      for best practices in web accessibility.
                    </p>
                  </div>
                </div>
                Ad molestias numquam ut ea. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Dolore fugiat consequatur ad
                quidem sint dolorum deleniti fuga laudantium modi, laboriosam
                vel optio rem unde animi iusto repellendus repudiandae.
                Doloremque, optio. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quod, quaerat! Libero illo delectus, nesciunt
                voluptatum dolores nobis ab veritatis corporis dolor
                exercitationem iure eum aliquid consectetur, ad necessitatibus
                molestiae incidunt! Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Facilis molestias illo perspiciatis, nihil
                expedita id excepturi distinctio, omnis quae ut, ratione enim
                voluptas dolore sapiente cum nobis aspernatur mollitia hic!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reprehenderit molestias vel dignissimos, provident eligendi
                nihil deserunt, ipsam, earum totam magni reiciendis rem. Maiores
                obcaecati ab tenetur consectetur, ducimus voluptates
                necessitatibus. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Voluptatum nostrum aperiam eveniet assumenda
                praesentium tempore voluptates enim nam quia, impedit sint?
                Beatae modi vel aperiam voluptatem ex. Pariatur, animi magnam!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur consectetur libero earum minima dignissimos eum.
                Accusantium a mollitia, porro quibusdam minima quod laudantium
                nemo qui, non, distinctio animi nulla inventore. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Quae, vero? Minus
                aliquid molestias autem, consectetur iure laborum fugiat dolorem
                minima, quas officia cumque, modi tenetur. Ad molestias numquam
                ut ea. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolore fugiat consequatur ad quidem sint dolorum deleniti fuga
                laudantium modi, laboriosam vel optio rem unde animi iusto
                repellendus repudiandae. Doloremque, optio. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quod, quaerat! Libero
                illo delectus, nesciunt voluptatum dolores nobis ab veritatis
                corporis dolor exercitationem iure eum aliquid consectetur, ad
                necessitatibus molestiae incidunt!Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Facilis molestias illo
                perspiciatis, nihil expedita id excepturi distinctio, omnis quae
                ut, ratione enim voluptas dolore sapiente cum nobis aspernatur
                mollitia hic! Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Reprehenderit molestias vel dignissimos,
                provident eligendi nihil deserunt, ipsam, earum totam magni
                reiciendis rem. Maiores obcaecati ab tenetur consectetur,
                ducimus voluptates necessitatibus. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit.
              </div>
            </section>
            <section id="projects">
              <div className="section-header">PROJECTS</div>
              <div className="content">
                Voluptatum nostrum aperiam eveniet assumenda praesentium tempore
                voluptates enim nam quia, impedit sint? Beatae modi vel aperiam
                voluptatem ex. Pariatur, animi magnam! Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Tenetur consectetur libero
                earum minima dignissimos eum. Accusantium a mollitia, porro
                quibusdam minima quod laudantium nemo qui, non, distinctio animi
                nulla inventore. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Quae, vero? Minus aliquid molestias autem,
                consectetur iure laborum fugiat dolorem minima, quas officia
                cumque, modi tenetur. Ad molestias numquam ut ea. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Dolore fugiat
                consequatur ad quidem sint dolorum deleniti fuga laudantium
                modi, laboriosam vel optio rem unde animi iusto repellendus
                repudiandae. Doloremque, optio. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quod, quaerat! Libero illo
                delectus, nesciunt voluptatum dolores nobis ab veritatis
                corporis dolor exercitationem iure eum aliquid consectetur, ad
                necessitatibus molestiae incidunt!Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Facilis molestias illo
                perspiciatis, nihil expedita id excepturi distinctio, omnis quae
                ut, ratione enim voluptas dolore sapiente cum nobis aspernatur
                mollitia hic! Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Reprehenderit molestias vel dignissimos,
                provident eligendi nihil deserunt, ipsam, earum totam magni
                reiciendis rem. Maiores obcaecati ab tenetur consectetur,
                ducimus voluptates necessitatibus. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Voluptatum nostrum aperiam eveniet
                assumenda praesentium tempore voluptates enim nam quia, impedit
                sint? Beatae modi vel aperiam voluptatem ex. Pariatur, animi
                magnam! Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Tenetur consectetur libero earum minima dignissimos eum.
                Accusantium a mollitia, porro quibusdam minima quod laudantium
                nemo qui, non, distinctio animi nulla inventore. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Quae, vero? Minus
                aliquid molestias autem, consectetur iure laborum fugiat dolorem
                minima, quas officia cumque, modi tenetur. Ad molestias numquam
                ut ea. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolore fugiat consequatur ad quidem sint dolorum deleniti fuga
                laudantium modi, laboriosam vel optio rem unde animi iusto
                repellendus repudiandae. Doloremque, optio. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quod, quaerat! Libero
                illo delectus, nesciunt voluptatum dolores nobis ab veritatis
                corporis dolor exercitationem iure eum aliquid consectetur, ad
                necessitatibus molestiae incidunt!Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Facilis molestias illo
                perspiciatis, nihil expedita id excepturi distinctio, omnis quae
                ut, ratione enim voluptas dolore sapiente cum nobis aspernatur
                mollitia hic! Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Reprehenderit molestias vel dignissimos,
                provident eligendi nihil deserunt, ipsam, earum totam magni
                reiciendis rem. Maiores obcaecati ab tenetur consectetur,
                ducimus voluptates necessitatibus. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Voluptatum nostrum aperiam eveniet
                assumenda praesentium tempore voluptates enim nam quia, impedit
                sint? Beatae modi vel aperiam voluptatem ex. Pariatur, animi
                magnam! Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Tenetur consectetur libero earum minima dignissimos eum.
                Accusantium a mollitia, porro quibusdam minima quod laudantium
                nemo qui, non, distinctio animi nulla inventore. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Quae, vero? Minus
                aliquid molestias autem, consectetur iure laborum fugiat dolorem
                minima, quas officia cumque, modi tenetur. Ad molestias numquam
                ut ea. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolore fugiat consequatur ad quidem sint dolorum deleniti fuga
                laudantium modi, laboriosam vel optio rem unde animi iusto
                repellendus repudiandae. Doloremque, optio. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quod, quaerat! Libero
                illo delectus, nesciunt voluptatum dolores nobis ab veritatis
                corporis dolor exercitationem iure eum aliquid consectetur, ad
                necessitatibus molestiae incidunt!Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Facilis molestias illo
                perspiciatis, nihil expedita id excepturi distinctio, omnis quae
                ut, ratione enim voluptas dolore sapiente cum nobis aspernatur
                mollitia hic! Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Reprehenderit molestias vel dignissimos,
                provident eligendi nihil deserunt, ipsam, earum totam magni
                reiciendis rem. Maiores obcaecati ab tenetur consectetur,
                ducimus voluptates necessitatibus. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Voluptatum nostrum aperiam eveniet
                assumenda praesentium tempore voluptates enim nam quia, impedit
                sint? Beatae modi vel aperiam voluptatem ex. Pariatur, animi
                magnam! Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Tenetur consectetur libero earum minima dignissimos eum.
                Accusantium a mollitia, porro quibusdam minima quod laudantium
                nemo qui, non, distinctio animi nulla inventore. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Quae, vero? Minus
                aliquid molestias autem, consectetur iure laborum fugiat dolorem
                minima, quas officia cumque, modi tenetur. Ad molestias numquam
                ut ea. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolore fugiat consequatur ad quidem sint dolorum deleniti fuga
                laudantium modi, laboriosam vel optio rem unde animi iusto
                repellendus repudiandae. Doloremque, optio. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quod, quaerat! Libero
                illo delectus, nesciunt voluptatum dolores nobis ab veritatis
                corporis dolor exercitationem iure eum aliquid consectetur, ad
                necessitatibus molestiae incidunt!Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Facilis molestias illo
                perspiciatis, nihil expedita id excepturi distinctio, omnis quae
                ut, ratione enim voluptas dolore sapiente cum nobis aspernatur
                mollitia hic! Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Reprehenderit molestias vel dignissimos,
                provident eligendi nihil deserunt, ipsam, earum totam magni
                reiciendis rem. Maiores obcaecati ab tenetur consectetur,
                ducimus voluptates necessitatibus. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Voluptatum nostrum aperiam eveniet
                assumenda praesentium tempore voluptates enim nam quia, impedit
                sint? Beatae modi vel aperiam voluptatem ex. Pariatur, animi
                magnam! Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Tenetur consectetur libero earum minima dignissimos eum.
                Accusantium a mollitia, porro quibusdam minima quod laudantium
                nemo qui, non, distinctio animi nulla inventore. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Quae, vero? Minus
                aliquid molestias autem, consectetur iure laborum fugiat dolorem
                minima, quas officia cumque, modi tenetur. Ad molestias numquam
                ut ea. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolore fugiat consequatur ad quidem sint dolorum deleniti fuga
                laudantium modi, laboriosam vel optio rem unde animi iusto
                repellendus repudiandae. Doloremque, optio. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quod, quaerat! Libero
                illo delectus, nesciunt voluptatum dolores nobis ab veritatis
                corporis dolor exercitationem iure eum aliquid consectetur, ad
                necessitatibus molestiae incidunt!
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
