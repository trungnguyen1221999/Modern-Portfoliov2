import data from "../data";
import styled from "styled-components";
import React from "react";

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <StyledImage
          data-aos="fade-down"
          data-aos-duration="1000"
          src={data.home.images.logo}
          alt=""
        />
        <a className="email" href="mailto: trungnguyen1221999@gmail.com">
          trungnguyen1221999@gmail.com
        </a>
        <p>Phone Number: 0123456</p>
      </div>
      <div>
        <h3>Let's Connect</h3>
        <StyledIcon>
          <img src="images/fb.png" alt="" />
          <img src="images/insta.png" alt="" />
          <img src="images/whatsapp.png" alt="" />
        </StyledIcon>
      </div>
    </StyledFooter>
  );
};

export default Footer;
const StyledImage = styled.img`
  width: 180px;
  box-shadow: 4px 4px 6px #c7c7c7, -4px -4px 6px #ffffff;
  padding: 0 2rem;
  transition: 0.5s;
  &:hover {
    box-shadow: inset 4px 4px 6px #c7c7c7, inset -4px -4px 6px #ffffff;
  }
`;
const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
  margin-bottom: 2rem;
  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    flex-direction: column !important;
    gap: 10rem !important;
  }
  .email {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
    font-style: italic;
  }
`;
const StyledIcon = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  align-items: center;
  img {
    box-shadow: 4px 4px 6px #c7c7c7, -4px -4px 6px #ffffff;
    width: 7rem;
    transition: 0.5s !important;
    cursor: pointer;import theme from './../../Theme';

  }
  img:hover {
    box-shadow: inset 4px 4px 6px #c7c7c7, inset -4px -4px 6px #ffffff;
  }
`;
