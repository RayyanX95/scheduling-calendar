// src/App.js
import React, { useState } from "react";
import SchedulingCalendar from "./components/CalendarPicker";
import styled from "styled-components";

import "./App.css"
import TimeSlotScheduler from "./components/AppointmentForm";

const _slots = [{
  time: ""
}]

// const availableSlots = ["9:00am", "9:30am", "10:00am", "10:30am", "11:00am", "11:30", "12:00am", "12:30", "13:00", "13:30", "14:00", "14:30",];

const TIME_SLOTS = [
  "00:00",
  "00:30",
  "01:00",
  "01:30",
  "02:00",
  "02:30",
  "03:00",
  "03:30",
  "04:00",
  "04:30",
  "05:00",
  "05:30",
  "06:00",
  "06:30",
  "07:00",
  "07:30",
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
  "23:30",
];

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

  const convertTimeSlotFormatToIntegerNumber = (timeSlot, offset) => {
    console.log('timeSlot', timeSlot)
    console.log('offset', offset)
    const timeSlotInt = Number(timeSlot.split(":")[0]) + Number(timeSlot.split(":")[1] / 60);
    const offsetInt = Number(offset.split(":")[0]) + Number(offset.split(":")[1] / 60);
    console.log('timeSlotInt', timeSlotInt)
    console.log('offsetInt', offsetInt)
    console.log('timeSlotInt + offsetInt', timeSlotInt + offsetInt)

    return timeSlotInt + offsetInt;
  }

  const calculateUserSlotAccordingToHisTimeZone = (destinationTimezone, sourceTimezone, timeSlot) => {
    const timeInt = Number(timeSlot.split(":")[0])
    // console.log('timeInt', timeInt)

    // const destTimeIn
  }


  const timeInt = convertTimeSlotFormatToIntegerNumber(TIME_SLOTS[9], "02:00")
  const calculatedTimeInSlotFormat = `${Math.trunc(timeInt).toString().padStart(2, "0")}:${(timeInt % 1 * 60).toString().padStart(2, "0")}`;
  console.log('calculatedTimeInSlotFormat', calculatedTimeInSlotFormat)

  return (
    <Container>
      <h1>Calendly - Calendar and Time Picker</h1>
      <SchedulingCalendar
        onDateChange={handleDateChange}
        calendarProps={calendarProps}
        availableSlots={TIME_SLOTS}
        onSlotChange={handleTimeChange}
      />
      <div>
        <h2>Selected Date:</h2>
        <p>{selectedDate.toDateString()}</p>
        <h2>Selected (Mentor) Time:</h2>
        <p>{selectedTime}</p>
        <h2>Selected (User) Time:</h2>
        <p>{calculateUserSlotAccordingToHisTimeZone("", "", selectedTime)}</p>
      </div>


      {/* <TimeSlotScheduler /> */}
    </Container>
  );
};

export default App;

const Container = styled.div`
  padding: 3rem;
`
