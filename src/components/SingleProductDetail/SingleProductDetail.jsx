import React, { useEffect, useState } from 'react'
import Container from '../Layout/Container'
import mainpd from '../../assets/mainpd.png'
import pd1 from '../../assets/pd1.png'
import pd2 from '../../assets/pd2.png'
import pd3 from '../../assets/pd3.png'
import pd4 from '../../assets/pd4.png'
import { useParams } from 'react-router'

const SingleProductDetail = () => {

  const {id} = useParams()

    const [productData, setProductData] = useState([])

      useEffect(() => {

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProductData(data.products))

  }, [])

  const singleProduct = productData.find((product) => product.id == id )

  return (
    <div>
      <Container>
        <div className='flex space-x-5'>
          <div className='w-[20%]'>

        <div className='flex flex-col gap-y-5'>
          <div className='py-3 px-[25px] rounded bg-[#f5f5f5]'>
            <img src={pd1} alt="" />
          </div>
          <div className='py-3 px-[25px] rounded bg-[#f5f5f5]'>
            <img src={pd2} alt="" />
          </div>
          <div className='py-3 px-[25px] rounded bg-[#f5f5f5]'>
            <img src={pd3} alt="" />
          </div>
          <div className='py-3 px-[25px] rounded bg-[#f5f5f5]'>
            <img src={pd4} alt="" />
          </div>
        </div>

          </div>
          <div className='w-[40%]'>
            <div className='pt-[133px] pb-[153px] px-[27px] rounded bg-[#f5f5f5]'>
              <img src={mainpd} alt="" />
            </div>
          </div>
          <div className='w-[35%]'>
            <div>
              <h3 className='font-secondary font-semibold text-[24px] mb-4'>{singleProduct?.title}</h3>
              <p className='font-primary text-[24px] mb-6'>${singleProduct?.price}</p>
              <p className='w-[373px] font-primary text-[14px]'>{singleProduct?.description}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SingleProductDetail
