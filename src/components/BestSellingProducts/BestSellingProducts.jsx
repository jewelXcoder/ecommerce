import React from 'react'
import Container from '../Layout/Container'
import products from '../../assets/products.png'
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import SectionHead from '../HeadingSection/SectionHead';

const BestSellingProducts = () => {
  return (
    <section className='pb-[122px]'>
      <Container>
        <div className=' border-t border-black/30'>
          <div className='mt-[27px]'>
            <SectionHead>
            This Month
          </SectionHead>
          </div>
          <div className='flex justify-between items-center mt-[20px]'>
            <h3 className='font-secondary font-semibold text-[36px] tracking-[4%]'>Best Selling Products</h3>
            <div>
              <button className='py-[16px] px-[48px] rounded font-primary font-medium bg-primary text-white'>View All</button>
            </div>
          </div>
          <div className='mt-[60px] flex justify-between items-center'>
            <div>
              <div className='w-[270px] relative rounded flex flex-col justify-center items-center py-[52px] px-[65px] bg-[#F5F5F5]'>
                <div className='absolute top-3 right-3'>
                  <div className='w-[34px] h-[34px] flex justify-center items-center  rounded-full bg-white'>
                    <CiHeart className='' size={24}/>
                  </div>
                  <div className='w-[34px] h-[34px] mt-2 flex justify-center items-center rounded-full bg-white'>
                    <FiEye className='' size={24}/>
                  </div>
                </div>
                <img src={products} alt="" />
              </div>
              <div>
                <p className='font-primary font-medium mt-4 '>The north coat</p>
                <h3 className='font-primary font-medium mt-2 text-primary'>$260 <del className='text-black/50 font-primary font-medium ml-2'>$360</del></h3>
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
            <div>
              <div className='w-[270px] relative rounded flex flex-col justify-center items-center py-[52px] px-[65px] bg-[#F5F5F5]'>
                <div className='absolute top-3 right-3'>
                  <div className='w-[34px] h-[34px] flex justify-center items-center  rounded-full bg-white'>
                    <CiHeart className='' size={24}/>
                  </div>
                  <div className='w-[34px] h-[34px] mt-2 flex justify-center items-center rounded-full bg-white'>
                    <FiEye className='' size={24}/>
                  </div>
                </div>
                <img src={products} alt="" />
              </div>
              <div>
                <p className='font-primary font-medium mt-4 '>The north coat</p>
                <h3 className='font-primary font-medium mt-2 text-primary'>$260 <del className='text-black/50 font-primary font-medium ml-2'>$360</del></h3>
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
            <div>
              <div className='w-[270px] relative rounded flex flex-col justify-center items-center py-[52px] px-[65px] bg-[#F5F5F5]'>
                <div className='absolute top-3 right-3'>
                  <div className='w-[34px] h-[34px] flex justify-center items-center  rounded-full bg-white'>
                    <CiHeart className='' size={24}/>
                  </div>
                  <div className='w-[34px] h-[34px] mt-2 flex justify-center items-center rounded-full bg-white'>
                    <FiEye className='' size={24}/>
                  </div>
                </div>
                <img src={products} alt="" />
              </div>
              <div>
                <p className='font-primary font-medium mt-4 '>The north coat</p>
                <h3 className='font-primary font-medium mt-2 text-primary'>$260 <del className='text-black/50 font-primary font-medium ml-2'>$360</del></h3>
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
            <div>
              <div className='w-[270px] relative rounded flex flex-col justify-center items-center py-[52px] px-[65px] bg-[#F5F5F5]'>
                <div className='absolute top-3 right-3'>
                  <div className='w-[34px] h-[34px] flex justify-center items-center  rounded-full bg-white'>
                    <CiHeart className='' size={24}/>
                  </div>
                  <div className='w-[34px] h-[34px] mt-2 flex justify-center items-center rounded-full bg-white'>
                    <FiEye className='' size={24}/>
                  </div>
                </div>
                <img src={products} alt="" />
              </div>
              <div>
                <p className='font-primary font-medium mt-4 '>The north coat</p>
                <h3 className='font-primary font-medium mt-2 text-primary'>$260 <del className='text-black/50 font-primary font-medium ml-2'>$360</del></h3>
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
          </div>
        </div>
      </Container>
    </section>
  )
}

export default BestSellingProducts
