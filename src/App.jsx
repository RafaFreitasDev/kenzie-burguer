import { useState, useEffect } from "react";
import { api } from "./services/api";
import { Header } from "./components/Header/Header";
import { ProductList } from "./components/ProductList/ProductList";
import { EmptyCart } from "./components/EmptyCart/EmptyCart";
import { Cart } from "./components/Cart/Cart";
import { StyledMain } from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const localBuyList = localStorage.getItem("@BurguerKenzie:Carrinho");
  const localTotalPrice = localStorage.getItem("@BurguerKenzie:Preco");
  const [products, setProducts] = useState([]);
  const [buyList, setBuyList] = useState(localBuyList?JSON.parse(localBuyList):[]);
  const [searchWord, setSearchWord] = useState("");
  const [totalPrice, setTotalPrice] = useState(localTotalPrice?JSON.parse(localTotalPrice):0);
  const [isSearch, setIsSearch] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);

  useEffect(()=>{
    localStorage.setItem("@BurguerKenzie:Carrinho", JSON.stringify(buyList))
  },[buyList])

  useEffect(()=>{
    localStorage.setItem("@BurguerKenzie:Preco", JSON.stringify(totalPrice))
  },[totalPrice])

  function darkMode() {
    setDark(!dark);
  }
console.log(products);
  async function cleanSearch() {
    try {
      const response = await api.get("products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
    setIsSearch(!isSearch);
  }

  function search(wordToSearch) {
    if (wordToSearch === "") {
      toast.error("Digite alguma busca");
    } else {
      const searchedProducts = products.filter((product) => {
        return (
          product.name.toLowerCase().includes(wordToSearch.toLowerCase()) ||
          product.category.toLowerCase().includes(wordToSearch.toLowerCase())
        );
      });
      setProducts(searchedProducts);
      setIsSearch(!isSearch);
    }
  }

  function addProductToCart(item) {
    if (!buyList.some((product) => product.name === item.name)) {
      setBuyList([...buyList, item]);
      setTotalPrice(totalPrice + item.price);
    } else {
      toast.error("Já existe este item no carrinho");
    }
  }

  function removeProductToCart(item) {
    const removed = buyList.filter((product) => product !== item);
    setBuyList(removed);
    setTotalPrice(totalPrice - item.price);
  }

  function removeAll() {
    setBuyList([]);
    setTotalPrice(0);
  }

  return (
    <div className="App">
      <Header
        search={search}
        cleanSearch={cleanSearch}
        setSearchWord={setSearchWord}
        darkMode={darkMode}
      />
      <StyledMain dark={dark}>
        <ProductList
          products={products}
          addProductToCart={addProductToCart}
          isSearch={isSearch}
          cleanSearch={cleanSearch}
          searchWord={searchWord}
        />
        {buyList.length == 0 ? (
          <EmptyCart />
        ) : (
          <Cart
            buyList={buyList}
            removeProductToCart={removeProductToCart}
            totalPrice={totalPrice}
            removeAll={removeAll}
          />
        )}
      </StyledMain>

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
