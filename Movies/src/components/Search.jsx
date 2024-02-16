import React from "react";
import { useState, useEffect } from "react";
import DisplayCard from "./DisplayCard";
import { useParams } from "react-router-dom";
const Search = () => {
  let { inputval } = useParams();
  console.log(inputval);
  let [searchdata,setsearchdata]=useState([])
  async function Fetchingdata(){
      let data=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2d33c24cbe8a02f124cb5c346fccbc02&query==${inputval}`)
      let response = await data.json()
      console.log(response)
      // return await response.results
      setsearchdata(response.results)
  }
  useEffect(()=>{
    Fetchingdata()
  },[])
  return (
    <div className="pt-10 flex flex-col gap-8 ">
      <div className="text-center text-yellow-500 text-3xl font-semibold ">
        {inputval}
      </div>
      <div className="flex flex-wrap justify-around gap-5 px-20">
        <DisplayCard results={searchdata}></DisplayCard>
      </div>
    </div>
  );
};

export default Search;
