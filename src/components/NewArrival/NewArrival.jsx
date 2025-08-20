import React from 'react'
import Container from '../Layout/Container'
import SectionHead from '../HeadingSection/SectionHead'
import SectionSubHead from '../HeadingSection/SectionSubHead'
import arrival1 from '../../assets/arrival1.png'
import arrival2 from '../../assets/arrival2.png'
import arrival3 from '../../assets/arrival3.png'
import arrival4 from '../../assets/arrival4.png'


const NewArrival = () => {
  return (
    <div className='pb-[182px]'>
    <Container>
      <div>
        <SectionHead>
          Featured
        </SectionHead>
      </div>
      <div>
        <SectionSubHead>
          New Arrival
        </SectionSubHead>
      </div>
        <div className='flex mt-[60px]'>
          <div className='w-1/2'>
          <img src={arrival1} alt="" />
          </div>
          <div className='w-1/2 ml-[30px] flex flex-col'>
          <div className='mb-[32px]'>
          <img src={arrival2} alt="" />
          </div>
          <div className='flex gap-x-[30px]'>
            <div>
              <img src={arrival3} alt="" />
            </div>
            <div>
              <img src={arrival4} alt="" />
            </div>
          </div>
          </div>
        </div>
    </Container>  
    </div>
  )
}

export default NewArrival
