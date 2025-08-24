import React from 'react'
import Container from '../Layout/Container'
import { LuSendHorizontal } from "react-icons/lu";
import qrcode from '../../assets/qrcode.png'
import playstore from '../../assets/playstore.png'
import appstore from '../../assets/appstore.png'
import { FaFacebookF } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import footerlogo from '../../assets/footerlogo.png'

const Footer = () => {
  return (
    <div className='bg-black'>
      <Container>
        <div className='pt-[80px]  '>
          <div className=' flex justify-center  text-white gap-x-[87px]'>
            <div>
              <h3>
                <img src={footerlogo} alt="" />
              </h3>
              <h5 className='font-primary font-medium text-xl py-6'>Subscribe</h5>
              <p className='font-primary'>Get 10% off your first order</p>
              <div className='w-[217px] mt-4 border-1 border-white flex items-center relative '>
                <input className='w-full text-white  py-[10px] px-[17px] bg-[#000000] rounded-[4px]  outline-0 placeholder:font-primary placeholder:text-[12px] placeholder:text-[#FAFAFA]/50' type="text" placeholder='Enter your email' />
                <LuSendHorizontal className='text-white absolute right-[12px]' size={20} />
              </div>
            </div>
            <div>
              <h3 className='font-primary font-medium text-xl'>Support</h3>
              <p className='mt-6 mb-4 font-primary leading-6 w-[175px]'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
              <h4 className='font-primary mb-4'>exclusive@gmail.com</h4>
              <p className='font-primary'>+88015-88888-9999</p>
            </div>
            <div>
              <h3 className='font-primary font-medium text-xl'>Account</h3>
              <p className='font-primary mt-6 mb-4'>My Account</p>
              <h4 className='font-primary w-[123px]'>Login / Register</h4>
              <p className='font-primary my-4'>Cart</p>
              <h5 className='font-primary'>Wishlist</h5>
              <p className='font-primary mt-4'>Shop</p>
            </div>
            <div>
              <h3 className='font-primary font-medium text-xl'>Quick Link</h3>
              <p className='font-primary mt-6 mb-4 w-[109px]'>Privacy Policy</p>
              <h4 className='font-primary w-[105px] '>Terms Of Use</h4>
              <p className='font-primary my-4'>FAQ</p>
              <h5 className='font-primary'>Contact</h5>
            </div>
            <div>
              <h3 className='font-primary mb-6 font-medium text-xl'>Download App</h3>
              <p className='font-primary font-medium w-[194px] text-[12px]'>Save $3 with App New User Only</p>
              <div className='mt-[10px] mb-[26px] flex items-center gap-x-2'>
                <img src={qrcode} alt="" />
                <div>
                  <img src={playstore} alt="" />
                  <img className='mt-[9px]' src={appstore} alt="" />
                </div>
              </div>
              <div className='flex text-white gap-x-6'>
                <FaFacebookF size={24} />
                <CiTwitter size={24} />
                <FaInstagram size={24} />
                <FaLinkedinIn size={24} />
              </div>
            </div>
          </div>
<div className='text-[#3d3d3d] mt-[76px] flex justify-center gap-x-2 items-center'>
            <div><FaRegCopyright size={16} /></div>
            <div>Copyright exclusive 2025. All right reserved</div>
          </div>          
        </div>

      </Container>
    </div>
  )
}

export default Footer
