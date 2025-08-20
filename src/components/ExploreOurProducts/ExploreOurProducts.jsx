import React, { useState } from 'react'
import Container from '../Layout/Container'
import { FaStar } from 'react-icons/fa'
import { FiEye } from 'react-icons/fi'
import { CiHeart } from 'react-icons/ci'
import products from '../../assets/products.png'
import SectionHead from '../HeadingSection/SectionHead';

const ExploreOurProducts = () => {

const [visible, setVisible] = useState(8)

const HandleLoadData = () =>{

  setVisible((prev)=> prev+4)

}

const productData = [

 {
  name: 'The north coat',
  price: '$260',
  image: products
 },
 {
  name: 'The north coat',
  price: '$260',
  image: products
 },
 {
  name: 'The north coat',
  price: '$260',
  image: products
 },
 {
  name: 'The north coat',
  price: '$260',
  image: products
 },
 {
  name: 'The north coat',
  price: '$260',
  image: products
 },
 {
  name: 'The north coat',
  price: '$260',
  image: products
 },
 {
  name: 'The north coat',
  price: '$260',
  image: products
 },
 {
  name: 'The north coat',
  price: '$260',
  image: products
 },
 {
  name: 'The north coat',
  price: '$260',
  image: products
 },
 {
  name: 'The north coat',
  price: '$260',
  image: products
 },
 {
  name: 'The north coat',
  price: '$260',
  image: products
 },
 {
  name: 'The north coat',
  price: '$260',
  image: products
 },
 {
  name: 'The north coat',
  price: '$260',
  image: products
 },
 {
  name: 'The north coat',
  price: '$260',
  image: products
 },
 {
  name: 'The north coat',
  price: '$260',
  image: products
 },
 {
  name: 'The north coat',
  price: '$260',
  image: products
 },
 {
  name: 'The north coat',
  price: '$260',
  image: products
 },
 {
  name: 'The north coat',
  price: '$260',
  image: products
 },


]


  return (
    <div className='pb-[42px]'>
      <Container>
        <div>
          <div className='mt-[27px]'>
            <SectionHead>
              Our Products
            </SectionHead>
          </div>
          <div className=' mt-[20px]'>
            <h3 className='font-secondary font-semibold text-[36px] tracking-[4%]'>Explore Our Products</h3>
          </div>
          <div className='mt-[60px] flex flex-wrap gap-x-[30px] items-center'>
              {
                productData.slice(0, visible).map((product)=>(

                    <div>
              <div className='w-[270px] group relative rounded flex flex-col justify-center items-center py-[52px] px-[65px] bg-[#F5F5F5]'>
                <div className='absolute top-3 right-3'>
                  <div className='w-[34px] h-[34px] flex justify-center items-center  rounded-full bg-white'>
                    <CiHeart className='' size={24} />
                  </div>
                  <div className='w-[34px] h-[34px] mt-2 flex justify-center items-center rounded-full bg-white'>
                    <FiEye className='' size={24} />
                  </div>
                </div>
                <img src={product.image} alt="" />
                <div>
                  <button className='w-full hidden transition-all duration-300 group-hover:block text-center absolute bottom-0 left-0 py-2 font-primary font-medium text-white bg-black'>Add To Cart</button>
                </div>
              </div>
              <div>
                <p className='font-primary font-medium mt-4 '>{product.name}</p>
                <h3 className='font-primary font-medium mt-2 text-primary'>{product.price} <del className='text-black/50 font-primary font-medium ml-2'>$360</del></h3>
                <div className='flex items-center mt-2 gap-x-1'>
                  <div className='flex'>
                    <FaStar className='text-[#FFAD33]' />
                    <FaStar className='text-[#FFAD33]' />
                    <FaStar className='text-[#FFAD33]' />
                    <FaStar className='text-[#FFAD33]' />
                    <FaStar className='text-[#FFAD33]' />
                  </div>
                  <p className='font-primary font-semibold text-black/50'>(65)</p>
                </div>
              </div>
            </div>

                ))
              }
          </div>
        </div>
          {visible < productData.length && (
        <div className='mt-[60px] text-center'>
          <button onClick={HandleLoadData} className='px-12 py-4 rounded bg-primary text-white font-primary font-medium'>View More Products</button>
        </div>
          )}
      </Container>
    </div>
  )
}

export default ExploreOurProducts
