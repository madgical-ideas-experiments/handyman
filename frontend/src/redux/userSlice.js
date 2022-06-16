import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    mobileNumber: "",
    name: "",
    email: "",
    role: "customer",
    service: "none",
    location: [],
    isLogin: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.mobileNumber = action.payload.mobileNumber;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.service = action.payload.service;
      state.location = action.payload.location;
      state.isLogin = true;
    },
    logout: (state) => {
      state.mobileNumber = "";
      state.name = "";
      state.email = "";
      state.role = "customer";
      state.service = "none";
      state.location = [];
      state.isLogin = false;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
