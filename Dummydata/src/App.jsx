import React from 'react'
import Header from './components/Header'
import Table from './components/Table'
import { Outlet } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <>
    <div className='bg-gray-900 min-h-screen text-gray-300 px-28'>
    <Header></Header>
    <Outlet></Outlet>
    </div>
    </>
  )
}

export default App