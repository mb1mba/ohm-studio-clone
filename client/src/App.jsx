import Routers from "./routes/Routers";
import { ProductsProvider } from "./context/productsContext";
import { CartProvider } from "./context/cartContext";
function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <Routers />
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
