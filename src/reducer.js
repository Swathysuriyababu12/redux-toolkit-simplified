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
    singleProduct: [],
    loading: false,
    error: null,
  },
  reducers: {
    getProducts: (state, action) => {
      state.loading = true;
      state.products = action.payload;
    },
    createProduct: (state, action) => {
      state.loading = false;
      state.products.push(action.payload);
    },
    getSingleProduct: (state, action) => {
      state.loading = false;

      state.singleProduct = state.products.filter(
        (ele) => ele.id == action.payload
      );
      console.log(state.singleProduct);
    },
    deleteProduct: (state, action) => {
      state.loading = false;

      state.singleProduct = state.products.filter(
        (ele) => ele.id != action.payload
      );
      console.log(state.singleProduct);
    },
  },
});

export const { getProducts, createProduct, getSingleProduct, deleteProduct } =
  getProductsSlice.actions;
