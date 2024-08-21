import React, { useEffect, useState } from "react";
import { publicRequest } from "../requestMethod";
import { Link, redirect } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function Products() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const res = await publicRequest.get("/product");
      setProduct(res.data);
    };
    getProduct();
  }, []);

  return (
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 ml-10 mr-10 mb-10">
      {product.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
}
