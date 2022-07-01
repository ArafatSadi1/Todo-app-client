import React from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

const Calender = ({ selectedDay, setSelectedDay}) => {
  
  let footer = <p>Please pick a day.</p>;
  if (selectedDay) {
    footer = <p>You picked {format(selectedDay, "PPp")}.</p>;
  }
  return (
    <div className="w-full h-screen bg-indigo-200 pt-6">
      <div className="card bg-base-100 shadow-xl w-11/12 lg:w-96 mx-auto">
      <DayPicker
        className="mx-auto p-3"
        mode="single"
        required
        selected={selectedDay}
        onSelect={setSelectedDay}
        footer={footer}
      />
    </div>
    </div>
  );
};

export default Calender;