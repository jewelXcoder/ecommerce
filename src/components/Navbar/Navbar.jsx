import React from 'react'
import logo from '../../assets/logo.png'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";
import Container from '../Layout/Container';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav className='pt-[49px] pb-[21px] border-b border-[#D9D9D9]'>
      <Container>
        <div className='flex items-center'>
          <div className='w-[20%]'>
            <img src={logo} alt="" />
          </div>
        <div className='w-[45%]'>
          <ul className='flex items-center gap-x-[48px]'>
            <li className='font-primary'><Link to="/">Home</Link></li>
            <li className='font-primary'><Link to="/product">Product</Link></li>
            <li className='font-primary'><Link to="/contact">Contact</Link></li>
            <li className='font-primary'><Link to="/about">About</Link></li>
            <li className='font-primary'><Link to="/signup">Sign Up</Link></li>
          </ul>
        </div>
        <div className='w-[35%] flex justify-end items-center gap-x-4'>
          <div className='w-[243px] flex items-center relative '>
            <input className='w-full py-[10px] pl-5 pr-[35px] bg-[#F5F5F5] rounded-[4px] outline-0 placeholder:font-primary placeholder:text-[12px] placeholder:text-black/50' type="text" placeholder='What are you looking for?' />
          <CiSearch className='absolute right-[12px]' size={20}/>
          </div>
          <CiHeart size={20}/>
          <FaOpencart size={20}/>
        </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
