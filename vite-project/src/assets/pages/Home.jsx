import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Work from "./Work";
import ContactSection from "../components/ContactSection";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Work />
      <Testimonials />
      <ContactSection />
    </>
  );
};

export default Home;
