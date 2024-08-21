import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/slider";
import Product from "../components/product";
import Footer from "../components/footer";
import Products from "../components/producst";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Products />
      <Footer />
    </div>
  );
}
