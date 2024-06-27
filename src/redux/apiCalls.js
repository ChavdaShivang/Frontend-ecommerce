import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";
import { updateCart } from "./cartRedux";
import { userRequest } from "../requestMethods";
import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await userRequest.post("/auth/login", user);
    if (res.status === 200) {
      const user = res.data;
      dispatch(loginSuccess(user));

      // Fetch the user's cart after successful login
      const cartRes = await userRequest.get(`/carts/find/${user._id}`);
      if (cartRes.status === 200) {
        const cart = cartRes.data;
        dispatch(updateCart(cart)); // Dispatch action to update cart in Redux store
      }
    }
  } catch (err) {
    console.error("Login failed:", err);
  }
};
