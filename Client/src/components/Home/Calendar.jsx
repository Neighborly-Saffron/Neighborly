import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import EventList from '../Group/GroupEventList.jsx'

const { useState, useEffect } = React;

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
  useEffect(()=>console.log(eventList),[eventList])
  return (
  <div className="flex gap-5 sm:flex-col">
      <EventList eventList={eventList} userId={props.userId}></EventList>
      <Calendar
        onChange={onChange}
        value= {date}
      >
      </Calendar>
  </div>
  )
}

export default CalendarComponent;