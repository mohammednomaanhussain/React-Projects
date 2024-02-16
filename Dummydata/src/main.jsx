import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import Search from './components/Search.jsx'
import Singlepost from './components/Singlepost.jsx'
import Table from './components/Table.jsx'


export const Main = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
        <Route path='/' element={<Table/>}/>
          <Route path='/Search/:inputval' element={<Search/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
