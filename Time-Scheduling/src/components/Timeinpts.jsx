import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { Timercontext } from "../context/context";

const Timeinpts = ({ times, dayid, onChangeerr }) => {
  // same here the context is used for the updation of the start and end value of particular time slot
  let { updatestartslot, updateendslot } = useContext(Timercontext);


  let [id, setid] = useState(times.id);
  let [err, seterr] = useState(false);
  let [start, setstart] = useState(times.start);
  let [end, setend] = useState(times.end);

  let [slotsleftbol, setslotsleftbol] = useState(false);
  let [slotsrightbol, setslotsrightbol] = useState(false);

  const [timeSlots, setTimeSlots] = useState([]);

// This function generates the timeslots of 15 min difference for the complete 24 hours time
  function generateTimeSlots(){
    const start = new Date(`01/01/2022 00:00`);
    const end = new Date(`01/01/2022 23:45`);
    const interval = 15 * 60 * 1000;
    const slots = [];
    for (
      let time = start;
      time <= end;
      time.setTime(time.getTime() + interval)
    ) {
      const formattedTime = new Date(time).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      slots.push(formattedTime);
    }
    setTimeSlots(slots);
  };

  useEffect(() => {
    generateTimeSlots();
  }, []);

  // The below logic converts the start time in 24 horus format for conditional rendering 
  let [timehm, meridian] = start.split(" ");
  let [hours, minutes] = timehm.split(":");
  if (meridian == "PM" && hours !== "12") {
    hours = String(Number(hours) + 12);
  } else if ((meridian = "AM" && hours === "12")) {
    hours = "00";
  }
  let newstarthrs = `${hours}`;
  let newstartmin = `${minutes}`;
  // console.log(end)

  // the 
  let [timehmen, meridians] = end.split(" ");
  let [hoursen, minutesen] = timehmen.split(":");
  if (meridians == "PM" && hoursen !== "12") {
    hoursen = String(Number(hoursen) + 12);
  } else if ((meridians = "AM" && hoursen === "12")) {
    hoursen = "00";
  }
  let newendhrs = `${hoursen}`;
  let newendmin = `${minutesen}`;

  useEffect(() => {
    if (newstarthrs == newendhrs) {
      if (newstartmin > newendmin) {
        // console.log(newstarthrs,newendhrs)
        // console.log("if hours are equal and startmin is greater than endmin")
        seterr(true);
        onChangeerr(true);
      } else if (newstartmin == newendmin) {
        // console.log(newstartmin,newendmin)
        // console.log("if hours are equal and mins are also equal")
        seterr(true);
        onChangeerr(true);
      } else {
        seterr(false);
        // console.log("hrs are equal and startmins are less than that of end mins")
        onChangeerr(false);
      }
    } else if (newstarthrs > newendhrs) {
      // console.log(newstarthrs,newendhrs)
      // console.log("start hours are greater than end horus")
      seterr(true);
      onChangeerr(true);
    } else {
      // console.log(newstarthrs,newendhrs)
      // console.log("start hours are less than end hours so there is no tension")
      seterr(false);
      onChangeerr(false);
    }
  });
  
  function handlestarttimebyslot(slottime, id, dayid) {
    setstart(slottime);
    updatestartslot(slottime, id, dayid);
  }

  function handleendtimebyslot(slottime, id, dayid) {
    setend(slottime);
    updateendslot(slottime, id, dayid);
  }

  return (
    <>
      <div className="flex items-center gap-2  ">
        <div className="border px-2 py-3 rounded-md border-black ">
          <input
            type="text"
            className="w-[80px] outline-none"
            value={start}
            onFocus={() => setslotsleftbol(true)}
            onBlur={() => {
              setTimeout(() => {
                setslotsleftbol(false);
              }, 200);
            }}
            readOnly
          />
          {slotsleftbol && (
            <div className="h-[170px] border text-gray-600 bg-white m-4 absolute    overflow-scroll overflow-x-hidden shadow-sm">
              {timeSlots.map((slot, index) => (
                <div
                  className=" px-3 py-1.5 cursor-pointer"
                  onClick={() => {
                    handlestarttimebyslot(slot, id, dayid);
                  }}
                  key={index}
                >
                  {slot}
                </div>
              ))}
            </div>
          )}
        </div>
        <div>-</div>
        <div
          className={
            err
              ? "border px-2 py-3 rounded-md border-red-600"
              : "border px-2 py-3 rounded-md border-black"
          }
        >
          <input
            type="text"
            className="w-[80px] outline-none"
            value={end}
            onFocus={() => setslotsrightbol(true)}
            onBlur={() => {
              setTimeout(() => {
                setslotsrightbol(false);
              }, 200);
            }}
            readOnly
          />
          {slotsrightbol && (
            <div className="h-[170px]  border text-gray-600 bg-white m-4 absolute overflow-scroll overflow-x-hidden shadow-md">
              {timeSlots.map((slot, index) => (
                <div
                  className="px-3 py-1.5 cursor-pointer"
                  onClick={() => {
                    handleendtimebyslot(slot, id, dayid);
                  }}
                  key={index}
                >
                  {slot}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
    // </React.StrictMode>
  );
};
export default Timeinpts;
