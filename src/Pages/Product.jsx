import React from 'react'
import Container from '../components/Layout/Container'
import ProductLeftPart from '../components/ProductPage/ProductLeftPart'
import ProductRightPart from '../components/ProductPage/ProductRightPart'

const Product = () => {
  return (
    <div>
      <Container>
        <div className='flex pt-[50px] pb-[104px]'>
          <div className='w-[25%]'>
            <ProductLeftPart/>
          </div>
          <div className='w-[75%]'>
            <ProductRightPart/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Product
