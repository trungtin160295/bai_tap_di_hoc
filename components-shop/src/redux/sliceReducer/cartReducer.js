import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartProduct",
  initialState: [
    {
      id: 1,
      ductName: "111",
      color: "22",
      size: "1",
      quantity: "1",
      price: "111",
    },
  ],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
  },
});
export default cartSlice;
