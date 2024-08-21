import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    product: [],
    totalQuantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.product.find(
        (item) => item._id === action.payload._id
      );

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.product.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }

      state.totalQuantity += action.payload.quantity;
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      const productToRemove = state.product.find(
        (item) => item._id === productId
      );

      if (productToRemove) {
        state.totalQuantity -= productToRemove.quantity;
        state.total -= productToRemove.price * productToRemove.quantity;
        state.product = state.product.filter((item) => item._id !== productId);
      }
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.product.find((item) => item._id === productId);

      if (product) {
        product.quantity += 1;
        state.total += product.price; // Increase total price by the product price
        state.totalQuantity += 1; // Increase total quantity by 1
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.product.find((item) => item._id === productId);

      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.total -= product.price; // Decrease total price by the product price
        state.totalQuantity -= 1; // Decrease total quantity by 1
      }
    },
    clearCart: (state) => {
      state.product = [];
      state.totalQuantity = 0;
      state.total = 0;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
