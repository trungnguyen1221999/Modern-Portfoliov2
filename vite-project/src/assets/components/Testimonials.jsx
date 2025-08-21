import React, { useState } from "react";
import data from "../data";
import styled from "styled-components";

const Testimonials = () => {
  const [currentTes, setCurrentTest] = useState(0);
  const total = data.home.testimonials.avatars.length;
  const itemPerPage = 3;
  const handleLeft = () => {
    setCurrentTest((index) => (index === 0 ? total - 1 : index - 1));
  };
  const handleRight = () => {
    setCurrentTest((index) => (index === total - 1 ? 0 : index + 1));
  };

  const visibleItem = [];
  for (let i = 0; i < itemPerPage; i++) {
    visibleItem.push((currentTes + i) % total);
  }
  return (
    <StyledTest>
      <h2>{data.home.testimonials.heading}</h2>

      <StyledTestSection>
        {visibleItem.map((index) => (
          <div className="test">
            <img
              key={index}
              src={data.home.testimonials.avatars[index]}
              alt="avatar"
            />
            <p className="name">{data.home.testimonials.names[index]}</p>
            <p className="cmt">{data.home.testimonials.comments[index]}</p>
          </div>
        ))}
      </StyledTestSection>
      <div className="btn">
        <button>
          <img onClick={handleLeft} src="./images/testimonial (1).png" alt="" />
        </button>
        <button>
          <img
            onClick={handleRight}
            className="second"
            src="./images/testimonial (1).png"
            alt=""
          />
        </button>
      </div>
    </StyledTest>
  );
};

export default Testimonials;

const StyledTest = styled.div`
  overflow-x: hidden;
  position: relative;
  padding: 2rem 10rem;
  display: flex;
  gap: 10rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 22rem;
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    font-size: 3rem;
  }
  img {
    width: 30rem;
    margin: 3rem 0;
  }
  .btn {
    position: absolute;
    transform: translateY(-50%);
    transform: translateY(50%);
    display: flex;
    gap: calc(100vw - 20rem) !important;
    img {
      width: 3rem;
      padding: 0;
      box-shadow: 4px 4px 6px #c7c7c7, -4px -4px 6px #ffffff;
      background-color: ${({ theme }) => theme.colors.bg};
      padding: 0.5rem;
    }
    img:hover {
      box-shadow: inset 4px 4px 6px #c7c7c7, inset -4px -4px 6px #ffffff;
    }
    .second {
      rotate: -180deg;
      box-shadow: inset 4px 4px 6px #c7c7c7, inset -4px -4px 6px #ffffff;
    }
    .second:hover {
      box-shadow: 4px 4px 6px #c7c7c7, -4px -4px 6px #ffffff;
    }
    button {
      background-color: transparent;
      border: none;
    }
  }
`;

const StyledTestSection = styled.div`
  display: flex;
  gap: 10rem;
  .name {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2rem;
  }
  .test {
    box-shadow: 4px 4px 6px #c7c7c7, -4px -4px 6px #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50% 0% 0 0;
    transition: 0.5s;
    cursor: pointer;
  }
  .test:hover {
    box-shadow: inset 4px 4px 6px #c7c7c7, inset -4px -4px 6px #ffffff;
    border-radius: 0% 50% 0 0;
  }

  .cmt {
    padding: 0 2rem 2rem;
    text-align: center;
  }
`;
