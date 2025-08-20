import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Work from "./Work";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Work />
      <ContactSection />
    </>
  );
};

export default Home;
