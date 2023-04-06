import { StyledCardCart } from "./style";

export function CardCart({ product, removeProductToCart }) {
  return (
    <StyledCardCart>
      <span className="figurePlusName">
        <figure>
          <img src={product.img} alt="" />
        </figure>
        <div>
          <h2>{product.name}</h2>
          <h4>{product.category}</h4>
        </div>
      </span>
      <button onClick={() => removeProductToCart(product)}>Remover</button>
    </StyledCardCart>
  );
}
