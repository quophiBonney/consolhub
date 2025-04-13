// src/store/slices/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  vendor: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

// Async thunk for user signup
export const userSignup = createAsyncThunk(
  "auth/userSignup",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:4040/api/auth/signup", userData);
      return response.data; // assume API returns the created user data
    } catch (error) {
      // Reject with error response from the backend
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "User signup failed."
      );
    }
  }
);
export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:4040/api/auth/login",
        userData
      );
      return response.data; // assume API returns user data & token
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "User login failed."
      );
    }
  }
);

// Async thunk for vendor signup
export const vendorSignup = createAsyncThunk(
  "auth/vendorSignup",
  async (vendorData, thunkAPI) => {
    try {
      // Create vendorData as formData if file upload is involved
      const response = await axios.post("http://localhost:4040/api/auth/vendor", vendorData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data; // assume API returns the created vendor data
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Vendor signup failed."
      );
    }
  }
);
export const vendorLogin = createAsyncThunk(
  "auth/vendorLogin",
  async (vendorData, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:4040/api/auth/vendor/login",
        vendorData
      );
      return response.data; // assume API returns vendor data & token
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Vendor login failed."
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.vendor = null;
      state.isAuthenticated = false;
    },
    // You can add additional synchronous actions here if needed.
  },
  extraReducers: (builder) => {
    // User Signup
    builder
      .addCase(userSignup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userSignup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(userSignup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // Vendor Signup
    builder
      .addCase(vendorSignup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(vendorSignup.fulfilled, (state, action) => {
        state.loading = false;
        state.vendor = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(vendorSignup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // User Login
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Vendor Login
    builder
      .addCase(vendorLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(vendorLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.vendor = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(vendorLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
