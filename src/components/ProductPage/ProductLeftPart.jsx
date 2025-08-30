import React from 'react'

const ProductLeftPart = () => {

  const categoriesData = [
    {
      name: "Woman’s Fashion"
    },
    {
      name: "Men’s Fashion"
    },
    {
      name: "Electronics"
    },
    {
      name: "Home & Lifestyle"
    },
    {
      name: "Medicine"
    },
    {
      name: "Sports & Outdoor"
    },
    {
      name: "Baby’s & Toys"
    },
    {
      name: "Groceries & Pets"
    },
    {
      name: "Health & Beauty"
    },
  ]
  return (
    <div>
      <div>
        <h3 className='font-primary font-bold text-[20px] text-[#262626]'>Shop by Category</h3>
      </div>
      <div className='mt-[15px]'>
        {
          categoriesData.map((category) => (
            <p className='font-primary mb-4'>{category.name}</p>
          ))
        }
      </div>
      <h3 className='font-primary font-bold text-[20px] text-[#262626]'>Shop by Color</h3>
      <div className='mt-[15px]'>
        <div className='flex items-center'>
          <div className='w-[11px] h-[11px] rounded-full bg-[#000000]'></div>
          <p className='font-primary text-[#767676] ml-[10px]'>Color 1</p>
        </div>
        <div className='flex items-center mt-[18px]'>
          <div className='w-[11px] h-[11px] rounded-full bg-[#FF0000]'></div>
          <p className='font-primary text-[#767676] ml-[10px]'>Color 2</p>
        </div>
        <div className='flex items-center mt-[18px]'>
          <div className='w-[11px] h-[11px] rounded-full bg-[#00FF38]'></div>
          <p className='font-primary text-[#767676] ml-[10px]'>Color 3</p>
        </div>
      </div>
    </div>
  )
}

export default ProductLeftPart
