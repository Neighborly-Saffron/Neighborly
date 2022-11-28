import React from 'react'
import Calendar from 'react-calendar'
import '../../../Assets/reactCalendar.css'
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
    tileClassName({date:date,view:'month'});
  },[props.eventList])
  let checkEvents = () => {
    var dateEvents = []
    props.eventList.events.forEach(event =>{
      let eventDate = new Date((event.json_build_object.date + 'T00:00:00').replace(/-/g, '\/').replace(/T.+/, ''))
      if(checkDate(date, eventDate)) {
          dateEvents.push(event);
        }
      })
      setEventList({events: dateEvents})
    }
    function tileClassName({ date, view }) {
      // Add class to tiles in month view only
      if (view === 'month') {
        // Check if a date React-Calendar wants to check is on the list of dates to add class to
        if (props.eventList.events.find(event => {
          let eventDate = new Date((event.json_build_object.date + 'T00:00:00').replace(/-/g, '\/').replace(/T.+/, ''))
          return checkDate(date, eventDate);
          }))
          {
            return 'hasEvent';
          }
      }
    }
    let checkDate = ((checkDate, eventDate) => {
      if(checkDate.getDate() === eventDate.getDate() &&
        checkDate.getMonth() === eventDate.getMonth() &&
        checkDate.getFullYear() === eventDate.getFullYear()
      ) {return true}
      return false
    })

    return (
      <div className='flex gap-2 sm:flex-col'>
      <Calendar
        onChange={onChange}
        value= {date}
        tileClassName={tileClassName}
        calendarType={'US'}
        >
      </Calendar>
      <div>
        <h3 className='italic'> Events for {monthNames[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</h3>
        <EventList eventList={eventList}></EventList>

      </div>
  </div>
  )
}

export default CalendarComponent;