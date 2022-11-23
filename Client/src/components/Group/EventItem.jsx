import React from 'react';
import axios from 'axios';

const { useState, useEffect } = React;

function EventItem({ event, userId }) {
  const [attending, setAttending] = useState(false)

  let eventID = event.eventid
  let userID = userId

  const checkAttending = () => {
    axios.get(`/events/attending/${eventID}/${userID}`)
      .then((res) => {
        if (res.data[0].exists) {
          setAttending(true)
        } else {
          setAttending(false)
        }
      })
      .catch((err) => console.log('error checking event attendance'))
  }

  const attendEvent = () => {
    axios.post('/events/attend', { userID, eventID})
      .then((res) => {
        setAttending(true)
      })
      .catch((err) => console.log('error attending event'))
  }

  const cancelAttend = () => {
    axios.post('/events/cancel', { userID, eventID})
    .then((res) => {
      setAttending(false)
    })
    .catch((err) => console.log('error cancelling attending event'))
  }

  useEffect(checkAttending, [])

  return (<div className="border-2 m-2 p-1 border-black rounded bg-lighterblue">
    <div className="flex justify-between">
      <img className='object-scale-down h-12 w-12 m-1' src={event.pictureURL} alt={event.name}></img>
      {
      attending ?
      <button className="bg-darkerblue hover:bg-lighterblue border-2 hover:border-2 hover:border-black text-white font-bold py-2 px-4 rounded-full h-10 mr-1 mt-2" onClick={()=>{cancelAttend()}}>Cancel</button>
      :
      <button className="bg-darkerblue hover:bg-lighterblue border-2 hover:border-2 hover:border-black text-white font-bold py-2 px-4 rounded-full h-10 mr-1 mt-2" onClick={()=>{attendEvent()}}>Attend</button>
      }
    </div>

    <div className="font-bold text-lg">{event.name}</div>
    <div>{event.description}</div>
    <div>{event.location}</div>
  </div>)
}

export default EventItem;