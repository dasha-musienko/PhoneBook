import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;


  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  *{
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-weight: inherit;
    font-style: inherit;
    font-size: 100%;
    font-family: inherit;
    vertical-align: baseline;
  }

  li, ul {
    list-style: none;
  }

  li:nth-child(2n-1) {
  background-color: #F0F0F0;
}

  table {
    border-collapse: separate !important;
    border-spacing: 0;
    overflow: hidden;
    border-radius: 15px;
  } 

  button {
    cursor: pointer;
  }

  p{
 padding: 0;
 margin: 0}

a{
text-decoration:none}
`;
