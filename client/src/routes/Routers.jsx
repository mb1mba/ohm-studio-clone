import { Home, Login, Register, Product, Products } from "../pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layout";
import { Filter } from "../layout";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Products />} />
          <Route element={<Filter />}>
            <Route path="/products" element={<Products />} />
            <Route path="collections/:collectionName" element={<Products />} />
          </Route>
          <Route path="/products/:productName" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routers;
