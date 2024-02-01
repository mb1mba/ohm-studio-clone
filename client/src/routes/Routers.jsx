import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Filter, Layout } from "/src/layout";
import { Login, Register, Home, Product, Products, Profile } from "/src/pages";
import { RequireAuth } from "/src/components/RequireAuth";
import { PersistLogin } from "/src/components/PersistLogin";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<PersistLogin />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Products />} />
            <Route element={<Filter />}>
              <Route path="/products" element={<Products />} />
              <Route
                path="collections/:collectionName"
                element={<Products />}
              />
            </Route>
            <Route path="/products/:productName" element={<Product />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<RequireAuth />}>
            <Route path="/account" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const Routers = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default Routers;
