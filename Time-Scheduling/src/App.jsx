import React, { useState } from "react";
// import Schedule from "./components/Schedule";
import { FaRegWindowClose } from "react-icons/fa";
import Timer from "./components/Timer";
const App = () => {
  let [val, setval] = useState(false);
  let [edit,setedit]=useState(false)
  return (
    <>
    {/* The below div acts as a button when the user clicks it then the value of the state changes by popup function and it displays the popup screen for weekely hours */}
      <div
        onClick={()=>setval(true)}
        className="text-2xl inline-block  font-bold mx-auto text-blue-600 bg-white border-white shadow-lg rounded-2xl mt-20 p-6 border cursor-pointer"
      >
        Availability
      </div>
      <div
        onClick={()=>setedit(true)}
        className="text-2xl inline-block  font-bold mx-auto text-blue-600 bg-white border-white shadow-lg rounded-2xl mt-20 p-6 border cursor-pointer"
      >
      EDIT
      </div>

      {
        val && <div className="w-full h-[100vh] bg-black fixed inset-0 bg-opacity-50 backdrop-blur-lg overflow-scroll">
        <div className=" w-[600px] border bg-white shadow-lg p-8 mx-auto my-10 flex flex-col justify-center">
          <div className="flex justify-between items-center">
            <div className="text-2xl text-black font-semibold mb-3">
              Weekly Hours
            </div>
            <div onClick={()=>setval(!val)} className="text-2xl hover:text-3xl">
              <FaRegWindowClose />
            </div>
            {/* The above tag is an close icon imported from the react icons on click of that icon the value of the usestate in app.jsx will be changed by false and the popup is closed*/}
          </div>
          <Timer values="create"></Timer>
        </div>
      </div>
      }

      {
        edit && <div className="w-full h-[100vh] bg-black fixed inset-0 bg-opacity-50 backdrop-blur-lg overflow-scroll">
        <div className=" w-[600px] border bg-white shadow-lg p-8 mx-auto my-10 flex flex-col justify-center">
          <div className="flex justify-between items-center">
            <div className="text-2xl text-black font-semibold mb-3">
              Weekly Hours
            </div>
            <div onClick={()=>setedit(!edit)} className="text-2xl hover:text-3xl">
              <FaRegWindowClose />
            </div>
            {/* The above tag is an close icon imported from the react icons on click of that icon the value of the usestate in app.jsx will be changed by false and the popup is closed*/}
          </div>
          <Timer values="edits"></Timer>
        </div>
      </div>
      }
    </>
  );
};

export default App;
