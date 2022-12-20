import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

function CalendarCmp() {
  const [value, onChange] = useState(new Date());
  return (
    <Calendar
      sx={ { width: "100%" } }
      className="calendar"
      onChange={ onChange }
      value={ value }
    />
  );
}
export default CalendarCmp