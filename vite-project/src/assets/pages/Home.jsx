import React from "react";
import Hero from "../components/Hero";
import { StyledContainer } from "../components/Header";
import Skills from "../components/Skills";
import Work from "./Work";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Work />
      <Contact />
    </>
  );
};

export default Home;
