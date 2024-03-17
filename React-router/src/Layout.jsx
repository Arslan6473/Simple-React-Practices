import React from 'react'
import Header from './MyPages/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './MyPages/Footer/Footer'

function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout