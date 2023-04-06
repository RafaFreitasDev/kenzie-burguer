import { StyledCart } from "./Style";
import { CardCart } from "../CardCart/CardCart";
import { TotalPrice } from "../TotalPrice/TotalPrice";

export function Cart({ buyList, removeProductToCart, totalPrice, removeAll }) {
  return (
    <StyledCart>
      <div className="head">
        <h2>Carrinho de compras</h2>
      </div>
      <ul>
        {buyList.map((product) => {
          return (
            <CardCart
              key={product.id}
              product={product}
              removeProductToCart={removeProductToCart}
            />
          );
        })}
      </ul>
      <TotalPrice totalPrice={totalPrice} removeAll={removeAll} />
    </StyledCart>
  );
}
