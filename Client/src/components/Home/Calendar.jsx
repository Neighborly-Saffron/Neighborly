import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const { useState, useEffect } = React;

function CalendarComponent (props) {

  let [date, setDate] = useState(new Date())
  let onChange = (dateClicked) => {
    console.log(dateClicked);
    setDate(dateClicked);
  }
  return (
  <div className="map" style={{width:'50vw', height:'50vh'}}>
      <Calendar
        onChange={onChange}
        value= {date}
      >
      </Calendar>
  </div>
  )
}

export default CalendarComponent;