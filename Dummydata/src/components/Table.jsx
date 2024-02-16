import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Singlepost from "./Singlepost";

const Table = () => {
  let [count,setcount]=useState(1)
  let [data, setdata] = useState([]);
  let [page, setpage] = useState(1);
  let [startindex, setstartindex] = useState(0);
  async function fetchingdata() {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    let response = await data.json();
    setdata(response);
  }
  // console.log(data)
  useEffect(() => {
    fetchingdata();
  }, []);
  function next() {
    setstartindex(startindex + 10);
    setcount(count+1);
  }
  function previous() {
    setstartindex(startindex - 10);
    setcount(count-1);
  }
  if(count == 10){
    alert("The END")
  }
  let displaydata = data.slice(startindex, startindex + 10);
  let [popup, setpopup] = useState(false);
  let [id, setid] = useState("");
  function handlesinglepost(id) {
    setpopup(!popup);
    setid(id);
  }

  return (
    <>
      <div className="flex flex-col items-center gap-16">
        <div className="text-3xl font-semibold text-yellow-400 pt-6">
          All posts
        </div>
        <table className="border border-white">
          <tr className="border">
            <th className="border text-center p-2 text-xl font-semibold text-yellow-300">
              User Id
            </th>
            <th className="border text-center p-2 text-xl font-semibold text-yellow-300">
              Title
            </th>
            <th className="border text-center p-2 text-xl font-semibold text-yellow-300">
              Description
            </th>
          </tr>
          {displaydata.map((post) => (
            <tr className="border" onClick={() => handlesinglepost(post.id)}>
              <td className="border text-center p-2 text-xl font-normal  cursor-pointer">
                {post.id}
              </td>
              <td className="border text-center p-2  text-xl font-normal cursor-pointer">
                {post.title}
              </td>
              <td className="border text-center p-2  text-xl font-normal cursor-pointer">
                {post.body}
              </td>
            </tr>
          ))}
        </table>
        <div className="w-[100%] flex items-center justify-around gap-16 my-5">
          <div>
          {startindex >= 10 && (
              <button
                onClick={previous}
                className="px-5 py-2 rounded-sm  bg-red-600 text-white text-2xl "
              >
                Previous
              </button>
          )}
          </div>
          <div className="text-2xl font-semibold text-emerald-400 border px-6 py-1">Page Of {count}/10</div>
          <div>
          {!(startindex == 90)&&
          (
              <button
                onClick={next}
                className="px-5 py-2 bg-red-600 rounded-sm text-white text-2xl"
              >
                Next
              </button>
          )}
          </div>
        </div>
      </div>
      {popup && (
        <div>
          <Singlepost postid={id} key={id} switchs={handlesinglepost} />
        </div>
      )}
    </>
  );
};

export default Table;
