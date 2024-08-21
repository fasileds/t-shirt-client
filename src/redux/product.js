import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    product: [],
    quantity: 1,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      (state.quantity += 1),
        state.product.push(action.payload),
        (state.total += action.payload.price * action.payload.quantity);
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
