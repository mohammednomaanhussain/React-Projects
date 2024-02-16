import React, { useEffect, useState } from 'react'
import DisplayCard from './DisplayCard'

const Home = () => {
let[Trending,setTrending] =useState([])
  async function Fetchingdata(){
    
      let data=await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=2d33c24cbe8a02f124cb5c346fccbc02")
      let response = await data.json()
      // console.log(response)
      // return await response.results
      setTrending(response.results)
  }
  useEffect(()=>{
    Fetchingdata()
  },[])
let[Popular,setPopular] =useState([])
  async function Fetchingpopdata(){

      let data=await fetch("https://api.themoviedb.org/3/movie/popular?api_key=2d33c24cbe8a02f124cb5c346fccbc02")
      let response = await data.json()
      // console.log(response)
      // return await response.results
      setPopular(response.results)
  }
  useEffect(()=>{
    Fetchingpopdata()
  },[])
let[upcomming,setupcomming] =useState([])
  async function Fetchingupdata(){

      let data=await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=2d33c24cbe8a02f124cb5c346fccbc02")
      let response = await data.json()
      // console.log(response)
      // return await response.results
      setupcomming(response.results)
  }
  useEffect(()=>{
    Fetchingupdata()
  },[])
let[TopRated,setTopRated] =useState([])
  async function Fetchingtopdata(){

      let data=await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=2d33c24cbe8a02f124cb5c346fccbc02")
      let response = await data.json()
      // console.log(response)
      // return await response.results
      setTopRated(response.results)
  }
  useEffect(()=>{
    Fetchingtopdata()
  },[])
  return (
    <>
    <div className='pt-10 flex flex-col gap-8 '>
    <div className='text-center text-yellow-500 text-3xl font-semibold '>Trending Movies</div>
    <div className='flex flex-wrap justify-around gap-5 px-20'>
    <DisplayCard results={Trending} key={1} ></DisplayCard>
    </div>
    </div>
    <div className='pt-10 flex flex-col gap-8 '>
    <div className='text-center text-yellow-500 text-3xl font-semibold '>Popular</div>
    <div className='flex flex-wrap justify-around gap-5 px-20'>
    <DisplayCard results={Popular} key={2}></DisplayCard>
    </div>
    </div>
    <div className='pt-10 flex flex-col gap-8 '>
    <div className='text-center text-yellow-500 text-3xl font-semibold '>Upcomming</div>
    <div className='flex flex-wrap justify-around gap-5 px-20'>
    <DisplayCard results={upcomming} key={3}></DisplayCard>
    </div>
    </div>
    <div className='pt-10 flex flex-col gap-8 '>
    <div className='text-center text-yellow-500 text-3xl font-semibold '>Top-Rated</div>
    <div className='flex flex-wrap justify-around gap-5 px-20'>
    <DisplayCard results={TopRated} key={4}></DisplayCard>
    </div>
    </div>
    </>
  )
}

export default Home