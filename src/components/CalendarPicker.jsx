// src/components/CalendarPicker.js
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "react-time-picker/dist/TimePicker.css";
import styled from "styled-components";


const CalendarPicker = ({ onDateChange, onSlotChange, availableSlots, calendarProps }) => {
  const [selectedSlot, setSelectedSlot] = useState();

  const selectSlotHandler = (selectedSlot) => {
    setSelectedSlot(selectedSlot)
    onSlotChange(selectedSlot)
  }

  return (
    <Container>
      <Calendar onChange={onDateChange} {...calendarProps} />

      <AvailableSlots>
        {availableSlots.map((slot) => (
          <TimeItem isSelected={selectedSlot === slot} onClick={() => selectSlotHandler(slot)} >{slot}</TimeItem>
        ))}
      </AvailableSlots>
    </Container>
  );
};

export default CalendarPicker;

const Container = styled.div`
  display: flex;
  /* width: auto; */
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid #bbb;
  /* padding: 1rem 2rem;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 8px 32px rgba(0, 0, 0, 0.25);
  } */
`

const AvailableSlots = styled.div`
  max-height: 22rem;
  margin-left: 3rem;
  overflow-y: auto;
  scroll-behavior: smooth;
  margin-top: 1rem;
  padding-right: 2rem;

/* scrollbar for webkit-based browsers (Chrome, Safari) */
&::-webkit-scrollbar {
    width: 10px;
    background-color: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  /* Edged ends for webkit-based browsers */
  &::-webkit-scrollbar-corner {
    background: #f1f1f1;
  }

  /* scrollbar for Firefox */
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;

  > div {
    margin-bottom: 1rem;
  }
`

const TimeItem = styled.div`
  width: 10rem;
  border: 1px solid #007bff;
  height: 3rem;
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  font-weight: bold;
  background-color: ${props => (props.isSelected ? "#007bff" : "#fff")};
  color: ${props => (props.isSelected ? "#fff" : "#007bff")};

  &:hover {
    border-width: 3px;
  }
`
