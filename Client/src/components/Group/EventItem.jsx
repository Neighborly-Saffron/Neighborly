import React from 'react';
import axios from 'axios';

const { useState, useEffect } = React;

function EventItem({ event }) {
  const [attending, setAttending] = useState(false)

  let eventID = event.eventid
  let userID = 4
  console.log("event", eventID, 'user', userID)
  //MUST REFACTOR TO USE ACTUAL USER ID

  let checkAttending = () => {
    axios.get(`/events/attending/${eventID}/${userID}`)
      .then((res) => {
        console.log(res.data[0].exists)
        if (res.data[0].exists) {
          console.log("IS ATTENDING", res.data)
          setAttending(true)
        } else {
          console.log("ISNT ATTENDING", res.data)
          setAttending(false)
        }
      })
      .catch((err) => console.log('error getting group event data'))
  }

  useEffect(checkAttending, [])

  return (<div className="border-2 m-2 p-1 border-black rounded bg-lighterblue">
    <img className='object-scale-down h-10 w-10 m-1' src={event.pictureURL} alt={event.name}></img>
    <div className="font-bold text-lg">{event.name}</div>
    <div>{event.description}</div>
    <div>{event.location}</div>
  </div>)
}

export default EventItem;