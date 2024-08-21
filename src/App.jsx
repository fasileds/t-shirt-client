import { useSelector } from "react-redux";
import "./App.css";
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";
import LogIn from "./pages/LogIn.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ProductsListPage from "./pages/ProductsListPage.jsx";
import Register from "./pages/Register.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <LogIn />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductsListPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
