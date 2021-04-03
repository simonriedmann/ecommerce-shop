import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
  }


  body {
    margin: 0;
    height: 100vh;
    font-size: 1.6rem;
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }`