import React from 'react'
import Container from '../Layout/Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SectionHead from '../HeadingSection/SectionHead';
import SectionSubHead from '../HeadingSection/SectionSubHead';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const Categories = () => {

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className='absolute flex justify-center items-center top-[-50px] right-[25px] w-[46px] h-[46px] z-999 rounded-full bg-[#F5F5F5]' onClick={onClick}>
      
    <a href='#'>
      <FaArrowRight />
    </a>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className='absolute  flex justify-center items-center top-[-50px] right-[80px] w-[46px] h-[46px] z-999 rounded-full bg-[#F5F5F5]'
      onClick={onClick}>
    <a href='#'>
      <FaArrowLeft />
    </a>
    </div>
  );
}

 var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  
  return (
    <section className='pt-[153px] pb-[95px]'>
      <Container>
        <div>
          <SectionHead>
            Categories
          </SectionHead>

        </div>
        <div>
          <SectionSubHead>
            Browse By Category
          </SectionSubHead>
        </div>
        {/* <div className='flex justify-between items-center'>
          <div className='mt-[60px] group hover:bg-primary transition-all duration-100 border border-black/30 w-[170px] py-[25px] px-[55px] rounded'>

            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_12087_430)">
                <g filter="url(#filter0_d_12087_430)">
                  <path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges" />
                </g>
                <path d="M25.6666 7H31.1354" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M28 44.0052V44.0305" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <line x1="15.1666" y1="39.8333" x2="40.8333" y2="39.8333" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" />
              </g>
              <defs>
                <filter id="filter0_d_12087_430" x="9.32812" y="5.125" width="37.3438" height="53.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12087_430" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12087_430" result="shape" />
                </filter>
                <clipPath id="clip0_12087_430">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className='flex flex-col justify-center items-center group-hover:text-white transition-all duration-100 font-primary mt-1'>Phones</p>
          </div>
          <div className='mt-[60px] group hover:bg-primary transition-all duration-100 border border-black/30 w-[170px] py-[25px] px-[55px] rounded'>


            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_12097_953)">
                <path d="M46.6667 9.33331H9.33333C8.04467 9.33331 7 10.378 7 11.6666V35C7 36.2886 8.04467 37.3333 9.33333 37.3333H46.6667C47.9553 37.3333 49 36.2886 49 35V11.6666C49 10.378 47.9553 9.33331 46.6667 9.33331Z" className='group-hover:stroke-white transition-all duration-100'  stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.3334 46.6667H39.6667"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21 37.3333V46.6666"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M35 37.3333V46.6666"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 32H48"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" />
              </g>
              <defs>
                <clipPath id="clip0_12097_953">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className='flex flex-col justify-center items-center group-hover:text-white transition-all duration-100 font-primary mt-1'>Computers</p>
          </div>
          <div className='mt-[60px] flex flex-col justify-center items-center group hover:bg-primary transition-all duration-100 border border-black/30 w-[170px] py-[25px] px-[55px] rounded'>


            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_12097_530)">
                <path d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21 42V49H35V42"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21 14V7H35V14"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <line x1="24" y1="23" x2="24" y2="34"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" />
                <line x1="28" y1="28" x2="28" y2="34"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" />
                <line x1="32" y1="26" x2="32" y2="34"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" />
              </g>
              <defs>
                <clipPath id="clip0_12097_530">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className='flex flex-col justify-center items-center group-hover:text-white transition-all duration-100 font-primary mt-1'>SmartWatch</p>
          </div>
          <div className='mt-[60px] flex flex-col justify-center items-center group hover:bg-primary transition-all duration-100 border border-black/30 w-[170px] py-[25px] px-[55px] rounded'>


            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_12100_3045)">
                <path d="M11.6667 16.3334H14C15.2377 16.3334 16.4247 15.8417 17.2998 14.9665C18.175 14.0914 18.6667 12.9044 18.6667 11.6667C18.6667 11.0479 18.9125 10.4544 19.3501 10.0168C19.7877 9.57921 20.3812 9.33337 21 9.33337H35C35.6188 9.33337 36.2123 9.57921 36.6499 10.0168C37.0875 10.4544 37.3333 11.0479 37.3333 11.6667C37.3333 12.9044 37.825 14.0914 38.7002 14.9665C39.5753 15.8417 40.7623 16.3334 42 16.3334H44.3333C45.571 16.3334 46.758 16.825 47.6332 17.7002C48.5083 18.5754 49 19.7624 49 21V42C49 43.2377 48.5083 44.4247 47.6332 45.2999C46.758 46.175 45.571 46.6667 44.3333 46.6667H11.6667C10.429 46.6667 9.242 46.175 8.36683 45.2999C7.49167 44.4247 7 43.2377 7 42V21C7 19.7624 7.49167 18.5754 8.36683 17.7002C9.242 16.825 10.429 16.3334 11.6667 16.3334" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M28 37.3334C31.866 37.3334 35 34.1994 35 30.3334C35 26.4674 31.866 23.3334 28 23.3334C24.134 23.3334 21 26.4674 21 30.3334C21 34.1994 24.134 37.3334 28 37.3334Z" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_12100_3045">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className='group-hover:text-white transition-all duration-100 font-primary mt-1'>Camera</p>
          </div>
          <div className='mt-[60px] flex flex-col justify-center items-center group hover:bg-primary transition-all duration-100  border border-black/30 w-[170px] py-[25px] px-[55px] rounded'>


            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_12097_544)">
                <path d="M16.3333 30.3333H14C11.4227 30.3333 9.33331 32.4227 9.33331 35V42C9.33331 44.5773 11.4227 46.6666 14 46.6666H16.3333C18.9106 46.6666 21 44.5773 21 42V35C21 32.4227 18.9106 30.3333 16.3333 30.3333Z" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M42 30.3333H39.6667C37.0893 30.3333 35 32.4227 35 35V42C35 44.5773 37.0893 46.6666 39.6667 46.6666H42C44.5773 46.6666 46.6667 44.5773 46.6667 42V35C46.6667 32.4227 44.5773 30.3333 42 30.3333Z"className='group-hover:stroke-white  transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.33331 35V28C9.33331 23.0493 11.3 18.3013 14.8007 14.8007C18.3013 11.3 23.0493 9.33331 28 9.33331C32.9507 9.33331 37.6986 11.3 41.1993 14.8007C44.7 18.3013 46.6666 23.0493 46.6666 28V35"className='group-hover:stroke-white  transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_12097_544">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className='group-hover:text-white transition-all duration-100 font-primary mt-1'>HeadPhones</p>
          </div>
          <div className='mt-[60px] flex flex-col justify-center items-center group hover:bg-primary transition-all duration-100 border border-black/30 w-[170px] py-[25px] px-[55px] rounded'>


            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_12097_58)">
                <path d="M46.6667 14H9.33332C6.75599 14 4.66666 16.0893 4.66666 18.6667V37.3333C4.66666 39.9107 6.75599 42 9.33332 42H46.6667C49.244 42 51.3333 39.9107 51.3333 37.3333V18.6667C51.3333 16.0893 49.244 14 46.6667 14Z" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14 28H23.3333M18.6667 23.3333V32.6666" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M35 25.6667V25.6909" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M42 30.3333V30.3574" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_12097_58">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className='group-hover:text-white transition-all duration-100 font-primary mt-1'>Gaming</p>
          </div>
        </div> */}
        <div>
           <Slider {...settings}>
        <div>
                   <div className='mt-[60px] group hover:bg-primary transition-all duration-100 border border-black/30 w-[170px] py-[25px] px-[55px] rounded'>

            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_12087_430)">
                <g filter="url(#filter0_d_12087_430)">
                  <path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges" />
                </g>
                <path d="M25.6666 7H31.1354" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M28 44.0052V44.0305" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <line x1="15.1666" y1="39.8333" x2="40.8333" y2="39.8333" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" />
              </g>
              <defs>
                <filter id="filter0_d_12087_430" x="9.32812" y="5.125" width="37.3438" height="53.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12087_430" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12087_430" result="shape" />
                </filter>
                <clipPath id="clip0_12087_430">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className='flex flex-col justify-center items-center group-hover:text-white transition-all duration-100 font-primary mt-1'>Phones</p>
          </div>
        </div>
        <div>
                             <div className='mt-[60px] group hover:bg-primary transition-all duration-100 border border-black/30 w-[170px] py-[25px] px-[55px] rounded'>


            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_12097_953)">
                <path d="M46.6667 9.33331H9.33333C8.04467 9.33331 7 10.378 7 11.6666V35C7 36.2886 8.04467 37.3333 9.33333 37.3333H46.6667C47.9553 37.3333 49 36.2886 49 35V11.6666C49 10.378 47.9553 9.33331 46.6667 9.33331Z" className='group-hover:stroke-white transition-all duration-100'  stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.3334 46.6667H39.6667"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21 37.3333V46.6666"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M35 37.3333V46.6666"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 32H48"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" />
              </g>
              <defs>
                <clipPath id="clip0_12097_953">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className='flex flex-col justify-center items-center group-hover:text-white transition-all duration-100 font-primary mt-1'>Computers</p>
          </div>
        </div>
        <div>
          <div className='mt-[60px] flex flex-col justify-center items-center group hover:bg-primary transition-all duration-100 border border-black/30 w-[170px] py-[25px] px-[55px] rounded'>


            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_12097_530)">
                <path d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21 42V49H35V42"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21 14V7H35V14"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <line x1="24" y1="23" x2="24" y2="34"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" />
                <line x1="28" y1="28" x2="28" y2="34"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" />
                <line x1="32" y1="26" x2="32" y2="34"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" />
              </g>
              <defs>
                <clipPath id="clip0_12097_530">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className='flex flex-col justify-center items-center group-hover:text-white transition-all duration-100 font-primary mt-1'>SmartWatch</p>
          </div>
        </div>
        <div>
          <div className='mt-[60px] flex flex-col justify-center items-center group hover:bg-primary transition-all duration-100 border border-black/30 w-[170px] py-[25px] px-[55px] rounded'>


            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_12100_3045)">
                <path d="M11.6667 16.3334H14C15.2377 16.3334 16.4247 15.8417 17.2998 14.9665C18.175 14.0914 18.6667 12.9044 18.6667 11.6667C18.6667 11.0479 18.9125 10.4544 19.3501 10.0168C19.7877 9.57921 20.3812 9.33337 21 9.33337H35C35.6188 9.33337 36.2123 9.57921 36.6499 10.0168C37.0875 10.4544 37.3333 11.0479 37.3333 11.6667C37.3333 12.9044 37.825 14.0914 38.7002 14.9665C39.5753 15.8417 40.7623 16.3334 42 16.3334H44.3333C45.571 16.3334 46.758 16.825 47.6332 17.7002C48.5083 18.5754 49 19.7624 49 21V42C49 43.2377 48.5083 44.4247 47.6332 45.2999C46.758 46.175 45.571 46.6667 44.3333 46.6667H11.6667C10.429 46.6667 9.242 46.175 8.36683 45.2999C7.49167 44.4247 7 43.2377 7 42V21C7 19.7624 7.49167 18.5754 8.36683 17.7002C9.242 16.825 10.429 16.3334 11.6667 16.3334" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M28 37.3334C31.866 37.3334 35 34.1994 35 30.3334C35 26.4674 31.866 23.3334 28 23.3334C24.134 23.3334 21 26.4674 21 30.3334C21 34.1994 24.134 37.3334 28 37.3334Z" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_12100_3045">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className='group-hover:text-white transition-all duration-100 font-primary mt-1'>Camera</p>
          </div>
        </div>
        <div>
          <div className='mt-[60px] flex flex-col justify-center items-center group hover:bg-primary transition-all duration-100  border border-black/30 w-[170px] py-[25px] px-[55px] rounded'>


            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_12097_544)">
                <path d="M16.3333 30.3333H14C11.4227 30.3333 9.33331 32.4227 9.33331 35V42C9.33331 44.5773 11.4227 46.6666 14 46.6666H16.3333C18.9106 46.6666 21 44.5773 21 42V35C21 32.4227 18.9106 30.3333 16.3333 30.3333Z" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M42 30.3333H39.6667C37.0893 30.3333 35 32.4227 35 35V42C35 44.5773 37.0893 46.6666 39.6667 46.6666H42C44.5773 46.6666 46.6667 44.5773 46.6667 42V35C46.6667 32.4227 44.5773 30.3333 42 30.3333Z"className='group-hover:stroke-white  transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.33331 35V28C9.33331 23.0493 11.3 18.3013 14.8007 14.8007C18.3013 11.3 23.0493 9.33331 28 9.33331C32.9507 9.33331 37.6986 11.3 41.1993 14.8007C44.7 18.3013 46.6666 23.0493 46.6666 28V35"className='group-hover:stroke-white  transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_12097_544">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className='group-hover:text-white transition-all duration-100 font-primary mt-1'>HeadPhones</p>
          </div>
        </div>
        <div>
          <div className='mt-[60px] flex flex-col justify-center items-center group hover:bg-primary transition-all duration-100 border border-black/30 w-[170px] py-[25px] px-[55px] rounded'>


            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_12097_58)">
                <path d="M46.6667 14H9.33332C6.75599 14 4.66666 16.0893 4.66666 18.6667V37.3333C4.66666 39.9107 6.75599 42 9.33332 42H46.6667C49.244 42 51.3333 39.9107 51.3333 37.3333V18.6667C51.3333 16.0893 49.244 14 46.6667 14Z" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14 28H23.3333M18.6667 23.3333V32.6666" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M35 25.6667V25.6909" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M42 30.3333V30.3574" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_12097_58">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className='group-hover:text-white transition-all duration-100 font-primary mt-1'>Gaming</p>
          </div>
        </div>
        <div>
                   <div className='mt-[60px] group hover:bg-primary transition-all duration-100 border border-black/30 w-[170px] py-[25px] px-[55px] rounded'>

            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_12087_430)">
                <g filter="url(#filter0_d_12087_430)">
                  <path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges" />
                </g>
                <path d="M25.6666 7H31.1354" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M28 44.0052V44.0305" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <line x1="15.1666" y1="39.8333" x2="40.8333" y2="39.8333" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" />
              </g>
              <defs>
                <filter id="filter0_d_12087_430" x="9.32812" y="5.125" width="37.3438" height="53.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12087_430" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12087_430" result="shape" />
                </filter>
                <clipPath id="clip0_12087_430">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className='flex flex-col justify-center items-center group-hover:text-white transition-all duration-100 font-primary mt-1'>Phones</p>
          </div>
        </div>
        <div>
                             <div className='mt-[60px] group hover:bg-primary transition-all duration-100 border border-black/30 w-[170px] py-[25px] px-[55px] rounded'>


            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_12097_953)">
                <path d="M46.6667 9.33331H9.33333C8.04467 9.33331 7 10.378 7 11.6666V35C7 36.2886 8.04467 37.3333 9.33333 37.3333H46.6667C47.9553 37.3333 49 36.2886 49 35V11.6666C49 10.378 47.9553 9.33331 46.6667 9.33331Z" className='group-hover:stroke-white transition-all duration-100'  stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.3334 46.6667H39.6667"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21 37.3333V46.6666"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M35 37.3333V46.6666"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 32H48"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" />
              </g>
              <defs>
                <clipPath id="clip0_12097_953">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className='flex flex-col justify-center items-center group-hover:text-white transition-all duration-100 font-primary mt-1'>Computers</p>
          </div>
        </div>
        <div>
          <div className='mt-[60px] flex flex-col justify-center items-center group hover:bg-primary transition-all duration-100 border border-black/30 w-[170px] py-[25px] px-[55px] rounded'>


            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_12097_530)">
                <path d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21 42V49H35V42"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21 14V7H35V14"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <line x1="24" y1="23" x2="24" y2="34"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" />
                <line x1="28" y1="28" x2="28" y2="34"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" />
                <line x1="32" y1="26" x2="32" y2="34"className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" />
              </g>
              <defs>
                <clipPath id="clip0_12097_530">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className='flex flex-col justify-center items-center group-hover:text-white transition-all duration-100 font-primary mt-1'>SmartWatch</p>
          </div>
        </div>
        <div>
          <div className='mt-[60px] flex flex-col justify-center items-center group hover:bg-primary transition-all duration-100 border border-black/30 w-[170px] py-[25px] px-[55px] rounded'>


            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_12100_3045)">
                <path d="M11.6667 16.3334H14C15.2377 16.3334 16.4247 15.8417 17.2998 14.9665C18.175 14.0914 18.6667 12.9044 18.6667 11.6667C18.6667 11.0479 18.9125 10.4544 19.3501 10.0168C19.7877 9.57921 20.3812 9.33337 21 9.33337H35C35.6188 9.33337 36.2123 9.57921 36.6499 10.0168C37.0875 10.4544 37.3333 11.0479 37.3333 11.6667C37.3333 12.9044 37.825 14.0914 38.7002 14.9665C39.5753 15.8417 40.7623 16.3334 42 16.3334H44.3333C45.571 16.3334 46.758 16.825 47.6332 17.7002C48.5083 18.5754 49 19.7624 49 21V42C49 43.2377 48.5083 44.4247 47.6332 45.2999C46.758 46.175 45.571 46.6667 44.3333 46.6667H11.6667C10.429 46.6667 9.242 46.175 8.36683 45.2999C7.49167 44.4247 7 43.2377 7 42V21C7 19.7624 7.49167 18.5754 8.36683 17.7002C9.242 16.825 10.429 16.3334 11.6667 16.3334" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M28 37.3334C31.866 37.3334 35 34.1994 35 30.3334C35 26.4674 31.866 23.3334 28 23.3334C24.134 23.3334 21 26.4674 21 30.3334C21 34.1994 24.134 37.3334 28 37.3334Z" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_12100_3045">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className='group-hover:text-white transition-all duration-100 font-primary mt-1'>Camera</p>
          </div>
        </div>
        <div>
          <div className='mt-[60px] flex flex-col justify-center items-center group hover:bg-primary transition-all duration-100  border border-black/30 w-[170px] py-[25px] px-[55px] rounded'>


            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_12097_544)">
                <path d="M16.3333 30.3333H14C11.4227 30.3333 9.33331 32.4227 9.33331 35V42C9.33331 44.5773 11.4227 46.6666 14 46.6666H16.3333C18.9106 46.6666 21 44.5773 21 42V35C21 32.4227 18.9106 30.3333 16.3333 30.3333Z" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M42 30.3333H39.6667C37.0893 30.3333 35 32.4227 35 35V42C35 44.5773 37.0893 46.6666 39.6667 46.6666H42C44.5773 46.6666 46.6667 44.5773 46.6667 42V35C46.6667 32.4227 44.5773 30.3333 42 30.3333Z"className='group-hover:stroke-white  transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.33331 35V28C9.33331 23.0493 11.3 18.3013 14.8007 14.8007C18.3013 11.3 23.0493 9.33331 28 9.33331C32.9507 9.33331 37.6986 11.3 41.1993 14.8007C44.7 18.3013 46.6666 23.0493 46.6666 28V35"className='group-hover:stroke-white  transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_12097_544">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className='group-hover:text-white transition-all duration-100 font-primary mt-1'>HeadPhones</p>
          </div>
        </div>
        <div>
          <div className='mt-[60px] flex flex-col justify-center items-center group hover:bg-primary transition-all duration-100 border border-black/30 w-[170px] py-[25px] px-[55px] rounded'>


            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_12097_58)">
                <path d="M46.6667 14H9.33332C6.75599 14 4.66666 16.0893 4.66666 18.6667V37.3333C4.66666 39.9107 6.75599 42 9.33332 42H46.6667C49.244 42 51.3333 39.9107 51.3333 37.3333V18.6667C51.3333 16.0893 49.244 14 46.6667 14Z" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14 28H23.3333M18.6667 23.3333V32.6666" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M35 25.6667V25.6909" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M42 30.3333V30.3574" className='group-hover:stroke-white transition-all duration-100' stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_12097_58">
                  <rect width="56" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className='group-hover:text-white transition-all duration-100 font-primary mt-1'>Gaming</p>
          </div>
        </div>
      </Slider>
        </div>
      </Container>
    </section>
  )
}

export default Categories
