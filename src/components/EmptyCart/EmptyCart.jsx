import { StyledEmptyCart } from "./style";

export function EmptyCart(){
    return(<StyledEmptyCart>
        <div>
            <h2>Carrinho de compras</h2>
        </div>
        <span>
            <h2>Sua lista está vazia</h2>
            <p>Adicione itens</p>
        </span>
    </StyledEmptyCart>)
    
}