// src/App.js
import React, { useState } from "react";
import CalendarPicker from "./components/CalendarPicker";
import styled from "styled-components";

import "./App.css"
import TimeSlotScheduler from "./components/AppointmentForm";

const _slots = [{
  time: ""
}]

const availableSlots = ["9:00am", "9:30am", "10:00am", "10:30am", "11:00am", "11:30", "12:00am", "12:30", "13:00", "13:30", "14:00", "14:30",];

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("12:00");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const getLastDateOfNextTwoMonths = () => {
    const currentDate = new Date();
    const nextTwoMonths = new Date(currentDate.setMonth(currentDate.getMonth() + 2));
    const lastDayOfNextTwoMonths = new Date(nextTwoMonths.getFullYear(), nextTwoMonths.getMonth() + 1, 0);
    return lastDayOfNextTwoMonths;
  };

  const calendarProps = {
    className: "react-calendar-overwrites",
    minDate: new Date(),
    maxDate: getLastDateOfNextTwoMonths()
  }

  return (
    <Container>
      <h1>Calendly - Calendar and Time Picker</h1>
      <CalendarPicker
        onDateChange={handleDateChange}
        calendarProps={calendarProps}
        availableSlots={availableSlots}
        onSlotChange={handleTimeChange}
      />
      <div>
        <h2>Selected Date:</h2>
        <p>{selectedDate.toDateString()}</p>
        <h2>Selected Time:</h2>
        <p>{selectedTime}</p>
      </div>


      <br />
      <TimeSlotScheduler />
    </Container>
  );
};

export default App;

const Container = styled.div`
  padding: 3rem;
`
