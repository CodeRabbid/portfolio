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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
              molestias illo perspiciatis, nihil expedita id excepturi
              distinctio, omnis quae ut, ratione enim voluptas dolore sapiente
              cum nobis aspernatur mollitia hic! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Reprehenderit molestias vel
              dignissimos, provident eligendi nihil deserunt, ipsam, earum totam
              magni reiciendis rem. Maiores obcaecati ab tenetur consectetur,
              ducimus voluptates necessitatibus. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Voluptatum nostrum aperiam eveniet
              assumenda praesentium tempore voluptates enim nam quia, impedit
              sint? Beatae modi vel aperiam voluptatem ex. Pariatur, animi
              magnam! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Tenetur consectetur libero earum minima dignissimos eum.
              Accusantium a mollitia, porro quibusdam minima quod laudantium
              nemo qui, non, distinctio animi nulla inventore. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Quae, vero? Minus aliquid
              molestias autem, consectetur iure laborum fugiat dolorem minima,
              quas officia cumque, modi tenetur.
            </section>
            <section id="experience">
              Ad molestias numquam ut ea. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Dolore fugiat consequatur ad quidem
              sint dolorum deleniti fuga laudantium modi, laboriosam vel optio
              rem unde animi iusto repellendus repudiandae. Doloremque, optio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              quaerat! Libero illo delectus, nesciunt voluptatum dolores nobis
              ab veritatis corporis dolor exercitationem iure eum aliquid
              consectetur, ad necessitatibus molestiae incidunt! Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Facilis molestias
              illo perspiciatis, nihil expedita id excepturi distinctio, omnis
              quae ut, ratione enim voluptas dolore sapiente cum nobis
              aspernatur mollitia hic! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Reprehenderit molestias vel dignissimos,
              provident eligendi nihil deserunt, ipsam, earum totam magni
              reiciendis rem. Maiores obcaecati ab tenetur consectetur, ducimus
              voluptates necessitatibus. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Voluptatum nostrum aperiam eveniet assumenda
              praesentium tempore voluptates enim nam quia, impedit sint? Beatae
              modi vel aperiam voluptatem ex. Pariatur, animi magnam! Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              consectetur libero earum minima dignissimos eum. Accusantium a
              mollitia, porro quibusdam minima quod laudantium nemo qui, non,
              distinctio animi nulla inventore. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quae, vero? Minus aliquid molestias
              autem, consectetur iure laborum fugiat dolorem minima, quas
              officia cumque, modi tenetur. Ad molestias numquam ut ea. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Dolore fugiat
              consequatur ad quidem sint dolorum deleniti fuga laudantium modi,
              laboriosam vel optio rem unde animi iusto repellendus repudiandae.
              Doloremque, optio. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quod, quaerat! Libero illo delectus, nesciunt
              voluptatum dolores nobis ab veritatis corporis dolor
              exercitationem iure eum aliquid consectetur, ad necessitatibus
              molestiae incidunt!Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Facilis molestias illo perspiciatis, nihil
              expedita id excepturi distinctio, omnis quae ut, ratione enim
              voluptas dolore sapiente cum nobis aspernatur mollitia hic! Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
              molestias vel dignissimos, provident eligendi nihil deserunt,
              ipsam, earum totam magni reiciendis rem. Maiores obcaecati ab
              tenetur consectetur, ducimus voluptates necessitatibus. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit.{" "}
            </section>
            <section id="projects">
              Voluptatum nostrum aperiam eveniet assumenda praesentium tempore
              voluptates enim nam quia, impedit sint? Beatae modi vel aperiam
              voluptatem ex. Pariatur, animi magnam! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Tenetur consectetur libero earum
              minima dignissimos eum. Accusantium a mollitia, porro quibusdam
              minima quod laudantium nemo qui, non, distinctio animi nulla
              inventore. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quae, vero? Minus aliquid molestias autem, consectetur iure
              laborum fugiat dolorem minima, quas officia cumque, modi tenetur.
              Ad molestias numquam ut ea. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Dolore fugiat consequatur ad quidem
              sint dolorum deleniti fuga laudantium modi, laboriosam vel optio
              rem unde animi iusto repellendus repudiandae. Doloremque, optio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              quaerat! Libero illo delectus, nesciunt voluptatum dolores nobis
              ab veritatis corporis dolor exercitationem iure eum aliquid
              consectetur, ad necessitatibus molestiae incidunt!Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Facilis molestias
              illo perspiciatis, nihil expedita id excepturi distinctio, omnis
              quae ut, ratione enim voluptas dolore sapiente cum nobis
              aspernatur mollitia hic! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Reprehenderit molestias vel dignissimos,
              provident eligendi nihil deserunt, ipsam, earum totam magni
              reiciendis rem. Maiores obcaecati ab tenetur consectetur, ducimus
              voluptates necessitatibus. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Voluptatum nostrum aperiam eveniet assumenda
              praesentium tempore voluptates enim nam quia, impedit sint? Beatae
              modi vel aperiam voluptatem ex. Pariatur, animi magnam! Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              consectetur libero earum minima dignissimos eum. Accusantium a
              mollitia, porro quibusdam minima quod laudantium nemo qui, non,
              distinctio animi nulla inventore. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quae, vero? Minus aliquid molestias
              autem, consectetur iure laborum fugiat dolorem minima, quas
              officia cumque, modi tenetur. Ad molestias numquam ut ea. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Dolore fugiat
              consequatur ad quidem sint dolorum deleniti fuga laudantium modi,
              laboriosam vel optio rem unde animi iusto repellendus repudiandae.
              Doloremque, optio. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quod, quaerat! Libero illo delectus, nesciunt
              voluptatum dolores nobis ab veritatis corporis dolor
              exercitationem iure eum aliquid consectetur, ad necessitatibus
              molestiae incidunt!Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Facilis molestias illo perspiciatis, nihil
              expedita id excepturi distinctio, omnis quae ut, ratione enim
              voluptas dolore sapiente cum nobis aspernatur mollitia hic! Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
              molestias vel dignissimos, provident eligendi nihil deserunt,
              ipsam, earum totam magni reiciendis rem. Maiores obcaecati ab
              tenetur consectetur, ducimus voluptates necessitatibus. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
              nostrum aperiam eveniet assumenda praesentium tempore voluptates
              enim nam quia, impedit sint? Beatae modi vel aperiam voluptatem
              ex. Pariatur, animi magnam! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Tenetur consectetur libero earum
              minima dignissimos eum. Accusantium a mollitia, porro quibusdam
              minima quod laudantium nemo qui, non, distinctio animi nulla
              inventore. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quae, vero? Minus aliquid molestias autem, consectetur iure
              laborum fugiat dolorem minima, quas officia cumque, modi tenetur.
              Ad molestias numquam ut ea. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Dolore fugiat consequatur ad quidem
              sint dolorum deleniti fuga laudantium modi, laboriosam vel optio
              rem unde animi iusto repellendus repudiandae. Doloremque, optio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              quaerat! Libero illo delectus, nesciunt voluptatum dolores nobis
              ab veritatis corporis dolor exercitationem iure eum aliquid
              consectetur, ad necessitatibus molestiae incidunt!Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Facilis molestias
              illo perspiciatis, nihil expedita id excepturi distinctio, omnis
              quae ut, ratione enim voluptas dolore sapiente cum nobis
              aspernatur mollitia hic! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Reprehenderit molestias vel dignissimos,
              provident eligendi nihil deserunt, ipsam, earum totam magni
              reiciendis rem. Maiores obcaecati ab tenetur consectetur, ducimus
              voluptates necessitatibus. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Voluptatum nostrum aperiam eveniet assumenda
              praesentium tempore voluptates enim nam quia, impedit sint? Beatae
              modi vel aperiam voluptatem ex. Pariatur, animi magnam! Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              consectetur libero earum minima dignissimos eum. Accusantium a
              mollitia, porro quibusdam minima quod laudantium nemo qui, non,
              distinctio animi nulla inventore. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quae, vero? Minus aliquid molestias
              autem, consectetur iure laborum fugiat dolorem minima, quas
              officia cumque, modi tenetur. Ad molestias numquam ut ea. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Dolore fugiat
              consequatur ad quidem sint dolorum deleniti fuga laudantium modi,
              laboriosam vel optio rem unde animi iusto repellendus repudiandae.
              Doloremque, optio. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quod, quaerat! Libero illo delectus, nesciunt
              voluptatum dolores nobis ab veritatis corporis dolor
              exercitationem iure eum aliquid consectetur, ad necessitatibus
              molestiae incidunt!Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Facilis molestias illo perspiciatis, nihil
              expedita id excepturi distinctio, omnis quae ut, ratione enim
              voluptas dolore sapiente cum nobis aspernatur mollitia hic! Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
              molestias vel dignissimos, provident eligendi nihil deserunt,
              ipsam, earum totam magni reiciendis rem. Maiores obcaecati ab
              tenetur consectetur, ducimus voluptates necessitatibus. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
              nostrum aperiam eveniet assumenda praesentium tempore voluptates
              enim nam quia, impedit sint? Beatae modi vel aperiam voluptatem
              ex. Pariatur, animi magnam! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Tenetur consectetur libero earum
              minima dignissimos eum. Accusantium a mollitia, porro quibusdam
              minima quod laudantium nemo qui, non, distinctio animi nulla
              inventore. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quae, vero? Minus aliquid molestias autem, consectetur iure
              laborum fugiat dolorem minima, quas officia cumque, modi tenetur.
              Ad molestias numquam ut ea. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Dolore fugiat consequatur ad quidem
              sint dolorum deleniti fuga laudantium modi, laboriosam vel optio
              rem unde animi iusto repellendus repudiandae. Doloremque, optio.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              quaerat! Libero illo delectus, nesciunt voluptatum dolores nobis
              ab veritatis corporis dolor exercitationem iure eum aliquid
              consectetur, ad necessitatibus molestiae incidunt!
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
