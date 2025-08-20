import React from 'react'

const RenderedTime = ({ hours, days, minutes, seconds }) => {
  return (
    <div className='flex gap-x-6'>
      <div className='flex flex-col justify-center items-center px-[15px] py-[14px] w-[62px] h-[62px] bg-white rounded-full'>
        <p className=''>{hours}</p>
      <p  className='text-[11px] font-primary'>Hours</p>
      </div>
      <div className='flex flex-col justify-center items-center px-[15px] py-[14px] w-[62px] h-[62px] bg-white rounded-full'>
        <p className=''>{days}</p>
      <p  className='text-[11px] font-primary'>days</p>
      </div>
      <div className='flex flex-col justify-center items-center px-[15px] py-[14px] w-[62px] h-[62px] bg-white rounded-full'>
        <p className=''>{minutes}</p>
      <p  className='text-[11px] font-primary'>minutes</p>
      </div>
      <div className='flex flex-col justify-center items-center px-[15px] py-[14px] w-[62px] h-[62px] bg-white rounded-full'>
        <p className=''>{seconds}</p>
      <p  className='text-[11px] font-primary'>seconds</p>
      </div>
      
    </div>
  )
}

export default RenderedTime
