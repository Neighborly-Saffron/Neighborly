import React from 'react';

const { useState, useEffect } = React;

function EventItem({ event }) {
  const [attending, setAttending] = useState(false)

  let eventID = event.eventid
  let userID = 1
  //MUST REFACTOR TO USE ACTUAL USER ID

  let checkAttending = () => {
    axios.get(`/events/attending/${eventID}/${userID}`)
      .then((res) => {
        if (res.data) {
          setAttending(true)
        } else {
          setAttending(false)
        }
      })
      .catch((err) => console.log('error getting group event data'))
  }

  return (<div className="border-2 m-2 p-1 border-black rounded bg-lighterblue">
    <img className='object-scale-down h-10 w-10 m-1' src={event.pictureURL} alt={event.name}></img>
    <div className="font-bold text-lg">{event.name}</div>
    <div>{event.description}</div>
    <div>{event.location}</div>
  </div>)
}

export default EventItem;