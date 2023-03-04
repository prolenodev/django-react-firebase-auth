import React from "react";
import AuthorizationForm from "./Auth";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Global CSS reset to center AuthorizationForm vertically and horizontally*/
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Optional: set font and background color */
  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
  }

  /* Center the authorization form vertically and horizontally */
  html, body, #root {
    height: 100%;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthorizationForm />
    </>
  );
}

export default App;
