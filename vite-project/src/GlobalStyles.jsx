import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Căn cơ bản */
  html {
    font-size: 62.5%;
    font-family: "Mozilla Text", sans-serif;
    font-style: normal;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
  }

  body{
    font-size: 1.6rem;
  }
 
  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`;
