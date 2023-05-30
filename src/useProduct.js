import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fulfilled, getAllProducts, getProductsSlice } from "./reducer";

function useProduct() {
  const [products, setProduct] = useState([]);
  const dispatch = useDispatch();

  let getData = async () => {
    const products = await axios.get(
      "https://6461c1c2491f9402f4aa0565.mockapi.io/products"
    );
    setProduct(products.data);
  };

  useEffect(() => {
    // On Mount
    // getData()
  }, []);
  return {
    products,
    getData,
  };
}

export default useProduct;
