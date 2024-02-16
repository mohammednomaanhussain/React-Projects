import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';

const SingleMov = () => {
  let { id } = useParams();
  let { title }=useParams();
  // console.log(id);
  // console.log(title)
  let [filtereddata,setfiltereddata]=useState({})
  async function Fetchingdata(){
      let data=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2d33c24cbe8a02f124cb5c346fccbc02&query==${title}`)
      let response = await data.json()
      // console.log(response)
      let dataarr =  response.results
      console.log(dataarr)
      let mov=dataarr.filter((elem)=>{
        return elem.id == id })
        setfiltereddata(...mov)
  }
  console.log(filtereddata)
    useEffect(()=>{
    Fetchingdata()
  },[])
  return (
    <>
      <div className='container m-auto mt-16 h-[600px] w-[80%] border text-white p-8 flex '>
        <div className=''><img className=' h-[550px] w-auto' src={`https://image.tmdb.org/t/p/original/${filtereddata.poster_path}`} alt="" /></div>
        <div className='border'>
            <div className='text-yellow-500 text-2xl font-bold font-serif'>{filtereddata.title}</div>
            <div></div>
        </div>
    
      </div>
  </>
  )
}
export default SingleMov