import Routers from "./routes/Routers";
import { ProductsProvider } from "./context/productsContext";

function App() {
  return (
    <ProductsProvider>
      <Routers />
    </ProductsProvider>
  );
}

export default App;
