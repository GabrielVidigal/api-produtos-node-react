import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f2f2f2;
  }

  .button {
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #f2f2f22;
    color: white;
    height: 50px;
  }

  
`;

export default GlobalStyle;
