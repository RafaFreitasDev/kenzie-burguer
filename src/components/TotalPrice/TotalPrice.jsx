import { StyledTotalPrice } from "./style";

export function TotalPrice ({totalPrice,removeAll}){
    return(
        <StyledTotalPrice>
            <div>
          <h3>Total</h3>
          <p>R$ {totalPrice.toFixed(2)}</p>
        </div>
        <button onClick={removeAll}>Remover todos</button>
        </StyledTotalPrice>
    )
}