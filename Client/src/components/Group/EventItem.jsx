import React from 'react';
import axios from 'axios';

const { useState, useEffect } = React;

function EventItem({ event, userId }) {
  const [attending, setAttending] = useState(false)

  let eventID = event.eventid
  let userID = userId || -1
  let formatted = new Date(event.date).toString()
  let time = event.time.slice(0, 5)
  let hours = time.slice(0, 2)
  let suffix = hours >= 12 ? 'PM' : 'AM'
  console.log(time)
  //hours > 12 ? `${time.slice(0,2) - 12}:${time.slice(3,5)} PM` : time + ' AM'

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

  useEffect(()=>{if(userId !== -1)checkAttending()}, [])

  console.log(formatted)
  return (
    <div className="border-2 m-2 p-1 border-black rounded bg-lighterblue">
      <div className="flex justify-between">
        <img className='object-scale-down h-12 w-12 m-1' src={event.pictureURL} alt={event.name}></img>

      {
      userId !== -1 ?
      attending ?
      <button className="bg-darkerblue hover:bg-lighterblue border-2 hover:border-2 hover:border-black text-white font-bold py-2 px-4 rounded-full h-10 mr-1 mt-2" onClick={()=>{cancelAttend()}}>Cancel</button>
      :
      <button className="bg-darkerblue hover:bg-lighterblue border-2 hover:border-2 hover:border-black text-white font-bold py-2 px-4 rounded-full h-10 mr-1 mt-2" onClick={()=>{attendEvent()}}>Attend</button>
      :
      null
      }
    </div>

    <div className="font-bold text-lg">{event.name}</div>
    <br/>
    <div>{event.description}</div>
    <br/>
    <small><div className="font-bold">When?</div></small>
    <div className="flex flex-col w-24">
      <div className="bg-darkergreen flex justify-center text-white font-bold">{formatted.slice(4, 8)}</div>
      <div className="w-24 h-calendar bg-white flex flex-col items-center justify-evenly">
        <div className="italic">{formatted.slice(0, 3)}</div>
        <div className="text-2xl font-bold">{formatted.slice(7, 10)}</div>
      </div>
    </div>
    {/* <div>{hours > 12 ? `${time.slice(0,2) - 12}:${time.slice(3,5)} PM` : time + ' AM'}</div> */}
    {hours == 12 && <div>{time + ' PM'}</div>}
    {hours > 12 && <div>{`${time.slice(0,2) - 12}:${time.slice(3,5)} PM`}</div>}
    {hours == 0 && <div>{`${Number(time.slice(0,2)) + 12}:${time.slice(3,5)} AM`}</div>}
    {hours < 12 && hours != 0 && <div>{time + ' AM'}</div>}

    <br/>
    <small><div className="font-bold">Where?</div></small>
    <div>{event.location}</div>
    <br/>

  </div>)
}

export default EventItem;