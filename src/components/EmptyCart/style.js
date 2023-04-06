import styled from "styled-components";

export const StyledEmptyCart = styled.div`
  width: 340px;
  height: 225px;
  background-color: #f5f5f5;
  margin-top: 20px;
  align-self: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  div {
    background-color: var(--color-green-1);
    color: white;
    height: 65px;
    font-size: 18px;
    font-weight: 700;
    display: flex;
    align-items: center;
    padding: 20px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    h2 {
      font-size: 18px;
      font-weight: 700;
      margin-top: 50px;
    }
    p {
      font-size: 14px;
      color: #828282;
      margin-top: 10px;
    }
  }

  @media (min-width: 769px) {
    align-self: flex-start;
    margin-top: 95px;
  }

  @media (max-width: 321px) {
    width: 290px;
  }
`;
