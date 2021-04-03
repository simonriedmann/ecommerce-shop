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

  

  

  button {
    padding: 1rem;
    border-radius: 0.5rem;
    border: 0.1rem #a4a4a4 solid;
    font-size: 1.6rem;
    font-family: Helvetica, Arial, sans-serif;
    background-color: #f8f8f8;
    cursor: pointer;
  }
  button:hover {
    border: 0.1rem #404040 solid;
  }

  img {
    border-radius: 0.5rem;
  }
  
  
  `
