import React from "react";
import styled from "styled-components";

import logo from "../assets/logo.png";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;

const Form = styled.form`
  display: flex;
  margin-top: 20px;
  max-width: 400px;
  width: 100%;

  input {
    background: #fff;
    border: 0;
    border-radius: 3px;
    color: #444;
    font-size: 18px;
    flex: 1; /* Usar todo o espaço disponível */
    height: 55px;
    padding: 0 20px;
  }

  button {
    background: #63f5b0;
    border: 0;
    border-radius: 3px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    height: 55px;
    margin-left: 10px;
    padding: 0 20px;

    &:hover {
      background: #52d89f;
    }
  }
`;

const Main = () => (
  <Container>
    <img src={logo} alt="Github Compare" />

    <Form>
      <input type="text" placeholder="usuário/respositório" />
      <button type="submit">OK</button>
    </Form>
  </Container>
);

export default Main;
