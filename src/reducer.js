import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Get all user action
// export const getAllProducts = createAsyncThunk(
//   "getAllProducts",
//   async (args) => {
//     try {
//       const response = await fetch(
//         `https://6461c1c2491f9402f4aa0565.mockapi.io/products`
//       );
//       const result = await response.json();
//       console.log(result);
//       return result;
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

export const getProductsSlice = createSlice({
  name: "getAllProducts",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    getProducts: (state, action) => {
      state.loading = true;
      state.products = action.payload;
    },
  },
});

export const { getProducts } = getProductsSlice.actions;
