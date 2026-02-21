import { createSlice } from "@reduxjs/toolkit";

// 🔥 Load data from localStorage (if exists)
const storedAuth = localStorage.getItem("auth");

const initialState = storedAuth
  ? JSON.parse(storedAuth)
  : {
      user: null,
      token: null,
      error: null,
    };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = {
        id: action.payload.data.id,
        email: action.payload.data.email,
        role: action.payload.data.role,
        username: action.payload.data.username,
      };

      state.token = action.payload.data.token;

      // 🔥 Save entire auth state
      localStorage.setItem(
        "auth",
        JSON.stringify({
          user: state.user,
          token: state.token,
          error: null,
        })
      );
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;

      // 🔥 Remove everything
      localStorage.removeItem("auth");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;