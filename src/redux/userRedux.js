import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isFetching = false;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(logoutAsync.fulfilled, (state, action) => {
  //     state.currentUser = null;
  //     alert("Logged out");
  //   });
  // },
});

// export const logoutAsync = createAsyncThunk("user/logout", async (token) => {
//   const persistData = JSON.parse(localStorage.getItem("persist:root"));

//   const res = await axios({
//     method: "post",
//     url: "http://localhost:5000/api/users/logout",
//     headers: {
//       token: `Bearer ${token}`,
//     },
//     data: {
//       data: persistData,
//     },
//   });

//   return res.data;
// });

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;
export default userSlice.reducer;
