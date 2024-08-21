import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function CartCard({ cartItem }) {
  return (
    <div className="w-full p-5 flex">
      {/* Main Flex Container */}
      <div className="flex w-full">
        {/* Left Container */}
        <div className="flex-1">
          <h1 className="text-center font-light text-3xl mb-10">YOUR BAG</h1>
          <div className="flex items-center justify-between mb-10">
            <button className="p-2 font-semibold cursor-pointer bg-transparent border border-black">
              CONTINUE SHOPPING
            </button>
            <div className="hidden md:flex">
              <span className="underline cursor-pointer mx-2">
                Shopping Bag(2)
              </span>
              <span className="underline cursor-pointer mx-2">
                Your Wishlist (0)
              </span>
            </div>
            <button className="p-2 font-semibold cursor-pointer bg-black text-white">
              CHECKOUT NOW
            </button>
          </div>
          {cartItem.product.map((product) => (
            <div
              key={product.id}
              className="flex flex-col md:flex-row justify-between"
            >
              <div className="flex-1">
                <div className="flex flex-col md:flex-row justify-between mb-5">
                  <div className="flex flex-1">
                    <img src={product.img} alt="Product" className="w-40" />
                    <div className="p-5 flex flex-col justify-around">
                      <span>
                        <b>Product:</b> {product.title}
                      </span>
                      <span>
                        <b>ID:</b> {product.id}
                      </span>
                      <div className="w-5 h-5 rounded-full bg-yellow-400"></div>
                      <span>
                        <b>Size:</b> {product.size}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="flex items-center mb-5">
                      <AddIcon />
                      <div className="text-2xl mx-2">{cartItem.quantity}</div>
                      <RemoveIcon />
                    </div>
                    <div className="text-3xl font-light">${product.price}</div>
                  </div>
                </div>
                <hr className="bg-gray-300 border-none h-px" />
              </div>
            </div>
          ))}
        </div>
        {/* Right Container */}
        <div
          className="border-2 border-gray-300 rounded-md p-5"
          style={{ marginLeft: "70px", width: "300px", maxWidth: "100%" }}
        >
          <h1 className="font-light text-2xl mb-5">ORDER SUMMARY</h1>
          <div className="my-7 flex justify-between">
            <span>Subtotal</span>
            <span>${cartItem.total}</span>
          </div>
          <div className="my-7 flex justify-between">
            <span>Estimated Shipping</span>
            <span>$5.90</span>
          </div>
          <div className="my-7 flex justify-between">
            <span>Shipping Discount</span>
            <span>$-5.90</span>
          </div>
          <div className="my-7 flex justify-between font-semibold text-xl">
            <span>Total</span>
            <span>${cartItem.total}</span>
          </div>
          <button className="w-full p-2 bg-black text-white font-semibold">
            CHECKOUT NOW
          </button>
        </div>
      </div>
    </div>
  );
}
