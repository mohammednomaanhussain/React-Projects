import React, { useContext, useEffect, useState } from "react";
import { HiOutlinePlus } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { FaRegCopy } from "react-icons/fa";
import Timeinpts from "./Timeinpts";
import { Timercontext } from "../context/context";

const SingleDay = ({ data }) => {
  // data is a object which contains each day schedule day,time slots
  // let datas=data.check
  // The context created previouly is used here for data manupluation like adding,deleting time slot
  let { addnewslot, timerarr, deleteslot,settimearr } = useContext(Timercontext);

  // The below check usestate is maintained for check and uncheck of the check box
  let [check, setcheck] = useState(data.check);


  useEffect(() => {
    setcheck(data.check);
  }, [data.check]);

  let [id, setid] = useState(data.id);

  // The logic below is for the when uesr clicks on the add buttton then the next time slot will be add by an difference of an one hour delay and one hour difference from the previous end time
  let times = timerarr[id - 1].time;
  let len = times.length.toString();
  let enddtime = times[len - 1].end;
  let [timehm, meridian] = enddtime.split(" ");
  let [hours, minutes] = timehm.split(":");

  if (meridian == "PM" && hours !== "12") {
    hours = String(Number(hours) + 12);
  } else if ((meridian = "AM" && hours === "12")) {
    hours = "00";
  }

  const first = `${hours}:${minutes}`;
  let [count, setcount] = useState(1);

  // This function is created for adding more slots when the user clicks pn add icon

  function addonemore(id) {
    const newTime = new Date(`01/01/2022 ${first}`);
    newTime.setHours(newTime.getHours() + 1);
    let newstart = newTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    let [timehm, meridian] = newstart.split(" ");
    let [hours, minutes] = timehm.split(":");
    if (meridian == "PM" && hours !== "12") {
      hours = String(Number(hours) + 12);
    } else if ((meridian = "AM" && hours === "12")) {
      hours = "00";
    }
    const second = `${hours}:${minutes}`;
    const newendTime = new Date(`01/01/2022 ${second}`);
    newendTime.setHours(newendTime.getHours() + 1);
    let newend = newendTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    !check && setcheck(true);
    setcount((count = count + 1));
    let newobj = { id: count, start: newstart, end: newend };
    // Here the newobj contains the newstart & endtime and the newobj is passed to the addnewslotfunction which is created in context and used here
    check && addnewslot(id, newobj);
  }

  // The handledelete function deletes the time slot when the user clicks the Cross icon
  function handledelete(singleindex, id) {
    // Here when then array contains only one time slot and that is also deleted then we are setting the default time slot and storing it in an array when users click on checkbox or add icon that will be displayed
    if (data.time.length === 1) {
      // setcheck(!check);
      setcheck((prevCheck) => !prevCheck)
    }
    // If there are multiple time slots then one of the time slots is deleted by the above function call by id
    else{
    deleteslot(singleindex, id);
  }
  }

  let [err, seterr] = useState(false);
  function handleerr(value) {
    seterr(value);
  }
  function handlecheck(id){
console.log(id)
setcheck(!check)
// setcheck((prevCheck) => !prevCheck);
    // updatecheck(id)
    settimearr((prev) => {
      const updatedState = [...prev];
      const dayIndex =id-1
      if (dayIndex !== -1) {
        updatedState[dayIndex].check = !check;
      }
      return updatedState;
    });
  }
  return (
    <>
      <div className="flex w-full justify-between">
        <div className="flex gap-5 ">
          <div className="flex w-[70px] pt-4 gap-2 ">
            <div>
              {/* this checkbox is for the conditional rendering if check box is checked the the time slots are displayed */}
              <input
                type="checkbox"
                id={data.day}
                key={data.id}
                checked={check}
                onChange={() =>handlecheck(data.id)}
              />
            </div>
            <label
              key={data.id}
              htmlFor={data.day}
              className="text-black font-semibold"
            >
              {data.day}
            </label>
          </div>
          <div>
            {/* if check box is checked the the time slots are displayed  */}
            {check ? (
              data.time.map((elem, index) => (
                <div
                  className="w-[300px] flex items-center gap-4  px-2 py-2"
                  key={elem.id}
                >
                  {/* This component contains the time inputs*/}
                  <Timeinpts
                    key={elem.id}
                    times={elem}
                    dayid={id}
                    singleindex={index}
                    onChangeerr={(value) => handleerr(value)}
                  ></Timeinpts>
                  {/* The below icons is used for deleting the time slot */}
                  <div className=" px-3 py-2 hover:bg-gray-200">
                    <RxCross1
                      onClick={() => {
                        handledelete(index, id);
                      }}
                      className=" "
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-lg font-semibold pt-4">Unavailable</div>
            )}
            {/* if check box is unchecked then unavailable will be displayed*/}
          </div>
        </div>
        <div className="flex gap-8 mt-4">
          <div className="text-xl px-2 py-0.5 h-[40px] w-[40px] flex items-center font-semibold hover:bg-gray-200">
            {/* The below icon is used for adding the time slot when on click the function is called which is written*/}
            <HiOutlinePlus onClick={() => addonemore(id)} />
          </div>
          <div>
            <FaRegCopy />
          </div>
        </div>
      </div>
      {err && (
        <div className="text-red-600 mx-auto  ">
          Please choose an end time Greater than start time
        </div>
      )}
    </>
  );
};

export default SingleDay;
