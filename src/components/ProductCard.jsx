import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 max-w-xs mx-auto md:max-w-sm lg:max-w-md mb-6">
      {" "}
      {/* Add bottom margin for spacing */}
      <img
        className="h-[400px] w-[300px] object-cover rounded-lg transition-transform duration-300 ease-in-out"
        src={item.img}
        alt={item.title}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link to={`/products/${item._id}`}>
          <span className="text-white font-semibold text-lg bg-gray-800 p-2 rounded transition-colors duration-300 hover:bg-gray-700">
            Shop Now
          </span>
        </Link>
      </div>
      <div className="p-4">
        {" "}
        {/* Added padding for spacing */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {item.title}
        </h2>{" "}
        {/* Add title with margin */}
        <p className="text-gray-600 mb-4">
          {" "}
          {/* Description with margin */}
          {item.description}
        </p>
      </div>
    </div>
  );
}
