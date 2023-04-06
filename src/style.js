import styled, { css } from "styled-components";

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;

  ${({ dark }) => {
    if (dark) {
      return css`
        background-color: #0d0d0d;
      `;
    }
  }}

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 30px;
  }

  @media (min-width: 1200px) {
    padding: 10px 100px;
  }
`;
