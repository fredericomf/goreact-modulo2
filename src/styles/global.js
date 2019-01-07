// NOTA_ESTUDO: O estilo abaixo precisa ser usado como um componente: <GlobalStyle />
import { createGlobalStyle } from "styled-components";

import "font-awesome/css/font-awesome.css";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    outline: 0; /*NOTA_ESTUDO: Remove aquela borda, que o browser coloca, ao redor dos inputs*/
    padding: 0;
  }

  body {
    background: #9B65E6;
    font-family: sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
`;

export default GlobalStyle;
