import React from "react";
import data from "../data";
import styled from "styled-components";
const ContactSection = () => {
  return (
    <div>
      <StyledContainer>
        <h2 data-aos="flip-down" data-aos-duration="1500">
          {data.home.contact.title}
        </h2>
        <StyledInfo data-aos="flip-up" data-aos-duration="1500">
          <div className="div1">
            <h3>Address</h3>
            <p>{data.home.contact.address}</p>
          </div>
          <div className="div2">
            <h3>Phone Number</h3>
            <p>{data.home.contact.phoneNumber}</p>
          </div>
          <div className="div3">
            <h3>Email Address</h3>
            <p>{data.home.contact.emailAddress}</p>
          </div>
        </StyledInfo>
        <StyledForm action="">
          <input
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            type="text"
            placeholder="Enter Your Name"
          />
          <input
            data-aos="zoom-in-left"
            data-aos-duration="1500"
            type="text"
            placeholder="Enter Your Email"
          />
          <input
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            type="text"
            placeholder="Email Subject"
          />
          <input
            data-aos="zoom-in-left"
            data-aos-duration="1500"
            type="text"
            placeholder="Your Message"
          />
          <button>Send Message</button>
        </StyledForm>
      </StyledContainer>
    </div>
  );
};

export default ContactSection;
const StyledContainer = styled.div`
  padding: 0 20rem;
  margin-top: 22rem;
  margin-bottom: 22rem;
  text-align: center;
  h2 {
    color: ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: 768px) {
    margin: 15rem 0;
  }
  @media (max-width: 480px) {
    padding: 0 5rem;
  }
`;

const StyledInfo = styled.div`
  margin: 5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, 1fr);
  align-items: center;
  gap: 1rem;
  .div1 {
    grid-column: span 2 / span 2;
  }

  .div2 {
    grid-column-start: 3;
  }

  .div3 {
    grid-column: span 2 / span 2;
    grid-column-start: 4;
  }
  div {
    box-shadow: 4px 4px 6px #c7c7c7, -4px -4px 6px #ffffff;
    padding: 2rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    div {
      width: 32rem;
    }
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  input {
    box-shadow: 4px 4px 6px #c7c7c7, -4px -4px 6px #ffffff;
    padding: 1.2rem 1.8rem;
    border-radius: 1rem;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.bg};
    background-color: ${({ theme }) => theme.colors.bg};
    transition: 0.5s !important;
  }
  input:hover {
    box-shadow: inset 4px 6px #c7c7c7, inset -4px -4px 6px #ffffff;
  }

  button {
    font-family: "Mozilla Text", sans-serif;
    padding: 1.2rem 1.8rem;
    box-shadow: 4px 4px 6px #c7c7c7, -4px -4px 6px #ffffff;
    padding: 1.2rem 1.8rem;
    border: 1px solid ${({ theme }) => theme.colors.bg};
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    font-size: 1.8rem;
    font-weight: 400;
    text-transform: uppercase;
    transition: 0.5s;
  }
  button:hover {
    box-shadow: inset 4px 6px #c7c7c7, inset -4px -4px 6px #ffffff;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;
