import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actions";

const initialstate = {
  products: [],
};

const productsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default productsReducer;
