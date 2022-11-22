import React from 'react';
import axios from 'axios';
import GroupEventMap from './GroupEventMap.jsx'
import GroupEventList from './GroupEventList.jsx'
import CreateEventModal from './CreateEventModal.jsx'
import Feed from '../Feed/Feed.jsx'

const { useState, useEffect } = React;

function GroupPost () {

  const [message, setMessage] = useState('');
  const [tempMessage, setTempMessage] = useState('')
  const [user, setUser] = useState('4');

  console.log('message: ', message)

  const onFormSubmit = () => {
    axios.post('/addPost', {user: user, post: message})
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
  }

  return (
    <>
    <div className="border-2 border-blue-900 m-5 p-1">
        <h2>
          CREATE GROUP POST
        </h2>
        <div>
          <img></img>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          setMessage(tempMessage);
          onFormSubmit();
          }}>
          <textarea className='w-full rounded border-2 border-gray-200' rows='3' type='text' placeholder='Write something...' value={tempMessage} onChange={(e) => setTempMessage(e.target.value)}></textarea>
          <input className='rounded border-2 px-1' type='submit' value='Post'></input>
        </form>
    </div>
    </>
  )
}

export default GroupPost;