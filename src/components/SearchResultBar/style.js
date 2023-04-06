import styled from "styled-components";

export const StyledSearchResultBar = styled.div`
margin-top: 180px;
height: 100px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


h2{
    font-size: 26px;
    font-weight: 700;

    span{
        color: #828282;
    }
}

button{
    width: 130px;
    height: 40px;
    color: white;
    background-color: var(--color-green-1);
    border-radius: 8px;
    margin-top: 10px;
}

@media(min-width:769px){
    margin-top: 80px;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 30px;
    position: relative;
    bottom: 15px;
}

@media (min-width: 1200px) {
        padding: 10px 100px;
  }
`