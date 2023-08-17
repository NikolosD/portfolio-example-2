import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";
import {inspect} from "util";


export const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
    line-height: 1.2;
    min-width:  360px;
  }
  
  a{
    text-decoration: none;
    color: ${theme.colors.font};
    cursor: pointer;
  }
  
  ul{
    list-style: none;
  }
  
  button{
    background-color: unset;
    border: none;
    cursor: pointer;
    color: ${theme.colors.font};
  }

  section:nth-of-type(odd){
    background-color: ${theme.colors.primaryBg};
  }
  
  section:nth-of-type(even){
    background-color: ${theme.colors.secondaryBg};
  }

  section {
    padding: 110px 0 110px ;
    
  }
`