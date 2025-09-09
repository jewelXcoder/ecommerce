import React, { useEffect, useState } from 'react'
import Container from '../Layout/Container'
import mainpd from '../../assets/mainpd.png'
import pd1 from '../../assets/pd1.png'
import pd2 from '../../assets/pd2.png'
import pd3 from '../../assets/pd3.png'
import pd4 from '../../assets/pd4.png'
import { useParams } from 'react-router'
import SingleProductRating from './SingleProductRating'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import delivery from '../../assets/delivery.png'
import returnback from '../../assets/returnback.png'

const SingleProductDetail = () => {
  const { id } = useParams()

  const [productData, setProductData] = useState([])
  const [selectedImg, setSelectedImg] = useState()


  useEffect(() => {

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProductData(data.products))

  }, [])

  const singleProduct = productData.find((product) => product.id == id)

  useEffect(() => {
    if (singleProduct?.thumbnail) {
      setSelectedImg(singleProduct?.thumbnail)
    }
  }, [singleProduct])

  return (
    <div className='py-50'>
      <Container>
        <div className='grid grid-cols-12 space-x-4  row'>
          <div className='col-span-2'>
            <div className='flex flex-col gap-y-4'>
              {/* <div className='py-3 px-[25px] rounded bg-[#f5f5f5]'>
          <img onClick={()=> setSelectedImg(pd1)} src={pd1} alt="" />
        </div>
          <div className='py-3 px-[25px] rounded bg-[#f5f5f5]'>
          <img src={pd2} alt="" />
        </div>
          <div className='py-3 px-[25px] rounded bg-[#f5f5f5]'>
          <img src={pd3} alt="" />
        </div>
          <div className='py-3 px-[25px] rounded bg-[#f5f5f5]'>
          <img src={pd4} alt="" />
        </div> */}
              {
                singleProduct?.images.map((img) => (
                  <div className='py-3 px-[25px] rounded bg-[#f5f5f5]'>
                    <img onClick={() => setSelectedImg(img)} src={img} alt="" />
                  </div>
                ))
              }
            </div>
          </div>
          <div className='col-span-6'>
            <div className='pt-[133px] pb-[152px] px-[27px] rounded bg-[#f5f5f5]'>
              <img className='h-[300px] mx-auto' src={selectedImg} alt="" />
            </div>
          </div>
          <div className='col-span-4'>
            <div>
              <h3 className='font-secondary font-semibold text-[24px] mb-4'>{singleProduct?.title}</h3>
              <div className='flex gap-x-2 items-center mb-4'>
                <SingleProductRating rating={singleProduct?.rating} />
                <div className='text-black/50 font-primary text-[14px]'>({singleProduct?.reviews.length} Reviews)</div>
                <div className='after:content-[""] relative after:absolute after:w-[1px] after:h-[16px] after:bg-black/50 top-[-7px] left-0'></div>
                <div className='font-primary text-[14px] text-[#00FF66]'>In Stock</div>
              </div>
              <p className='font-secondary text-[24px] mb-6'>${singleProduct?.price}</p>
              <p className='font-primary text-[14px] mb-6'>{singleProduct?.description}</p>
              <div className='border-b border-1 border-black/50 border-w-[400px]'>
              </div>
              <div className='flex items-center gap-x-6 mt-6'>
                <p className='font-secondary text-[20px]'>Colours:</p>
                <div className='flex items-center gap-x-2'>
                  <div className='w-[20px] h-[20px] rounded-full bg-[#A0BCE0] border border-black'></div>
                  <div className='w-[20px] h-[20px] rounded-full bg-[#E07575]'></div>
                </div>
              </div>
              <div className='flex items-center gap-x-6 mt-6'>
                <p className='font-secondary text-[20px]'>Size:</p>
                <div className='flex items-center gap-x-4'>
                  <div className='font-secondary text-[20px] py-[6px] px-[7px] rounded-lg border border-black/50'>
                    XS
                  </div>
                  <div className='font-secondary text-[20px] py-[6px] px-[12px] rounded-lg border border-black/50'>
                    S
                  </div>
                  <div className='font-secondary text-[20px] py-[7px] px-[12px] text-white bg-[#DB4444] rounded-lg'>
                    M
                  </div>
                  <div className='font-secondary text-[20px] py-[6px] px-[13px] rounded-lg border border-black/50'>
                    L
                  </div>
                  <div className='font-secondary text-[20px] py-[6px] px-[8px] rounded-lg border border-black/50'>
                    XL
                  </div>
                </div>
              </div>
              <div className='flex items-center mt-6 '>
                <div className='  items-center flex border border-black/50 '>

                  <div className='py-[14px] border-r border-black/50 px-[12px] outline-none'><FaMinus /></div>
                  <p className='font-primary font-medium text-[20px] py-2 px-[34px]'>2</p>
                  <div className='py-[15px] px-[12px] bg-[#DB4444] text-white'><FaPlus /></div>
                </div>
                <div className='ml-4 font-primary font-medium rounded text-white py-[14px] px-[35px] bg-[#DB4444]'>
                  Buy Now
                </div>
                <div className='border border-black/50 ml-4 px-[12px] py-[13px] rounded '>
                  <CiHeart size={22} />
                </div>
              </div>
              <div className='mt-[40px]'>
                <div className='h-[180px] w-[399px] py-6 pl-4 pr-[51px] rounded  mt-6 border border-black/50 '>
                  <div className=' relative after:absolute after:content-[""] after:w-[399px] after:h-[1px] after:bg-black/50 after:top-[60px] after:left-[-18px]'></div>
                  <div className='flex'>
                    <img src={delivery} alt="" />
                    <div className='ml-[6px]'>
                      <p className='font-primary font-medium'>Free Delivery</p>
                      <p className='font-primary font-medium text-[12px]'>Enter your postal code for Delivery Availability</p>
                    </div>
                  </div>
                  <div className='flex mt-[44px]'>
                    <img src={returnback} alt="" />
                    <div className='ml-[6px]'>
                      <p className='font-primary font-medium'>Free Delivery</p>
                      <p className='font-primary font-medium text-[12px]'>Enter your postal code for Delivery Availability</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SingleProductDetail
