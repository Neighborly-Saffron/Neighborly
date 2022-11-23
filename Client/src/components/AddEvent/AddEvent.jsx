import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddEvent = () => {


    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [picURL, setPicURL] = useState('')
    const [location, setLocation] = useState('')

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

  return (
    <div className="flex z-50 items-center h-fit w-96">
      <div className="w-full border-2 border-black bg-lighterblue rounded shadow-lg p-8 m-1">
        <h1 className="block w-full text-center text-2xl mx-auto p-4">Create Event</h1>
        <form className="mb-4" onSubmit={(e) => { newGroupSubmit(e) }}>

          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-grey-darkest">Event Name</label>
            <input className="border py-2 px-3 text-grey-darkest" required={"required"} value={name} onChange={(e) => { setName(e.target.value) }} />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-grey-darkest">Event Description</label>
            <textarea className="border py-2 px-3 text-grey-darkest" required={"required"} value={description} onChange={(e) => { setDescription(e.target.value) }} />
          </div>
          <h2>Location</h2>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-grey-darkest">Street Address</label>
            <input className="border py-2 px-3 text-grey-darkest" required={"required"} value={name} onChange={(e) => { setLocation(e.target.value) }} />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-grey-darkest">City/Township</label>
            <input className="border py-2 px-3 text-grey-darkest" required={"required"} value={name} onChange={(e) => { setLocation(e.target.value) }} />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-grey-darkest">State</label>
            <input className="border py-2 px-3 text-grey-darkest" required={"required"} value={name} onChange={(e) => { setLocation(e.target.value) }} />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-grey-darkest">Zip Code</label>
            <input className="border py-2 px-3 text-grey-darkest" required={"required"} value={name} onChange={(e) => { setLocation(e.target.value) }} />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-grey-darkest">Photo URL</label>
            <input className="border py-2 px-3 text-grey-darkest" required={"required"} value={picURL} onChange={(e) => { setPicURL(e.target.value) }} />
          </div>

          <button className="block border-2 bg-darkerblue hover:bg-lighterblue hover:border-black hover:border-2 text-white uppercase text-lg mx-auto p-4 rounded-full" type="submit">Create Event</button>
        </form>
      </div>
    </div>
  )
}

export default AddEvent;