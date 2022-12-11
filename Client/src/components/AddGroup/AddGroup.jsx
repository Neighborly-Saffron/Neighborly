import React from 'react'
import axios from 'axios'

const { useState, useEffect } = React;

function AddGroup({ switchModal, userId }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [picURL, setPicURL] = useState('')

  const newGroupSubmit = (e) => {
    e.preventDefault()
    axios.post('/group/newGroup', { name, description, picURL, adminid: userId }).then((data) => {
      let newGroupId = data.data[0].id
      addCreatorToGroup(userId, newGroupId)
      switchModal()
    }).catch((err) => {
      console.log('error adding group', err)
      switchModal()
    })
  }

  const addCreatorToGroup = (userId, newGroupId) => {
    axios.post('/group/addToGroup', {userId, newGroupId})
      .then(() =>{
        console.log('added to new group')
      })
      .catch(() => {
        console.log('error adding creator to new group')
      })
  }

  return (
    <div className="flex z-50 items-center h-fit w-96">
      <div className="w-full border-2 border-black bg-lighterblue rounded shadow-lg p-8 m-1">
        <h1 className="block w-full text-center text-2xl mx-auto p-4">Create Group</h1>
        <form className="mb-4" onSubmit={(e) => { newGroupSubmit(e) }}>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-grey-darkest">Group Name</label>
            <input className="border py-2 px-3 text-grey-darkest" required={"required"} value={name} onChange={(e) => { setName(e.target.value) }} />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-grey-darkest">Group Description</label>
            <textarea className="border py-2 px-3 text-grey-darkest" required={"required"} value={description} onChange={(e) => { setDescription(e.target.value) }} />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-bold text-lg text-grey-darkest">Photo URL</label>
            <input className="border py-2 px-3 text-grey-darkest" required={"required"} value={picURL} onChange={(e) => { setPicURL(e.target.value) }} />
          </div>
          <button className="block border-2 bg-darkerblue hover:bg-lighterblue hover:border-darkerblue hover:border-2 hover:text-darkerblue text-white uppercase text-lg mx-auto p-4 rounded-full" type="submit">Create Group</button>
        </form>
      </div>
    </div>
  )
}

export default AddGroup;