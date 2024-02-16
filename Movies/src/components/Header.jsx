import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import { FaSearch } from "react-icons/fa";
const Header = () => {
  let [inputval, setinputval] = useState("");
  console.log(inputval);
const navigate = useNavigate()
  return (
    <>
      <div className="container w-full h-20 flex justify-around items-center border-b-2 ">
        <Link to="/">
          <div className="leftnav text-3xl font-bold">Movies Hub</div>
        </Link>
        <div className="midnav flex gap-10 text-xl font-semibold">
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="movies">
            <div>Movies</div>
          </Link>
          <Link to="contact">
            <div>Contact Us</div>
          </Link>
          <Link to="signup">
            <div>Sign Up</div>
          </Link>
        </div>



        <form className="flex items-center  bg-gray-900 gap-2 px-2 rounded " 
        onSubmit={e=>{
          navigate(`/Movies/${inputval}`)
        }
       }>
          <input
            type="text"
            placeholder="Search movies"
            className="px-5 outline-none text-lg py-2 bg-gray-900 text-white"
            value={inputval}
            onChange={(e) => setinputval(e.target.value)}
          />
          <button type="submit" className="text-white">
              <FaSearch />
          </button>
        </form>
      </div>
    </>
  );
};

export default Header;
