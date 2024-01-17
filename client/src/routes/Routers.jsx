import { Home, Collections, Login, Register, Product } from "../pages";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Layout from "../layout"

const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/collections" element={<Collections />} />
                    <Route path="/collections/:collectionName" element={<div>this.collection</div>} />
                    <Route path="/products/:productName" element={<Product />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default Routers