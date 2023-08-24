// src/TimePicker.js
import React, { useState } from "react";

const TimePicker = ({ value, onChange }) => {
  const [hours, setHours] = useState("12");
  const [minutes, setMinutes] = useState("00");
  const [amPm, setAmPm] = useState("AM");

  const handleHourChange = (event) => {
    setHours(event.target.value);
    onChange(`${event.target.value}:${minutes} ${amPm}`);
  };

  const handleMinuteChange = (event) => {
    setMinutes(event.target.value);
    onChange(`${hours}:${event.target.value} ${amPm}`);
  };

  const handleAmPmChange = () => {
    setAmPm(amPm === "AM" ? "PM" : "AM");
    onChange(`${hours}:${minutes} ${amPm === "AM" ? "PM" : "AM"}`);
  };

  return (
    <div className="time-picker">
      <input type="number" value={hours} min="1" max="12" onChange={handleHourChange} />
      <span>:</span>
      <input type="number" value={minutes} min="0" max="59" onChange={handleMinuteChange} />
      <button onClick={handleAmPmChange}>{amPm}</button>
    </div>
  );
};

export default TimePicker;
