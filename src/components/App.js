import Navbar from "./Navbar";
import Products from "./Products";
import ProductsContext from "../context/ProductsContext";
import Main from "./Main";
import Input from "./Input";

function App() {
  return (
    <>
      <ProductsContext>
        <Navbar />
        <Products />
        <Main>
          <Main.Current />
        </Main>
        <Input />
      </ProductsContext>
    </>
  );
}

export default App;
