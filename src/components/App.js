import Navbar from "./Navbar";
import Products from "./Products";
import ProductsContext from "../context/ProductsContext";
import Main from "./Main";

function App() {
  return (
    <>
      <ProductsContext>
        <Navbar />
        <Products />
        <Main>
          <Main.Current />
        </Main>
      </ProductsContext>
    </>
  );
}

export default App;
