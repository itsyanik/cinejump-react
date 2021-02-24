import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Ubuntu';
    font-size: 16px;
    width: 100vw;
  }

  /* .App {

    margin: auto;
  } */
`;

export default GlobalStyles;
