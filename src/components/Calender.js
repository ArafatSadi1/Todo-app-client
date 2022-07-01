import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

const Calender = () => {
  const [selected, setSelected] = useState();
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <div className="card bg-base-100 shadow-xl w-11/12 lg:w-96 mt-4 mx-auto">
      <DayPicker
        className="mx-auto p-3"
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={footer}
      />
    </div>
  );
};

export default Calender;
