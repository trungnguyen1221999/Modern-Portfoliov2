import React from "react";

import data from "../data";
import styled from "styled-components";

const Skills = () => {
  return (
    <Container>
      <StyledImage
        data-aos="fade-right"
        data-aos-duration="1000"
        src={data.home.images.about}
        alt=""
      />
      <div data-aos="fade-left" data-aos-duration="1000">
        <StyledTitle>{data.home.skiils.title}</StyledTitle>
        <p>{data.home.skiils.description}</p>
        <StyledIcons>
          <img
            className="div1"
            src={data.home.skiils.skillImage.html.src}
            alt=""
          />
          <img
            className="div2"
            src={data.home.skiils.skillImage.css.src}
            alt=""
          />
          <img
            className="div3"
            src={data.home.skiils.skillImage.js.src}
            alt=""
          />
          <img
            className="div4"
            src={data.home.skiils.skillImage.react.src}
            alt=""
          />
          <img
            className="div5"
            src={data.home.skiils.skillImage.ecommerce.src}
            alt=""
          />
        </StyledIcons>
      </div>
    </Container>
  );
};

export default Skills;
const StyledTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledImage = styled.img`
  width: 50rem;
  box-shadow: 4px 4px 6px #c7c7c7, -4px -4px 6px #ffffff;
  border-radius: 50% 0 0 0;
  transition: 0.5s !important;
  &:hover {
    border-radius: 0 50% 0 0;
  }
`;

const Container = styled.div`
  margin-top: 25rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
  gap: 30rem;
  @media (max-width: 768px) {
    margin-top: 15rem;
    flex-direction: column !important;
    gap: 10rem;
  }
`;
const StyledIcons = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;

  .div2 {
    grid-column-start: 3;
  }

  .div3 {
    grid-column-start: 1;
    grid-row-start: 3;
  }

  .div4 {
    grid-column-start: 3;
    grid-row-start: 3;
  }

  .div5 {
    grid-column-start: 2;
    grid-row-start: 2;
  }

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
    box-shadow: inset 4px 4px 6px #c7c7c7, inset -4px -4px 6px #ffffff;
  }
`;
