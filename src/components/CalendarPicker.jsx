// src/components/CalendarPicker.js
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "react-time-picker/dist/TimePicker.css";
import styled from "styled-components";
import AvailableTimeSlots from "./available-time-slots";
import TimezoneDropdown from "./timezones-dropdown";


const SchedulingCalendar = ({ onDateChange, onSlotChange, availableSlots, calendarProps }) => {


  return (
    <Container>
      <Grid>
        <Calendar onChange={onDateChange} {...calendarProps} />
        <DropdownContainer>
          <TimezoneDropdown />

        </DropdownContainer>

      </Grid>

      <AvailableTimeSlots availableSlots={availableSlots} onSlotChange={onSlotChange} />
    </Container>
  );
};

export default SchedulingCalendar;

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

  padding: 1rem;
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

const DropdownContainer = styled.div`
  border: 1px solid red;
  flex-grow: 1;
  padding: 3rem 1rem 1rem;
`