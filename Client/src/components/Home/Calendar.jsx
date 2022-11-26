import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import EventList from '../Group/GroupEventList.jsx'

const { useState, useEffect } = React;
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

function CalendarComponent (props) {
  const [eventList, setEventList] = useState({events:[]});
  let [date, setDate] = useState(new Date())
  let onChange = (dateClicked) => {
    console.log(dateClicked);
    setDate(dateClicked);
  }
  useEffect(()=>{
    checkEvents();
  },[date])
  useEffect(()=> {
    checkEvents();
  },[props.eventList])
  let checkEvents = () => {
    var dateEvents = []
    props.eventList.events.forEach(event =>{
      let eventDate = new Date(event.json_build_object.date);
      if(
        date.getDate() === eventDate.getDate() &&
        date.getMonth() === eventDate.getMonth() &&
        date.getFullYear() === eventDate.getFullYear()
      ) {
        dateEvents.push(event);
      }
    })
    setEventList({events: dateEvents})
  }

  return (
  <div>
      <Calendar
        onChange={onChange}
        value= {date}
      >
      </Calendar>
      <h3 className='italic'> Events for {monthNames[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</h3>
      <EventList eventList={eventList}></EventList>
  </div>
  )
}

export default CalendarComponent;