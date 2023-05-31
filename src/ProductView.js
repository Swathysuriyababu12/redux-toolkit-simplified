import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "./reducer";

function ProductView() {
  const { id } = useParams();
  console.log(id);
  //const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(id));
    console.log(getSingleProduct(id));
  }, []);

  const { products, singleProduct } = useSelector((state) => state.app);
  console.log(singleProduct);
  console.log(products);
  var product = singleProduct[0];
  // let fetchProductInfo = async () => {
  //   try {
  //     const productInfo = await axios.get(
  //       `https://6461c1c2491f9402f4aa0565.mockapi.io/products/${id}`
  //     );
  //     setProduct(productInfo.data);
  //   } catch (error) {
  //     alert("Something went wrong");
  //   }
  // };

  return (
    singleProduct.length && (
      <div className="container text-center">
        <img src={product.imageLink} />
        <h1>{product.title}</h1>
        <h2>${product.price}</h2>
        <p>{product.description}</p>
      </div>
    )
  );
}

export default ProductView;
