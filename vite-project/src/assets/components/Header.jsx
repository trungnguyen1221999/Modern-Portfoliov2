import React from "react";
import { NavLink } from "react-router-dom";

import data from "../data";
import styled from "styled-components";

const Header = () => {
  return (
    <header>
      <StyledContainer>
        <StyledImage
          data-aos="fade-up-right"
          data-aos-duration="1000"
          src={data.home.images.logo}
          alt=""
        />
        <StyledNav data-aos="fade-up-left" data-aos-duration="1000">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </StyledNav>
      </StyledContainer>
    </header>
  );
};

export default Header;

const StyledImage = styled.img`
  width: 180px;
  box-shadow: 4px 4px 6px #c7c7c7, -4px -4px 6px #ffffff;
  padding: 0 2rem;
  transition: 0.5s;
  &:hover {
    box-shadow: inset 4px 4px 6px #c7c7c7, inset -4px -4px 6px #ffffff;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6rem;
  a {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    text-transform: uppercase;
    box-shadow: 4px 4px 6px #c7c7c7, -4px -4px 6px #ffffff;
    padding: 0.5rem 1rem;
    transition: 0.5s;
  }
  a:hover,
  a:active {
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: inset 4px 4px 6px #c7c7c7, inset -4px -4px 6px #ffffff;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
`;
