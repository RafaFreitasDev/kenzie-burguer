import styled from "styled-components";

export const StyledCardCart = styled.li`
  height: 70px;
  width: 300px;
  display: flex;
  justify-content: space-between;

  .figurePlusName {
    display: flex;
  }

  figure {
    height: 70px;
    width: 70px;
    img {
      height: 100%;
    }
  }
  button {
    align-self: flex-start;
    color: #bdbdbd;
    margin-top: 10px;
  }
  div {
    margin-left: 20px;
    margin-top: 10px;
    h2 {
      font-size: 14px;
      font-weight: 700;
      justify-items: flex-start;
    }
    h4 {
      font-size: 12px;
      color: #828282;
      margin-top: 10px;
    }
  }
`;
