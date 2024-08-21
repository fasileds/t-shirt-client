import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  return (
    <div>
      <div className="flex items-center justify-center cursor-pointer hover:*: transition-transform ease-out delay-1000">
        <img class="h-auto max-w-full rounded-lg" src={item.img} alt="" />
        <Link to={`/products/${item._id}`}>
          <span className="font-white absolute items-center ">shop now</span>
        </Link>
      </div>
    </div>
  );
}
