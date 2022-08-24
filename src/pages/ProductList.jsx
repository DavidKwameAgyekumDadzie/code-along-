import React, {useEffect, useState} from 'react'
import Product from '../components/Product'
import axios from "axios"
import useAxios from '../Hooks/useAxios';
import Spinner from '../components/Spinner';


function ProductList() {
    
    const { data, isLoading, error } = useAxios("https://api.escuelajs.co/api/v1/products");

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
    console.log(data)
    if (isLoading) return <Spinner/>
    if (error) return <p>{error}</p>
    return  (

        <div className=' flex flex-wrap gap-2 pt-10 mt-5 justify-center items-center'>
          {data.map((data) => (
                 <Product item={data} />
          ))}
         
      </div>
    );
};


export default ProductList;