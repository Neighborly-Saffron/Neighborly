import React from 'react';
import axios from 'axios';
import GroupEventMap from './GroupEventMap.jsx'
import GroupEventList from './GroupEventList.jsx'
import CreateEventModal from './CreateEventModal.jsx'
import Feed from '../Feed/Feed.jsx'

const { useState, useEffect } = React;

function GroupPost ({ userId, groupId }) {
console.log("USER ID IN GROUP POST", userId)
  const [message, setMessage] = useState('');
  const [tempMessage, setTempMessage] = useState('')

  const postMessage = () => {
    if (message.length > 0) {
      axios.post('/addPost', {post: message, likes: 0, userId: userId, groupId: groupId})
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
    }
  }

  useEffect(postMessage, [message]);

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
          setTempMessage('')
          }}>
          <textarea className='w-full rounded border-2 border-gray-200' rows='3' type='text' placeholder='Write something...' value={tempMessage} onChange={(e) => setTempMessage(e.target.value)}></textarea>
          <input className='rounded border-2 px-1' type='submit' value='Post'></input>
        </form>
    </div>
    </>
  )
}

export default GroupPost;