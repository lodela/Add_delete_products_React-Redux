import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    products: [],
  },
  reducers: {
    addProductToBasket: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (-1 === productIndex) {
        state.products.push({
          ...action.payload,
          quantity: 1,
        });
      } else {
        state.products[productIndex].quantity++;
      }
    },
    removeProductFromBasket: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload
      );

      if (-1 === productIndex) {
        if (state.products[productIndex].quantity === 1) {
          state.products.splice(productIndex, 1);
        }
      } else {
        state.products[productIndex].quantity--;
      }
    },
  },
});

export const { addProductToBasket, removeProductFromBasket } =
  basketSlice.actions;
export default basketSlice.reducer;
