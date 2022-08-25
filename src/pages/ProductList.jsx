import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import useAxios from "../Hooks/useAxios";
import Spinner from "../components/Spinner";
import { useProductContext } from "../context/productContext";

function ProductList() {
  // const { data, isLoading, error } = useAxios(
  //   "https://api.escuelajs.co/api/v1/products"
  // );
  const { data, isLoading, error } = useAxios(
    "https://fakestoreapi.com/products"
  );
  const { products, setProducts } = useProductContext();

  // useEffect(() => {
  //     const getProducts = async ()  => {
  //         const davids = await axios.get(
  //             "https://api.escuelajs.co/api/v1/products"
  //         );
  //         // the console log is use to check whether what you did is correct in the browser
  //         // console.log(davids)
  //         setProducts(davids.data);
  //     };
  //     getProducts();

  // }, []);
  // console.log(data);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <p>{error}</p>;
  }

  console.log(products);

  return (
    <div className=" flex flex-wrap gap-2 pt-10 mt-5 justify-center items-center">
      {/* {data.map((data) => ( NB:change data in the mapping to products */}
      {products?.map((data) => (
        <Product item={data} />
      ))}
    </div>
  );
}

export default ProductList;
