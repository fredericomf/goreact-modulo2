import styled from "styled-components";

// NOTA_ESTUDO: Preciso usar o export antes das constantes para enxergá-las no index.js
export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 20px;
  max-width: 400px;
  width: 100%;

  input {
    background: #fff;

    /* O STYLED-COMPONENTS permite receber os parametros passados no componente... */
    border: ${props => (props.withError ? "2px solid #F00" : 0)};

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
