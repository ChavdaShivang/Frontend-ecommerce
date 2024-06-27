import { createSlice } from "@reduxjs/toolkit";
import { publicRequest, userRequest } from "../requestMethods";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      const index = state.products.findIndex((item) => item._id == product._id);
      if (index != -1) {
        state.products[index].quantity += 1;
      } else {
        state.quantity += 1;
        state.products.push(action.payload);
      }
      state.total += action.payload.price * action.payload.quantity;
    },
    clearCart: (state) => {
      localStorage.removeItem("persist:root");
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
    incrementQuantity: (state, action) => {
      state.products = state.products.map((product) =>
        product._id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      const product = state.products.filter(
        (product) => product._id === action.payload
      );
      state.total += product[0].price;
    },
    decrementQuantity: (state, action) => {
      const updatedProducts = state.products
        .map((product) => {
          if (product._id === action.payload) {
            if (product.quantity > 1) {
              return { ...product, quantity: product.quantity - 1 };
            } else {
              return null;
            }
          }
          return product;
        })
        .filter(Boolean);

      const decrementedProduct = state.products.find(
        (product) => product._id === action.payload
      );
      state.products = updatedProducts;
      state.quantity = updatedProducts.length;
      console.log("DP ", decrementedProduct);
      if (decrementedProduct) {
        state.total -= decrementedProduct.price;
      }
    },
    updateCart: (state, action) => {
      state.products = action.payload.products;
      state.quantity = action.payload.products.length;
      state.total = action.payload.products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
  },
});

export const {
  addProduct,
  clearCart,
  incrementQuantity,
  decrementQuantity,
  updateCart,
} = cartSlice.actions;

export const fetchCart = (userId) => async (dispatch) => {
  try {
    const res = await userRequest.get(`/carts/find/${userId}`);
    if (res.data.products.length !== 0) {
      dispatch(updateCart(res.data));
    }
  } catch (err) {
    console.error("Failed to fetch cart:", err);
  }
};
export default cartSlice.reducer;
