import React from "react";
import Navbar from "../components/Navbar";
import Product from "../components/product";
import Footer from "../components/footer";
import Products from "../components/producst";

export default function ProductsListPage() {
  return (
    <div>
      <Navbar />
      <Products />
      <Footer />
    </div>
  );
}
