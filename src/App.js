import React, { Component, Fragment } from "react";

import GlobalStyle from "./styles/global";

import Main from "./pages/Main";

// NOTA_ESTUDO: Exemplo de uso do styled-components
// import styled from "styled-components";

// const Title = styled.h1`
//   color: #f00;
//   font-size: 32px;
// `;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Title>Hello World</Title>
//       </div>
//     );
//   }
// }

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Main />
  </Fragment>
);

export default App;
