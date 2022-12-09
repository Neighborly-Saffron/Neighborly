import React from 'react'
import axios from 'axios'
import Feed from '../Feed/Feed.jsx'
import GroupEventMap from './GroupEventMap.jsx'
import GroupEventList from './GroupEventList.jsx'
import CreateEventModal from './CreateEventModal.jsx'

const { useState, useEffect } = React;

function GroupPost ({ userId, groupId, postMessage }) {
  const [message, setMessage] = useState('')
  const [tempMessage, setTempMessage] = useState('')

  useEffect(() => postMessage(message), [message])

  return (
    <>
    <div className='m-2 mb-5 p-5 rounded bg-lighterblue drop-shadow-md'>
      <form onSubmit={(e) => {
        e.preventDefault()
        setMessage(tempMessage)
        setTempMessage('')
        }}>
        <textarea className='w-full rounded p-1 resize-none border-2 border-lightgray' rows='3' type='text' placeholder='Write something...' value={tempMessage} onChange={(e) => setTempMessage(e.target.value)}></textarea>
        <input className='border-2 bg-darkerblue hover:bg-white hover:text-darkerblue hover:ease-in duration-300 hover:border-darkerblue hover:border-2 text-white rounded p-1 px-2 cursor-pointer' type='submit' value='Post'></input>
      </form>
    </div>
    </>
  )
}

export default GroupPost;