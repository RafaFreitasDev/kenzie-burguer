import styled from "styled-components";

export const StyledCart = styled.div`
  width: 340px;
  background-color: #f5f5f5;
  margin-top: 20px;
  align-self: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  .head {
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

  ul {
    display: flex;
    flex-direction: column;
    padding: 25px;
    gap: 20px;
    border-bottom: 1px solid #bcbcbc;
  }

  .total {
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
  }

  @media (min-width: 769px) {
    align-self: flex-start;
    margin-top: 95px;
  }

  @media (max-width: 321px) {
    width: 290px;
    ul {
      li {
        width: 290px;
        justify-content: flex-start;

        .figurePlusName {
          display: flex;
        }

        figure {
          height: 50px;
          width: 50px;
        }
        button {
          margin-left: 25px;
        }
      }
    }
  }
`;
