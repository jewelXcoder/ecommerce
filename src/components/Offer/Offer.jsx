import React from 'react'
import Container from '../Layout/Container'
import Countdown from 'react-countdown';
import RenderedTime from './RenderedTime';

const Offer = () => {
  return (
    <div className='pb-[161px]'>
     <Container>
     <div className='bg-[url(./assets/offer.png)] py-[69px]'>
     <div className='ml-[56px]'>
    <p className='font-primary font-semibold text-[#00FF66]'>Categories</p> 
    <h3 className='w-[441px] mt-[32px] font-secondary text-white font-semibold text-[48px] leading-[60px] tracking-[4%]'>
      Enhance Your Music Experience
    </h3>
    <div className='mt-[45px]'>
     <Countdown date={Date.now() + 100000000} 
     renderer={RenderedTime}
     ></Countdown> 
    </div> 
    <div className='mt-[40px]'>
      <button className='bg-[#00FF66] rounded font-primary font-medium text-white px-12 py-[16px]'>Buy Now</button>
    </div> 
    </div>
    
    </div> 
    </Container> 
    </div>
  )
}

export default Offer
