import React from 'react';
import axios from 'axios';
import GroupEventMap from './GroupEventMap.jsx'
import GroupEventList from './GroupEventList.jsx'
import CreateEventModal from './CreateEventModal.jsx'
import Feed from '../Feed/Feed.jsx'

const { useState, useEffect } = React;

function GroupPost () {

  const onFormSubmit = (e) => {
    axios.post('/addPost', {user: user, post: post})
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
        <form onSubmit={(e) => onFormSubmit(e)}>
          <textarea className='w-full rounded border-2 border-gray-200' rows='3' type='text' placeholder='Write something...'></textarea>
          <input className='rounded border-2 px-1' type='submit' value='Post'></input>
        </form>
    </div>
    </>
  )
}

export default GroupPost;