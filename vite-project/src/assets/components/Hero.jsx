import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { StyledContainer } from "./Header";
import data from "../data";

const TypewriterLoop = ({
  texts,
  speed = 150,
  deleteSpeed = 50,
  pause = 1000,
}) => {
  const [displayed, setDisplayed] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const currentText = texts[textIndex];

  useEffect(() => {
    let timeout;

    if (!deleting) {
      if (displayed.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentText.slice(0, displayed.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, displayed.length - 1));
        }, deleteSpeed);
      } else {
        setDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayed,
    deleting,
    currentText,
    speed,
    deleteSpeed,
    pause,
    texts.length,
  ]);

  return <span>{displayed}|</span>;
};

const Hero = () => {
  // Chỉ nhập trực tiếp roles ở đây
  const roles = ["Front End Developer", "Business Owner", "Digital Marketer"];

  return (
    <StyledContainerHero>
      <StyledImage
        data-aos="flip-left"
        data-aos-duration="1000"
        src={data.home.images.hero}
        alt="Hero"
      />
      <div data-aos="flip-right" data-aos-duration="1000">
        <StyledTitle>
          <h3>{data.home.header.title.hello}</h3>
          <StyledName>{data.home.header.title.name}</StyledName>
          <h3>
            I’m a{" "}
            <StyledSpan>
              <TypewriterLoop texts={roles} />
            </StyledSpan>
          </h3>
        </StyledTitle>
        <p>{data.home.header.description}</p>
        <StyledIcon>
          <img src={data.home.header.icon.programming.src} alt="Programming" />
          <img src={data.home.header.icon.ecommerce.src} alt="Ecommerce" />
          <img src={data.home.header.icon.travel.src} alt="Travel" />
        </StyledIcon>
      </div>
    </StyledContainerHero>
  );
};

export default Hero;

// Styles
const StyledImage = styled.img`
  width: 50rem;
  box-shadow: 4px 4px 6px #c7c7c7, -4px -4px 6px #ffffff;
`;

const StyledName = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3rem;
  font-weight: 900;
`;

const StyledContainerHero = styled(StyledContainer)`
  gap: 30rem;
  margin-top: 5rem;
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StyledIcon = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 10rem;
  justify-content: center;
  width: 100%;
  img {
    width: 12rem;
    box-shadow: 4px 4px 6px #c7c7c7, -4px -4px 6px #ffffff;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
  }
  img:hover {
    box-shadow: inset 4px 6px #c7c7c7, inset -4px -4px 6px #ffffff;
  }
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;
