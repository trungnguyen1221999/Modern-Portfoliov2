import React from "react";
import data from "../data";
import styled from "styled-components";
const Work = () => {
  return (
    <Container>
      <h2 data-aos="fade-up" data-aos-duration="1500">
        My Works
      </h2>
      <div>
        <div className="button"></div>
        <GridWorks data-aos="zoom-in-up" data-aos-duration="1000">
          {data.home.works.image.map((item, index) => (
            <img key={index} src={item} alt="" />
          ))}
        </GridWorks>
      </div>
    </Container>
  );
};

export default Work;

const GridWorks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  img {
    width: 100%;
    object-fit: cover;
    overflow: hidden;
    box-shadow: 4px 4px 6px #c7c7c7, -4px -4px 6px #ffffff;
    border: 1rem solid #c7c7c7;
    border-radius: 1rem;
    transition: 0.5s;
  }
  &:hover img {
    opacity: 0.1;
    filter: brightness(0.5);
  }

  /* Nhưng khi hover đúng 1 ảnh, ảnh đó rõ trở lại */
  img:hover {
    opacity: 1 !important;
    filter: brightness(1);
    scale: 1.1;
  }
`;

const Container = styled.div`
  margin-top: 25rem;
  padding: 2rem 10rem;
  gap: 30rem;
  h2 {
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 3rem;
    margin-bottom: 8rem;
  }
`;
