import styled from "styled-components";

export const StyledTotalPrice = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: space-between;
    h3 {
      font-size: 14px;
      font-weight: 600;
      margin-top: 10px;
    }
    p {
      font-size: 14px;
      font-weight: 600;
      color: #828282;
      margin-top: 10px;
    }
  }
  button {
    background-color: #e0e0e0;
    color: #828282;
    height: 60px;
    border-radius: 8px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;
