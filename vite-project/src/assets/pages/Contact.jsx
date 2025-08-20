import React from "react";
import data from "../data";
import styled from "styled-components";
const Contact = () => {
  return (
    <StyledContainer>
      <h2>{data.home.contact.title}</h2>
      <StyledInfo>
        <div>
          <h3>Address</h3>
          <p>{data.home.contact.address}</p>
        </div>
        <div>
          <h3>Phone Number</h3>
          <p>{data.home.contact.phoneNumber}</p>
        </div>
        <div>
          <h3>Email Address</h3>
          <p>{data.home.contact.emailAddress}</p>
        </div>
      </StyledInfo>
      <form action="">
        <input type="text" placeholder="Enter Your Name" />
        <input type="text" placeholder="Enter Your Email" />
        <input type="text" placeholder="Email Subject" />
        <input type="text" placeholder="Your Message" />
        <button>Send Message</button>
      </form>
    </StyledContainer>
  );
};

export default Contact;

const StyledContainer = styled.div`
  padding: 0 50rem;
  margin-top: 15rem;
  text-align: center;
  h2 {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const StyledInfo = styled.div`
  margin: 5rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  div {
    box-shadow: 4px 4px 6px #c7c7c7, -4px -4px 6px #ffffff;
    padding: 2rem 3rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
  }
`;

const StyledForm = styled.form``;
