import styled from "styled-components";

export const StyledHeader = styled.div`
  padding: 14px 16px;
  background-color: #f5f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 30px;
  }

  @media (min-width: 1200px) {
    padding: 10px 100px;
  }
`;
