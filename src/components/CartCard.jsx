import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import {
  clearCart,
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/product";

export default function CartCard({ cartItem }) {
  const dispatch = useDispatch();

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-full p-5 flex justify-center bg-gray-100">
      {/* Main Flex Container */}
      <div className="flex w-full max-w-6xl bg-white shadow-lg rounded-lg p-6">
        {/* Left Container */}
        <div className="flex-1">
          <h1 className="text-center font-semibold text-4xl mb-10 text-gray-800">
            YOUR BAG
          </h1>
          <div className="flex items-center justify-between mb-10">
            <button className="p-3 font-semibold cursor-pointer bg-transparent border border-gray-800 hover:bg-gray-800 hover:text-white transition duration-300 rounded-lg">
              CONTINUE SHOPPING
            </button>
            <div className="hidden md:flex">
              <span className="underline cursor-pointer mx-3 text-gray-600 hover:text-gray-800 transition duration-300">
                Shopping Bag(2)
              </span>
              <span className="underline cursor-pointer mx-3 text-gray-600 hover:text-gray-800 transition duration-300">
                Your Wishlist (0)
              </span>
            </div>
            <button className="p-3 font-semibold cursor-pointer bg-gray-800 text-white hover:bg-gray-900 transition duration-300 rounded-lg">
              CHECKOUT NOW
            </button>
          </div>
          {cartItem.product.map((product) => (
            <div
              key={product._id}
              className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-4 rounded-lg mb-6 shadow-sm"
            >
              <div className="flex-1 flex items-center">
                <img
                  src={product.img}
                  alt="Product"
                  className="w-40 h-40 object-cover rounded-lg shadow-md"
                />
                <div className="ml-5 flex flex-col justify-around">
                  <span className="font-semibold text-gray-800">
                    <b>Product:</b> {product.title}
                  </span>
                  <span className="text-gray-600">
                    <b>ID:</b> {product._id}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-yellow-400 mt-2"></div>
                  <span className="text-gray-600 mt-2">
                    <b>Size:</b> {product.size}
                  </span>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="flex items-center mb-5">
                  <button
                    onClick={() => handleIncreaseQuantity(product._id)}
                    className="text-gray-600 hover:text-gray-800 transition duration-300"
                  >
                    <AddIcon />
                  </button>
                  <div className="text-2xl mx-4">{product.quantity}</div>
                  <button
                    onClick={() => handleDecreaseQuantity(product._id)}
                    className="text-gray-600 hover:text-gray-800 transition duration-300"
                  >
                    <RemoveIcon />
                  </button>
                  <button
                    onClick={() => handleRemoveProduct(product._id)}
                    className="flex items-center justify-center p-2 ml-8 bg-red-500 rounded-full hover:bg-red-600 transition duration-300"
                  >
                    <DeleteIcon className="text-white w-6 h-6" />
                  </button>
                </div>
                <div className="text-3xl font-light text-gray-800">
                  ${product.price * product.quantity}{" "}
                  {/* Update total price for this product */}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Right Container */}
        <div className="border-2 border-gray-300 rounded-lg p-6 bg-gray-50 shadow-sm ml-10 w-80">
          <h1 className="font-semibold text-2xl mb-5 text-gray-800">
            ORDER SUMMARY
          </h1>
          <div className="my-7 flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>${cartItem.total}</span>
          </div>
          <div className="my-7 flex justify-between text-gray-600">
            <span>Estimated Shipping</span>
            <span>$5.90</span>
          </div>
          <div className="my-7 flex justify-between text-gray-600">
            <span>Shipping Discount</span>
            <span>$-5.90</span>
          </div>
          <div className="my-7 flex justify-between font-semibold text-xl text-gray-800">
            <span>Total</span>
            <span>${cartItem.total}</span>
          </div>
          <button
            onClick={handleClearCart}
            className="w-full p-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition duration-300"
          >
            CHECKOUT NOW
          </button>
        </div>
      </div>
    </div>
  );
}
