import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

export const Repository = styled.div`
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  width: 250px;

  header {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 30px;

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      color: #666;
      font-size: 14px;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        color: #999;
        font-size: 12px;
        font-style: italic;
        font-weight: normal;
      }

      /* NOTA_ESTUDO: O '&' referencia o mesmo componente. Neste caso o 'li' */
      /*O 2n significa: nos pares*/
      &:nth-child(2n - 1) {
        background: #f5f5f5;
      }
    }
  }
`;
