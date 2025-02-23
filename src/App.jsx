import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="header-and-main">
        <header>
          <div>
            <div className="name">Artyom Moskalew</div>
            <div className="title">Full-stack developer</div>
            <div className="status">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
              aliquid? Magnam, officiis sunt. Dolore saepe voluptatibus
              laboriosam, enim fuga, perferendis temporibus nobis soluta minima
              error odio excepturi ut voluptates sapiente!
            </div>
            <nav>
              <ul>
                <li>About</li>
                <li>Experience</li>
                <li>Projects</li>
              </ul>
            </nav>
          </div>
          <div className="social-media">Social Media</div>
        </header>
        <main className="content">
          <section id="about">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            molestias illo perspiciatis, nihil expedita id excepturi distinctio,
            omnis quae ut, ratione enim voluptas dolore sapiente cum nobis
            aspernatur mollitia hic! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Reprehenderit molestias vel dignissimos, provident
            eligendi nihil deserunt, ipsam, earum totam magni reiciendis rem.
            Maiores obcaecati ab tenetur consectetur, ducimus voluptates
            necessitatibus. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Voluptatum nostrum aperiam eveniet assumenda praesentium
            tempore voluptates enim nam quia, impedit sint? Beatae modi vel
            aperiam voluptatem ex. Pariatur, animi magnam! Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Tenetur consectetur libero
            earum minima dignissimos eum. Accusantium a mollitia, porro
            quibusdam minima quod laudantium nemo qui, non, distinctio animi
            nulla inventore. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Quae, vero? Minus aliquid molestias autem, consectetur iure
            laborum fugiat dolorem minima, quas officia cumque, modi tenetur.
          </section>
          <section id="experience">
            Ad molestias numquam ut ea. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Dolore fugiat consequatur ad quidem sint dolorum
            deleniti fuga laudantium modi, laboriosam vel optio rem unde animi
            iusto repellendus repudiandae. Doloremque, optio. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quod, quaerat! Libero illo
            delectus, nesciunt voluptatum dolores nobis ab veritatis corporis
            dolor exercitationem iure eum aliquid consectetur, ad necessitatibus
            molestiae incidunt! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Facilis molestias illo perspiciatis, nihil
            expedita id excepturi distinctio, omnis quae ut, ratione enim
            voluptas dolore sapiente cum nobis aspernatur mollitia hic! Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
            molestias vel dignissimos, provident eligendi nihil deserunt, ipsam,
            earum totam magni reiciendis rem. Maiores obcaecati ab tenetur
            consectetur, ducimus voluptates necessitatibus. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Voluptatum nostrum aperiam
            eveniet assumenda praesentium tempore voluptates enim nam quia,
            impedit sint? Beatae modi vel aperiam voluptatem ex. Pariatur, animi
            magnam! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Tenetur consectetur libero earum minima dignissimos eum. Accusantium
            a mollitia, porro quibusdam minima quod laudantium nemo qui, non,
            distinctio animi nulla inventore. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quae, vero? Minus aliquid molestias
            autem, consectetur iure laborum fugiat dolorem minima, quas officia
            cumque, modi tenetur. Ad molestias numquam ut ea. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Dolore fugiat consequatur ad
            quidem sint dolorum deleniti fuga laudantium modi, laboriosam vel
            optio rem unde animi iusto repellendus repudiandae. Doloremque,
            optio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quod, quaerat! Libero illo delectus, nesciunt voluptatum dolores
            nobis ab veritatis corporis dolor exercitationem iure eum aliquid
            consectetur, ad necessitatibus molestiae incidunt!Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Facilis molestias illo
            perspiciatis, nihil expedita id excepturi distinctio, omnis quae ut,
            ratione enim voluptas dolore sapiente cum nobis aspernatur mollitia
            hic! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit molestias vel dignissimos, provident eligendi nihil
            deserunt, ipsam, earum totam magni reiciendis rem. Maiores obcaecati
            ab tenetur consectetur, ducimus voluptates necessitatibus. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit.{" "}
          </section>
          <section id="projects">
            Voluptatum nostrum aperiam eveniet assumenda praesentium tempore
            voluptates enim nam quia, impedit sint? Beatae modi vel aperiam
            voluptatem ex. Pariatur, animi magnam! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Tenetur consectetur libero earum
            minima dignissimos eum. Accusantium a mollitia, porro quibusdam
            minima quod laudantium nemo qui, non, distinctio animi nulla
            inventore. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quae, vero? Minus aliquid molestias autem, consectetur iure laborum
            fugiat dolorem minima, quas officia cumque, modi tenetur. Ad
            molestias numquam ut ea. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Dolore fugiat consequatur ad quidem sint dolorum
            deleniti fuga laudantium modi, laboriosam vel optio rem unde animi
            iusto repellendus repudiandae. Doloremque, optio. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quod, quaerat! Libero illo
            delectus, nesciunt voluptatum dolores nobis ab veritatis corporis
            dolor exercitationem iure eum aliquid consectetur, ad necessitatibus
            molestiae incidunt!Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Facilis molestias illo perspiciatis, nihil
            expedita id excepturi distinctio, omnis quae ut, ratione enim
            voluptas dolore sapiente cum nobis aspernatur mollitia hic! Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
            molestias vel dignissimos, provident eligendi nihil deserunt, ipsam,
            earum totam magni reiciendis rem. Maiores obcaecati ab tenetur
            consectetur, ducimus voluptates necessitatibus. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Voluptatum nostrum aperiam
            eveniet assumenda praesentium tempore voluptates enim nam quia,
            impedit sint? Beatae modi vel aperiam voluptatem ex. Pariatur, animi
            magnam! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Tenetur consectetur libero earum minima dignissimos eum. Accusantium
            a mollitia, porro quibusdam minima quod laudantium nemo qui, non,
            distinctio animi nulla inventore. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quae, vero? Minus aliquid molestias
            autem, consectetur iure laborum fugiat dolorem minima, quas officia
            cumque, modi tenetur. Ad molestias numquam ut ea. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Dolore fugiat consequatur ad
            quidem sint dolorum deleniti fuga laudantium modi, laboriosam vel
            optio rem unde animi iusto repellendus repudiandae. Doloremque,
            optio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quod, quaerat! Libero illo delectus, nesciunt voluptatum dolores
            nobis ab veritatis corporis dolor exercitationem iure eum aliquid
            consectetur, ad necessitatibus molestiae incidunt!Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Facilis molestias illo
            perspiciatis, nihil expedita id excepturi distinctio, omnis quae ut,
            ratione enim voluptas dolore sapiente cum nobis aspernatur mollitia
            hic! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit molestias vel dignissimos, provident eligendi nihil
            deserunt, ipsam, earum totam magni reiciendis rem. Maiores obcaecati
            ab tenetur consectetur, ducimus voluptates necessitatibus. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            nostrum aperiam eveniet assumenda praesentium tempore voluptates
            enim nam quia, impedit sint? Beatae modi vel aperiam voluptatem ex.
            Pariatur, animi magnam! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Tenetur consectetur libero earum minima
            dignissimos eum. Accusantium a mollitia, porro quibusdam minima quod
            laudantium nemo qui, non, distinctio animi nulla inventore. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Quae, vero?
            Minus aliquid molestias autem, consectetur iure laborum fugiat
            dolorem minima, quas officia cumque, modi tenetur. Ad molestias
            numquam ut ea. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Dolore fugiat consequatur ad quidem sint dolorum deleniti fuga
            laudantium modi, laboriosam vel optio rem unde animi iusto
            repellendus repudiandae. Doloremque, optio. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quod, quaerat! Libero illo
            delectus, nesciunt voluptatum dolores nobis ab veritatis corporis
            dolor exercitationem iure eum aliquid consectetur, ad necessitatibus
            molestiae incidunt!Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Facilis molestias illo perspiciatis, nihil
            expedita id excepturi distinctio, omnis quae ut, ratione enim
            voluptas dolore sapiente cum nobis aspernatur mollitia hic! Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
            molestias vel dignissimos, provident eligendi nihil deserunt, ipsam,
            earum totam magni reiciendis rem. Maiores obcaecati ab tenetur
            consectetur, ducimus voluptates necessitatibus. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Voluptatum nostrum aperiam
            eveniet assumenda praesentium tempore voluptates enim nam quia,
            impedit sint? Beatae modi vel aperiam voluptatem ex. Pariatur, animi
            magnam! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Tenetur consectetur libero earum minima dignissimos eum. Accusantium
            a mollitia, porro quibusdam minima quod laudantium nemo qui, non,
            distinctio animi nulla inventore. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quae, vero? Minus aliquid molestias
            autem, consectetur iure laborum fugiat dolorem minima, quas officia
            cumque, modi tenetur. Ad molestias numquam ut ea. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Dolore fugiat consequatur ad
            quidem sint dolorum deleniti fuga laudantium modi, laboriosam vel
            optio rem unde animi iusto repellendus repudiandae. Doloremque,
            optio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quod, quaerat! Libero illo delectus, nesciunt voluptatum dolores
            nobis ab veritatis corporis dolor exercitationem iure eum aliquid
            consectetur, ad necessitatibus molestiae incidunt!Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Facilis molestias illo
            perspiciatis, nihil expedita id excepturi distinctio, omnis quae ut,
            ratione enim voluptas dolore sapiente cum nobis aspernatur mollitia
            hic! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit molestias vel dignissimos, provident eligendi nihil
            deserunt, ipsam, earum totam magni reiciendis rem. Maiores obcaecati
            ab tenetur consectetur, ducimus voluptates necessitatibus. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            nostrum aperiam eveniet assumenda praesentium tempore voluptates
            enim nam quia, impedit sint? Beatae modi vel aperiam voluptatem ex.
            Pariatur, animi magnam! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Tenetur consectetur libero earum minima
            dignissimos eum. Accusantium a mollitia, porro quibusdam minima quod
            laudantium nemo qui, non, distinctio animi nulla inventore. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Quae, vero?
            Minus aliquid molestias autem, consectetur iure laborum fugiat
            dolorem minima, quas officia cumque, modi tenetur. Ad molestias
            numquam ut ea. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Dolore fugiat consequatur ad quidem sint dolorum deleniti fuga
            laudantium modi, laboriosam vel optio rem unde animi iusto
            repellendus repudiandae. Doloremque, optio. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quod, quaerat! Libero illo
            delectus, nesciunt voluptatum dolores nobis ab veritatis corporis
            dolor exercitationem iure eum aliquid consectetur, ad necessitatibus
            molestiae incidunt!
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
