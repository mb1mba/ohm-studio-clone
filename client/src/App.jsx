import Routers from "./routes/Routers";
import { ProductsProvider } from "./context/productsContext";
import { CartProvider } from "./context/cartContext";
import { UserProvider } from "./context/authContext";

function App() {
  return (
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <Routers />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  );
}

export default App;
