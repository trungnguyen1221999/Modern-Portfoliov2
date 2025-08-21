import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Work from "./Work";
import Testimonials from "../components/Testimonials";

const About = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Work />
      <Testimonials />
    </div>
  );
};

export default About;
