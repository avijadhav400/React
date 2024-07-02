import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './componets/Header/Header'
import Footer from './componets/Footer/Footer'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout