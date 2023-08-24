// Function to get user's time zone
function getUserTimeZone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

// Function to convert user's local time to UTC
function convertToUTC(userLocalDate) {
  const userTimeZone = getUserTimeZone();
  return new Date(userLocalDate.toLocaleString("en-US", { timeZone: userTimeZone }));
}

// Function to create time slots in UTC
function createTimeSlots(startDateUTC, endDateUTC, slotDurationMinutes) {
  const timeSlots = [];
  let currentSlot = new Date(startDateUTC);

  while (currentSlot < endDateUTC) {
    timeSlots.push(new Date(currentSlot));
    currentSlot.setMinutes(currentSlot.getMinutes() + slotDurationMinutes);
  }

  return timeSlots;
}

// Example usage
const userTimeZone = "America/New_York"; // Replace this with the user's actual time zone
const startDateLocal = new Date("2023-07-28T09:00:00"); // Replace this with your desired start date in the user's local time
const endDateLocal = new Date("2023-07-28T17:00:00"); // Replace this with your desired end date in the user's local time
const slotDurationMinutes = 30;

const startDateUTC = convertToUTC(startDateLocal);
const endDateUTC = convertToUTC(endDateLocal);

const timeSlots = createTimeSlots(startDateUTC, endDateUTC, slotDurationMinutes);

// Now, `timeSlots` contains an array of Date objects representing the time slots in UTC.
// Display these time slots to the user in their local time zone.
