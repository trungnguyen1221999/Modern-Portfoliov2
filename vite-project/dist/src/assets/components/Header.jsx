import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import data from "../data";
import styled from "styled-components";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header>
      <StyledContainer>
        <></>
        <NavLink to="/">
          <StyledImage
            data-aos="fade-up-right"
            data-aos-duration="1000"
            src={data.home.images.logo}
            alt=""
          />
        </NavLink>
        <StyledNav data-aos="fade-up-left" data-aos-duration="1000">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </StyledNav>
        {openMenu ? (
          <img
            className="menu"
            onClick={() => setOpenMenu(false)}
            src="/images/x-symbol-svgrepo-com.svg"
            alt="close"
          />
        ) : (
          <img
            className="menu"
            onClick={() => setOpenMenu(true)}
            src="/images/hamburger-menu-svgrepo-com.svg"
            alt="menu"
          />
        )}

        <StyledNavMobile openMenu={openMenu}>
          <NavLink onClick={() => setOpenMenu(false)} to="/">
            Home
          </NavLink>
          <NavLink onClick={() => setOpenMenu(false)} to="/about">
            About
          </NavLink>
          <NavLink onClick={() => setOpenMenu(false)} to="/contact">
            Contact
          </NavLink>
        </StyledNavMobile>
      </StyledContainer>
    </header>
  );
};

export default Header;

const StyledImage = styled.img`
  width: 18rem;
  box-shadow: 4px 4px 6px #c7c7c7, -4px -4px 6px #ffffff;
  padding: 0 2rem;
  transition: 0.5s;
  &:hover {
    box-shadow: inset 4px 4px 6px #c7c7c7, inset -4px -4px 6px #ffffff;
  }
  @media (max-width: 480px) {
    width: 12rem; /* giảm kích thước logo */
    padding: 0 1rem;
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
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledNavMobile = styled.nav`
  display: ${({ openMenu }) => (openMenu ? "flex" : "none")};
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7rem;
    background-color: ${({ theme }) => theme.colors.bg};
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    overflow: hidden;
    a {
      width: 90%;
      text-align: center;
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
  }

  /* Media nhỏ hơn 480px */
  @media (max-width: 480px) {
    gap: 5rem; /* khoảng cách giảm để vừa màn hình */
    a {
      font-size: 1.6rem; /* chữ nhỏ hơn cho điện thoại nhỏ */
      padding: 0.5rem 0.8rem;
    }
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
  cursor: pointer;

  .menu {
    width: 3rem;
    box-shadow: 4px 4px 6px #c7c7c7, -4px -4px 6px #ffffff;
    z-index: 9999;
    padding: 0.2rem;

    @media (min-width: 769px) {
      display: none;
    }

    /* Media nhỏ hơn 480px */
    @media (max-width: 480px) {
      width: 2.5rem; /* menu icon nhỏ hơn */
    }
  }

  /* Media nhỏ hơn 480px cho padding container */
  @media (max-width: 480px) {
    padding: 1rem 2rem;
  }
`;
