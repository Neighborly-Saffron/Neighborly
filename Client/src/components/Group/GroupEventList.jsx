import React from 'react';
import axios from 'axios';
import EventItem from './EventItem.jsx'

const { useState, useEffect } = React;

function GroupEventList() {
  const [events, setEvents] = useState([])

  const getEvents = () => {
    axios.get(`/events`)
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => console.log('error getting group event data'))
  }

  useEffect(getEvents, []);

  return (<div>
    <h3 className="italic">
      Group Event List
    </h3>
    <div className="max-h-screen/2 border-2 border-black rounded">
      {events.map((event, index) => {
        return <EventItem event={event.json_build_object} key={index} />
      })}
    </div>
  </div>)
}

export default GroupEventList;