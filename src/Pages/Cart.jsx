import React from 'react'
import Container from '../components/Layout/Container'
import mainpd from '../assets/mainpd.png'
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const Cart = () => {
  return (
    <div className='py-50'>
      <Container>
        <div>
          <div className='flex justify-between items-center py-6 px-[40px] rounded shadow-[0_1px_13px_rgba(0,0,0,0.1)] '>
            <div className='w-[25%]'>Product</div>
            <div className='w-[25%]'>Price</div>
            <div className='w-[25%]'>Quantity</div>
            <div className='w-[25%] '>Subtotal</div>
          </div>
          <div className='flex justify-between items-center py-6 px-[40px] rounded shadow-[0_1px_13px_rgba(0,0,0,0.1)] '>
            <div className='w-[25%]'>
              <div className='flex items-center'>
                <img className='h-[39px]' src={mainpd} alt="" />
                <p className='ml-5'>Gamepad</p>
              </div>
            </div>
            <div className='w-[25%]'>$650</div>
            <div className='w-[25%]'>
              <div className='flex items-center gap-x-4 px-3 py-[6px] rounded border border-black/50 h-[44px] w-[72px]'>
                01
                <div>
                  <FaChevronUp />
                  <FaChevronDown />
                </div>
              </div>
            </div>
            <div className='w-[25%]'>$650</div>
          </div>
          <div className='flex justify-between items-center py-6 px-[40px] rounded shadow-[0_1px_13px_rgba(0,0,0,0.1)] '>
            <div className='w-[25%]'>
              <div className='flex items-center'>
                <img className='h-[39px]' src={mainpd} alt="" />
                <p className='ml-5'>Gamepad</p>
              </div>
            </div>
            <div className='w-[25%]'>$650</div>
            <div className='w-[25%]'>
              <div className='flex items-center gap-x-4 px-3 py-[6px] rounded border border-black/50 h-[44px] w-[72px]'>
                01
                <div>
                  <FaChevronUp />
                  <FaChevronDown />
                </div>
              </div>
            </div>
            <div className='w-[25%]'>$650</div>
          </div>
        </div>
        <div className='flex justify-between items-center mt-4'>
          <div className='px-12 py-4 border border-black/50 rounded-lg inline-block '>Return To Shop</div>
          <div className='px-12 py-4 border border-black/50 rounded-lg inline-block '>Update Cart</div>
        </div>
        <div className='flex'>
          <div className='flex mt-[80px] gap-x-[173px]'>
            <div className='flex gap-x-4'>
              <div className='w-[300px] h-[56px] border rounded-lg border-black/50 '>
                <input className='w-full pl-6 outline-0  py-4 placeholder:text-black/50 placeholder:font-primary' type="text" placeholder='Coupon Code' />
              </div>
              <div >
                <button className='py-4 rounded px-12 bg-primary inline-block text-white font-primary'>Apply Coupon</button>
              </div>
            </div>
            <div className=' w-[470px] h-[324px] py-[32px] rounded border'>
              <div className='px-6 '>
                <h3 className='font-medium font-primary text-[20px]'>Cart Total</h3>
                <div className='mt-6 flex justify-between items-cente after:content-[""] relative after:absolute after:top-[30px] after:left-0 after:w-[422px] after:bg-black/50 after:h-[1px]'>
                  <p className='font-primary'>Subtotal:</p>
                  <p className='font-primary'>$1750</p>
                </div>
                <div className='flex mt-6 justify-between items-cente after:content-[""] relative after:absolute after:top-[30px] after:left-0 after:w-[422px] after:bg-black/50 after:h-[1px]'>
                  <p className='font-primary'>Shipping:</p>
                  <p className='font-primary'>Free</p>
                </div>
                <div className='flex mt-6 justify-between items-cente'>
                  <p className='font-primary'>Total:</p>
                  <p className='font-primary'>$1750</p>
                </div>
              </div>
              <div className=' text-center mt-4'>
                <div className='px-12 py-4 bg-primary text-white font-secondary rounded inline-block '>Procees to checkout</div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Cart
