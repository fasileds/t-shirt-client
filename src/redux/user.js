import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {},
    isFaching: false,
    error: false,
  },
  reducers: {
    logInStart: (state) => {
      state.isFaching = true;
    },
    logInSucces: (state, action) => {
      state.isFaching = false;
      state.currentUser = action.payload;
    },
    logInError: (state) => {
      (state.isFaching = false), (state.error = true);
    },
  },
});

export const { logInStart, logInSucces, logInError } = userSlice.actions;
export default userSlice.reducer;
