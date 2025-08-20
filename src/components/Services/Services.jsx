import React from 'react'
import Container from '../Layout/Container'
import service1 from '../../assets/service1.png'
import service2 from '../../assets/service2.png'
import service3 from '../../assets/service3.png'

const Services = () => {
  return (
    <div className='pb-[167px]'>
     <Container>
      <div className=' flex justify-center gap-x-[88px] items-center'>
             <div className='w-[249px]'>
      <div className='w-[58px] m-auto h-[58px] flex justify-center items-center rounded-full border-[11px] border-[#c1c0c1] bg-black'>
        <img className='' src={service1} alt="" />
      </div>
      <h3 className='font-primary font-semibold text-[20px] mt-[24px]'>FREE AND FAST DELIVERY</h3>
      <p className='font-primary text-[14px] mt-2'>Free delivery for all orders over $140</p>
    </div>
         <div className='w-[249px]'>
      <div className='w-[58px] m-auto h-[58px] flex justify-center items-center rounded-full border-[11px] border-[#c1c0c1] bg-black'>
        <img className='' src={service2} alt="" />
      </div>
      <h3 className='font-primary font-semibold text-[20px] mt-[24px]'>FREE AND FAST DELIVERY</h3>
      <p className='font-primary text-[14px] mt-2'>Free delivery for all orders over $140</p>
    </div>
         <div className='w-[249px]'>
      <div className='w-[58px] m-auto h-[58px] flex justify-center items-center rounded-full border-[11px] border-[#c1c0c1] bg-black'>
        <img className='' src={service3} alt="" />
      </div>
      <h3 className='font-primary font-semibold text-[20px] mt-[24px]'>FREE AND FAST DELIVERY</h3>
      <p className='font-primary text-[14px] mt-2'>Free delivery for all orders over $140</p>
    </div>
      </div>
    </Container> 
    </div>
  )
}

export default Services
