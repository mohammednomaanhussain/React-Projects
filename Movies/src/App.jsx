import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <>
    <div className='bg-gray-950  text-white w-[100%]'>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
    </>
  )
}

export default App