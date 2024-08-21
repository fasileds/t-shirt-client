import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import CartCard from "../components/CartCard";
import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";

import product from "../redux/product";

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <Navbar />

      <CartCard cartItem={cart} />

      <Footer />
    </div>
  );
}
