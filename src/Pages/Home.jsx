import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Categories from '../components/Categories/Categories'
import BestSellingProducts from '../components/BestSellingProducts/BestSellingProducts'
import Offer from '../components/Offer/Offer'
import ExploreOurProducts from '../components/ExploreOurProducts/ExploreOurProducts'
import NewArrival from '../components/NewArrival/NewArrival'
import Services from '../components/Services/Services'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <> 
     <Banner/>
     <Categories/>
     <BestSellingProducts/>
     <Offer/>
     <ExploreOurProducts/>
     <NewArrival/>
     <Services/>
    </>
  )
}

export default Home
