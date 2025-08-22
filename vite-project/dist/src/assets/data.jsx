const data = {
  home: {
    images: {
      logo: "/images/logo.png",
      hero: "/images/myself1.png",
      about: "/images/myself2.png",
    },
    header: {
      title: {
        hello: "Hello, It's Me",
        name: "Trung Nguyen",
        and: "And I'm a Front End Developer",
      },
      description: (
        <p>
          Hi there! <strong>I’m Nguyen Anh Trung</strong>, a 26-year-old
          code-wrangler currently studying programming at Vuoksi.
          <br />
          <br />
          Before diving into the world of loops and bugs, I spent 5 years
          wrestling with the wild beast known as eCommerce — and somehow
          survived. <br />
          <br />I love travel, because sometimes my code needs a break… and so
          do I. If life were a program, I’d say I’m still in the beta version,
          but with plenty of exciting updates coming soon!
        </p>
      ),
      icon: {
        programming: {
          src: "/images/programing.png",
          alt: "Programming",
        },
        ecommerce: {
          src: "/images/ecommerce.png",
          alt: "Ecommerce",
        },
        travel: {
          src: "/images/travel.png",
          alt: "Travel",
        },
      },
    },
    skiils: {
      title: "Skills",
      description:
        "My skills are under construction 🚧, but I’m coding, learning, and leveling up every day. I may not know everything yet, but I learn faster than bugs appear in my code",
      skillImage: {
        html: {
          src: "/images/html.png",
          description: "Html",
        },
        css: {
          src: "/images/css.png",
          description: "Css",
        },
        js: {
          src: "/images/js.png",
          description: "JavaScripts",
        },
        react: {
          src: "/images/react.png",
          description: "React",
        },
        ecommerce: {
          src: "/images/ecommerceS.png",
          description: "eCommerce",
        },
      },
    },
    works: {
      headeing: "My Works",
      image: [
        "/images/work1.png",
        "/images/work2.png",
        "/images/work3.png",
        "/images/work4.png",
        "/images/work5.png",
        "/images/work6.png",
      ],

      description: (
        <div>
          <strong>
            <p>
              I’m also the founder of OmaCustom.fi, a brand I started back in
              2024.
            </p>
          </strong>
          <p>
            At OmaCustom.fi, I create personalized products that turn everyday
            items into something
            <i>
              unique, fun, and totally <strong>“you”</strong>
            </i>
            .
          </p>
          <p>
            I built this brand from scratch because I wanted to combine my love
            for creativity, tech, and helping people express themselves. Every
            product has a little bit of me in it — from the idea to the final
            design.
          </p>
          <p>
            When I’m not coding or shipping custom goodies, I love traveling and
            finding inspiration for the next quirky product idea.
          </p>
        </div>
      ),
    },

    contact: {
      title: "Contact Me",
      address: "Pillilänkuja 21, Kauhajoki",
      phoneNumber: "0123456",
      emailAddress: "trungnguyen1221999@gmail.com",
    },
    testimonials: {
      heading: "Testimonials",
      avatars: [
        "/images/testimonial.png",
        "/images/testimonial.png",
        "/images/testimonial.png",
        "/images/testimonial.png",
        "/images/testimonial.png",
        "/images/testimonial.png",
      ],
      names: [
        "Aino Virtanen",
        "Eero Korhonen",
        "Trung Korhonen",
        "Aino Virtanen",
        "My Korhonen",
        "Eero Korhonen",
      ],
      comments: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, provident.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, provident.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, provident.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, provident.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, provident.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, provident.",
      ],
    },
  },
};

export default data;
