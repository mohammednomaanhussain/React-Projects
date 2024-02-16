import React from "react";
import { Loadercard } from "./Loadercomponent";
import { Link } from "react-router-dom";

const DisplayCard = ({ results }) => {
//   console.log(results);
  return (
    <>
    {(results.length == 0) ? <Loadercard/> : results.map((elem, index) => (
        <Link to={`/Movies/${elem.title}/${elem.id}`}> <div className="w-[250px] h-[400px] bg-gray-600 p-6 flex flex-col gap-3  items-center rounded shadow-md shadow-white">
          <div>
            <img
              className="h-[270px] w-[210px] border"
              src={`https://image.tmdb.org/t/p/original/${elem.poster_path}`}
              alt=""
            />
          </div>
          <div className="text-xl text-black font-semibold">
            {elem.title}
          </div>
        </div>
      </Link>
      ))}
    </>
  );
};

export default DisplayCard;
