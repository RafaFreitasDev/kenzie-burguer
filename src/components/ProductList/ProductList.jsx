import { StyledProductList } from "./style";
import { SearchResultBar } from "../SearchResultBar/SearchResultBar";

export function ProductList({ products, addProductToCart, isSearch, cleanSearch, searchWord }) {
  if (isSearch) {
    return (
      <div>
        <SearchResultBar cleanSearch={cleanSearch} searchWord={searchWord} />
        <StyledProductList isSearch={isSearch}>
          {products.map((product) => {
            return (
              <li key={product.id}>
                <div>
                  <img src={product.img} alt={product.name} />
                </div>
                <span>
                  <h2>{product.name}</h2>
                  <h4>{product.category}</h4>
                  <h3>R$ {product.price.toFixed(2)}</h3>
                  <button onClick={() => addProductToCart(product)}>
                    Adicionar
                  </button>
                </span>
              </li>
            );
          })}
        </StyledProductList>
      </div>
    );
  } else {
    return (      
      <StyledProductList>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <div>
                <img src={product.img} alt={product.name} />
              </div>
              <span>
                <h2>{product.name}</h2>
                <h4>{product.category}</h4>
                <h3>R$ {product.price.toFixed(2)}</h3>
                <button onClick={() => addProductToCart(product)}>
                  Adicionar
                </button>
              </span>
            </li>
          );
        })}
      </StyledProductList>
    );
  }
}
