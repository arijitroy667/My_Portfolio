import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from "./Header"
import ScrollProgress from './Home_elements/ScrollProgress'
function Layout() {
  return (
    <>
    <Header />
    <ScrollProgress />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout
