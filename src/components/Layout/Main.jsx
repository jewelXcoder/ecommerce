import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router'
const Main = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Main
