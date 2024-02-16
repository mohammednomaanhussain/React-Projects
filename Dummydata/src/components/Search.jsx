import React from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Singlepost from './Singlepost'
const Search = () => {
    let {inputval} = useParams()
    let [data,setdata]=useState([])
    let [searchdata,setsearchdata]=useState([])
    console.log(inputval)
    async function fetchingdata(){
        let data = await fetch("https://jsonplaceholder.typicode.com/posts")
        let response=await data.json()
        setdata(response)
      }
      useEffect(()=>{fetchingdata()},[])  
      let [popup,setpopup]=useState(false)
      let [id,setid]=useState("")
      function handlesinglepost(id){
        setpopup(!popup)
      setid(id)
      }

      function filteringdata(){
          let filterdata = data.filter((post)=>{
               return post.id == inputval||post.body.toLowerCase().includes(inputval.toLocaleLowerCase())||post.title.includes(inputval)
            })
            setsearchdata(filterdata)
        }
        useEffect(()=>{filteringdata()},[searchdata])
        console.log(searchdata)
  return (
    <>{(searchdata.length==0) ? <div  className='text-center p-10 text-3xl font-semibold text-teal-400'>NO DATA FOUND ACCORDING TO SEARCH VALUE :  <span className='text-orange-600'>{inputval}</span></div>:
       <div className='h-[100%]'>  
            <div className='text-center p-10 text-3xl font-semibold text-teal-400'>Data According To search value:
            <span className='text-orange-600'>{inputval}</span>
            </div>
            <table className='border border-white'>
        <tr className='border'>
            <th className='border text-center p-2 text-xl font-semibold text-yellow-300'>User Id</th>
            <th className='border text-center p-2 text-xl font-semibold text-yellow-300'>Title</th>
            <th className='border text-center p-2 text-xl font-semibold text-yellow-300'>Description</th>
        </tr>
    {searchdata.map((post) => (

        <tr className='border ' onClick={()=>handlesinglepost(post.id)}>
            <td className='border text-center p-2 text-xl font-normal'>{post.id}</td>
            <td className='border text-center p-2  text-xl font-normal'>{post.title}</td>
            <td className='border text-center p-2  text-xl font-normal'>{post.body}</td>
        </tr>
      ))
    }
    </table>
       </div>}
           {popup &&
            <div>
            <Singlepost postid={id} key={id} switchs={handlesinglepost}/>
            </div>}
      </>
  )
}
export default Search