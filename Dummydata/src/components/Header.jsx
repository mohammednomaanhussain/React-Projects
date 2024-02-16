import React from 'react'
import { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Header = () => {
    let [inputval,setinputval]=useState("")
    let navigate=useNavigate()
  return (
<>
    <div className='h-[100px] flex items-center justify-around border-b-2 border-white'>
        <div className='text-3xl font-bold text-orange-600'>Dummy Posts</div>
        <form onSubmit={(e)=>{navigate(`Search/${inputval}`)}} className='bg-gray-700 w-[40%] flex gap-3 p-1 rounded-sm'>
          <input type="text" placeholder='Search for post' value={inputval} onChange={(e)=>{setinputval(e.target.value)}} className='bg-gray-700 w-full outline-none px-2 py-1'/>
        <button type='submit'><FaSearch /></button>
        </form>
    </div>

</>
  )
}

export default Header