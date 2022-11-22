import React from 'react'
import axios from 'axios'

const { useState, useEffect } = React;

function AddGroup() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [picURL, setPicURL] = useState('')

  //ADMINID IS CURRENTLY HARDCODED- WILL NEED TO BE UPDATED TO USERID
  const newGroupSubmit = (e) => {
    e.preventDefault()
    axios.post('/newGroup', { name, description, picURL, adminid: 4 }).then(() => {
      console.log('sent to db')
    }).catch((err) => {
      console.log('error adding group', err)
    })
  }

  return (
    <div className="flex items-center h-screen w-full">
      <div className="w-full border-2 border-black bg-lighterblue rounded shadow-lg p-8 m-1">
        <h1 className="block w-full text-center text-2xl mx-auto p-4">Create Group</h1>
        <form className="mb-4" onSubmit={(e) => { newGroupSubmit(e) }}>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-grey-darkest">Group Name</label>
            <input className="border py-2 px-3 text-grey-darkest" required={"required"} value={name} onChange={(e) => { setName(e.target.value) }} />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-grey-darkest">Group Description</label>
            <input className="border py-2 px-3 text-grey-darkest" required={"required"} value={description} onChange={(e) => { setDescription(e.target.value) }} />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-grey-darkest">Photo URL</label>
            <input className="border py-2 px-3 text-grey-darkest" required={"required"} value={picURL} onChange={(e) => { setPicURL(e.target.value) }} />
          </div>
          <button className="block bg-darkerblue hover:bg-lighterblue hover:border-black hover:border-2 uppercase text-lg mx-auto p-4 rounded" type="submit">Create Group</button>
        </form>
      </div>
    </div>
  )
}

export default AddGroup;