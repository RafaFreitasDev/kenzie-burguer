import styled, { css } from "styled-components";

export const StyledProductList = styled.ul`
  display: flex;
  gap: 20px;
  padding: 15px;
  overflow-x: auto;
  justify-content: flex-start;

  ${({ isSearch }) => {
    if (isSearch) {
      return css`
        margin-top: 0px;
      `;
    } else {
      return css`
        margin-top: 180px;
      `;
    }
  }}

  li {
    height: 345px;
    min-width: 250px;
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    background-color: white;

    div {
      height: 42%;
      display: flex;
      justify-content: center;
      background-color: #f5f5f5;

      img {
        height: 100%;
      }
    }

    span {
      padding: 22px;
      display: flex;
      flex-direction: column;
      
      h2 {
        font-size: 18px;
        font-weight: 700;
        color: var(--color-gray-100);
      }

      h4 {
        font-size: 12px;
        color: #828282;
        margin-top: 15px;
      }

      h3 {
        font-size: 14px;
        font-weight: 600;
        color: var(--color-green-1);
        margin-top: 15px;
      }

      button {
        width: 100px;
        height: 40px;
        color: white;
        border-radius: 8px;
        background-color: var(--color-green-1);
        margin-top: 15px;
      }
    }
  }

  @media (min-width: 769px) {
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 520px;
    gap: 10px;
    padding: 15px 0;
    overflow-x: unset;
    height: 710px;

    ${(props) => {
      if (props.isSearch) {
        return css`
          margin-top: 0px;
        `;
      } else {
        return css`
          margin-top: 80px;
        `;
      }
    }}
  }

  @media (min-width: 1200px) {
    width: 770px;
  }
`;
