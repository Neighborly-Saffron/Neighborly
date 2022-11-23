import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddEvent = ({ toggleModal, userId, groupId }) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [picUrl, setPicUrl] = useState('')
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState('12:00')

    //ADMINID IS CURRENTLY HARDCODED- WILL NEED TO BE UPDATED TO USERID
    // const newGroupSubmit = (e) => {
    //   e.preventDefault()
    //   axios.post('/newGroup', { name, description, picURL, adminid: 4 }).then(() => {
    //     console.log('sent to db')
    //     switchModal()
    //   }).catch((err) => {
    //     console.log('error adding group', err)
    //     switchModal()
    //   })
    // }

    const newEventSubmit = (e) => {
      e.preventDefault()

      axios.post('/newEvent', {
        name,
        description,
        date,
        time,
        address,
        city,
        state,
        zipCode,
        picUrl,
        groupId,
        adminId: userId,
      })
      .then(() => {
        console.log('Event added to db')
        toggleModal()
      })
      .catch(() => {
        console.log('error adding event')
        toggleModal()
      })
    }
console.log(picUrl)
  return (
    <div className="flex z-50 items-center h-fit w-96">
      <div className="w-full border-2 border-black bg-lighterblue rounded shadow-lg p-8 m-1">
        <h1 className="block w-full text-center text-2xl mx-auto p-4">Create Event</h1>
        <form className="mb-4" onSubmit={(e) => { newEventSubmit(e) }}>

          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-grey-darkest">Event Name</label>
            <input className="border py-2 px-3 text-grey-darkest" required={"required"} value={name} onChange={(e) => { setName(e.target.value) }} />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-grey-darkest">Event Description</label>
            <textarea className="border py-2 px-3 text-grey-darkest" required={"required"} value={description} onChange={(e) => { setDescription(e.target.value) }} />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-grey-darkest">Date</label>
            <input type="date" className="border py-2 px-3 text-grey-darkest" required={"required"} value={date} onChange={(e) => { setDate(e.target.value) }} />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-grey-darkest">Date</label>
            <input type="time" className="border py-2 px-3 text-grey-darkest" required={"required"} value={time} onChange={(e) => { setTime(e.target.value) }} />
          </div>

          <h2>Location:</h2>
          <br/>

          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-grey-darkest">Street Address</label>
            <input className="border py-2 px-3 text-grey-darkest" required={"required"} value={address} onChange={(e) => { setAddress(e.target.value) }} />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-grey-darkest">City/Township</label>
            <input className="border py-2 px-3 text-grey-darkest" required={"required"} value={city} onChange={(e) => { setCity(e.target.value) }} />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-grey-darkest">State</label>
            <input className="border py-2 px-3 text-grey-darkest" required={"required"} value={state} onChange={(e) => { setState(e.target.value) }} />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-grey-darkest">Zip Code</label>
            <input className="border py-2 px-3 text-grey-darkest" required={"required"} value={zipCode} onChange={(e) => { setZipCode(e.target.value) }} />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-grey-darkest">Photo URL</label>
            <input className="border py-2 px-3 text-grey-darkest" required={"required"} value={picUrl} onChange={(e) => { setPicUrl(e.target.value) }} />
          </div>

          <button className="block border-2 bg-darkerblue hover:bg-lighterblue hover:border-black hover:border-2 text-white uppercase text-lg mx-auto p-4 rounded-full" type="submit">Create Event</button>
        </form>
      </div>
    </div>
  )
}

export default AddEvent;