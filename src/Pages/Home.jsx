import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Categories from '../components/Categories/Categories'
import BestSellingProducts from '../components/BestSellingProducts/BestSellingProducts'

const Home = () => {
  return (
    <>
     <Header/>
     <Navbar/> 
     <Banner/>
     <Categories/>
     <BestSellingProducts/>
    </>
  )
}

export default Home
