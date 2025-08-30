import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FiEye } from 'react-icons/fi'
import { CiHeart } from 'react-icons/ci'
import ProductRating from './ProductRating'


const ProductRightPart = () => {

  const [productData, setProductData] = useState([])

  useEffect(() => {

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProductData(data.products))

  }, [])

  console.log(productData)


  // const productData = [

  //  {
  //   name: 'The north coat',
  //   price: '$260',
  //   image: products
  //  }

  // ]

  return (
    <div>
      <div className='mt-[60px] flex flex-wrap gap-x-[30px] items-center'>
        {
          productData.map((product) => (

            <div className='mb-6'>
              <div className='w-[270px] group relative rounded flex flex-col justify-center items-center py-[52px] px-[65px] bg-[#F5F5F5]'>
                <div className='absolute top-3 right-3'>
                  <div className='w-[34px] h-[34px] flex justify-center items-center  rounded-full bg-white'>
                    <CiHeart className='' size={24} />
                  </div>
                  <div className='w-[34px] h-[34px] mt-2 flex justify-center items-center rounded-full bg-white'>
                    <FiEye className='' size={24} />
                  </div>
                </div>
                <img src={product.thumbnail} alt="" />
                <div>
                  <button className='w-full hidden transition-all duration-300 group-hover:block text-center absolute bottom-0 left-0 py-2 font-primary font-medium text-white bg-black'>Add To Cart</button>
                </div>
              </div>
              <div>
                <p className='font-primary font-medium mt-4 '>The north coat</p>
                <h3 className='font-primary font-medium mt-2 text-primary'>{product.price} <del className='text-black/50 font-primary font-medium ml-2'>$360</del></h3>
                <div className='flex items-center mt-2 gap-x-1'>
                  {/* <div className='flex'>
                          <FaStar className='text-[#FFAD33]' />
                          <FaStar className='text-[#FFAD33]' />
                          <FaStar className='text-[#FFAD33]' />
                          <FaStar className='text-[#FFAD33]' />
                          <FaStar className='text-[#FFAD33]' />
                        </div> */}
                  <div>
                    <ProductRating rating={product.rating} />
                  </div>
                  <p className='font-primary font-semibold text-black/50'>{product.reviews.lenght}</p>
                </div>
              </div>
            </div>

          ))
        }
      </div>
    </div>
  )
}

export default ProductRightPart
