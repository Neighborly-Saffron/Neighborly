import React from 'react';
import axios from 'axios';
import EventItem from './EventItem.jsx'

const { useState, useEffect } = React;

function GroupEventList () {
  const [events, setEvents] = useState([1, 2, 3])

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
    {events.map((event, index) => {
      return <EventItem key={index} />
    })}
  </div>)
}

export default GroupEventList;