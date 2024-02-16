import React, { useEffect, useState } from "react";
import SingleDay from "./SingleDay";
import { Timercontext } from "../context/context";
const Timer = ({ values }) => {
  // This is the main usestate array which contains all the multiple objects as per the days and that days also contain the time array which initialliy contains one default object for default start value and default end value
  // let [checks,setcheck] =useState(true)

  let [timerarr, settimearr] = useState([
    {
      id: 1,
      check:true,
      day: "SUN",
      time: [{ id: 1, start: "09:00 AM", end: "05:00 PM" }],
    },
    {
      id: 2,
      check:true,
      day: "MON",
      time: [{ id: 1, start: "09:00 AM", end: "05:00 PM" }],
    },
    {
      id: 3,
      check:true,
      day: "TUE",
      time: [{ id: 1, start: "09:00 AM", end: "05:00 PM" }],
    },
    {
      id: 4,
      check:true,
      day: "WED",
      time: [{ id: 1, start: "09:00 AM", end: "05:00 PM" }],
    },
    {
      id: 5,
      check:true,
      day: "THU",
      time: [{ id: 1, start: "09:00 AM", end: "05:00 PM" }],
    },
    {
      id: 6,
      check:true,
      day: "FRI",
      time: [{ id: 1, start: "09:00 AM", end: "05:00 PM" }],
    },
    {
      id: 7,
      check:true,
      day: "SAT",
      time: [{ id: 1, start: "09:00 AM", end: "05:00 PM" }],
    },
  ]);

  let [create, setcreate] = useState(false);
  let [edit, setedit] = useState(false);

  useEffect(() => {
    if (values == "create") {
      setcreate(!create);
    }
    if (values == "edits") {
      setedit(!edit);
    }
  }, []);
  function addnewslot(id, newobj) {
    settimearr((prev) => {
      let updatedstate = [...prev];
      updatedstate[id - 1].time.push(newobj);
      return updatedstate;
    });
  }
  function deleteslot(singleindex, id) {
    settimearr((prev) => {
      let updatedstate = [...prev];
      updatedstate[id - 1].time.splice(singleindex, 1);
      return updatedstate;
    });
  }
  function updatestartslot(slottime, index, dayid) {
    settimearr((prev) => {
      let updatedstate = [...prev];
      updatedstate[dayid - 1].time[index - 1].start = slottime;
      return updatedstate;
    });
    console.log(timerarr);
  }
  function updateendslot(slottime, index, dayid){
    settimearr((prev) => {
      let updatedstate = [...prev];
      updatedstate[dayid - 1].time[index - 1].end = slottime;
      return updatedstate;
    });
  }

  useEffect(() => {
    if (edit) {
      const recievedarr = JSON.parse(localStorage.getItem("Array"));
      console.log(recievedarr);
      settimearr(recievedarr);
      console.log(timerarr);
      // settimearr((prev) =>
      // prev.map((day, index) => ({
      //   ...day,
      //   check: recievedarr[index].check,
      // })))
    }
  }, [edit]);

  return (
    <>
      {/* Here there is a context created for proper manupluation of the times anding,deleting,updation of starttime,updation of endtime of time slots which contains the array and functions*/}
      <Timercontext.Provider
        value={{
          timerarr,
          addnewslot,
          deleteslot,
          updatestartslot,
          updateendslot,
          settimearr,
        }}
      >
        {/* Array is mapped here and each object of that array is passed as a props to an singleday component */}
        {timerarr.map((elem) => (
          <SingleDay key={elem.day} checking={elem.check} data={elem} />
        ))}
        {/*Add changes button is used as a submit button here when the user clicks on it then the complete schedule of that week is consoled*/}
        {create && (
          <button
            className="mx-auto border mt-4 py-2 px-3 bg-blue-500 text-lg font-semibold text-white rounded-md"
            onClick={() => {
              localStorage.setItem("Array", JSON.stringify(timerarr));
              alert(".....SCHEDULE ADDED SUCCESSFULLY....");
            }}
          >
            Add schedule
          </button>
        )}
        {edit && (
          <button
            className="mx-auto border mt-4 py-2 px-3 bg-blue-500 text-lg font-semibold text-white rounded-md"
            onClick={() => {
              localStorage.setItem("Array", JSON.stringify(timerarr));
              alert(".....CHANGES SAVED SUCCESSFULLY.....");
            }}
          >
            Save Changes
          </button>
        )}
      </Timercontext.Provider>
    </>
  );
};
export default Timer;
