import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import Movies from './components/Movies.jsx'
import ContactUs from './components/ContactUs.jsx'
import Signup from './components/Signup.jsx'
import Search from './components/Search.jsx'
import SingleMov from './components/SingleMov.jsx'

export const Main = () => {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<App/>}>
      <Route index element={<Home/>} />
      <Route path='/movies' element={<Movies/>} />
      <Route path='/contact' element={<ContactUs/>} />
      <Route path='/signup' element={<Signup/>} />    
      <Route path='/Movies/:inputval' element={<Search/>} />
      <Route path='/Movies/:title/:id' element={<SingleMov/>} />
    </Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < Main/>
  </React.StrictMode>,
)
