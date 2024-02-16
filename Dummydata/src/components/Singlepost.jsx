import React, { useState ,useEffect} from 'react'
import { FaRegWindowClose } from "react-icons/fa";

const Singlepost = ({ switchs , postid }) => {
  console.log(postid)
  let [data,setdata]=useState({})
  async function fetchingdata(){
    let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`)
    let response=await data.json()
    setdata(response)
  }
  // console.log(data)
  useEffect(()=>{fetchingdata()},[])
  console.log(data)
  return (
    <div className="w-full h-[100vh] bg-black fixed inset-0 bg-opacity-50 backdrop-blur-lg flex items-center justify-center ">
     <div className='w-[500px] shadow-md shadow-gray-500 p-10  flex flex-col gap-10'>
      <div className='flex justify-between items-center'>
        <div className='text-3xl font-semibold text-red-400'>SinglePost</div>
        <div onClick={switchs} className="text-2xl text-red-600" title='close'><FaRegWindowClose /></div>
        </div>
        <div className='flex flex-col gap-3'> 
          <div className='flex flex-col gap-1'><span className='text-2xl text-yellow-500'>User ID :</span><span className='text-xl text-emerald-300'>{data.id}</span></div>
          <div className='flex flex-col gap-1'><span className='text-2xl text-yellow-500'>Title :</span><span className='text-xl text-emerald-300'>{data.title}</span></div>
          <div className='flex flex-col gap-1'><span className='text-2xl text-yellow-500'>Description :</span><span className='text-xl text-emerald-300'>{data.body}</span></div>
        </div>
      </div> 
     
      
      </div>
  )
}

export default Singlepost