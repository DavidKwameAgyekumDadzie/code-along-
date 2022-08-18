import React, {useEffect, useState} from 'react'
import Product from './Product'
import axios from "axios"

function ProductList() {
    const [products, setProducts] = useState ([]);
    useEffect(() => {
        const getProducts = async ()  => {
            const davids = await axios.get(
                "https://api.escuelajs.co/api/v1/products"
            );
            // the console log is use to check whether what you did is correct in the browser
            // console.log(davids)
            setProducts(davids.data)
        };
        getProducts();

    }, []); 
    return  (

        <div className=' flex flex-wrap gap-2 pt-10 mt 5 justify-center items-center'>
          {products.map((product) => (
                 <Product item={product} />
          ))}
         
      </div>
    )
}


export default ProductList;