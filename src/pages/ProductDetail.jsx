import React from 'react'
import { useParams } from 'react-router-dom'
import useAxios from '../Hooks/useAxios';

const ProductDetail = () => {
    const { productId } = useParams();
    // console.log(parameters);
    const { data } = useAxios(`https://api.escuelajs.co/api/v1/products/1`);
  return (
    <div className='min-h-screen bg-orange-500 flex justify-center items-center'> 
      <div className='max-w-5xl bg-white grid grid-cols-2 rounded-lg'>
        <div>
            <img src={data?.images[0]} alt="" />
            <div className='flex'>
              {data?.images.map((image, index) => (
                <img className='w-40 flex-1 p-2' key={index} src={image} alt="" />
                ))}
            </div>
        </div>
        <div className='p-10'>
          <h2 className='font-bold justify-center'>Hello</h2>
          <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate voluptatibus delectus esse corporis vero dolor repellat ad harum nihil dicta!
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail;
