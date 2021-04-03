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
  }
  
  h1 {
    font-size: 1.8rem;
    padding: 1rem 0;
  }
  h2 {
    font-size: 1.6rem;
    padding: 1rem 0;
  }

  a {
    text-decoration: none;
    color: black;
  }

  img {
    border-radius: 0.5rem;
  }
  
  
  `
