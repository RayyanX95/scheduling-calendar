import React, { useState } from 'react'
import styled from 'styled-components';

const AvailableTimeSlots = ({ availableSlots, onSlotChange }) => {
  const [selectedSlot, setSelectedSlot] = useState();

  const selectSlotHandler = (selectedSlot) => {
    setSelectedSlot(selectedSlot)
    onSlotChange(selectedSlot)
  }

  return (
    <SlotsContainer>
      {availableSlots.map((slot) => (
        <TimeItem isSelected={selectedSlot === slot} onClick={() => selectSlotHandler(slot)} >{slot}</TimeItem>
      ))}
    </SlotsContainer>
  )
}

export default AvailableTimeSlots;

const SlotsContainer = styled.div`
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