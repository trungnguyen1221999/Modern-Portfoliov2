import React from "react";
import Hero from "../components/Hero";
import { StyledContainer } from "../components/Header";
import Skills from "../components/Skills";
import Work from "./Work";

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Work />
    </>
  );
};

export default Home;
