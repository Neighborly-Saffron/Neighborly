import React from 'react';
import axios from 'axios';
const { useState, useEffect } = React;

function Bio ({ userId }) {

  const [userProfile, setUserProfile] = useState({})

  const getProfile = () => {
    axios.get(`profile/bio?userId=${userId}`)
    .then(res => {
      console.log('client success receiving data from db');
      console.log('userProfile.pictureurl: ', res.data.pictureURL)
      setUserProfile(res.data)
    })
    .catch(err => {
      console.log('client failed to receive data from db', err);
    })
  }

  useEffect(getProfile, [])

  return (
    <div>
      <h3 className="italic">
        Bio
      </h3>
      <div className='flex'>
        <div  className='flex flex-col'>
          <img className='h-20 m-1' src={userProfile.pictureURL}></img>
        </div>
        <div className='flex flex-col'>
          <div>{userProfile.name}</div>
          <div>{userProfile.bio}</div>
        </div>
      </div>
    </div>
  )
}

export default Bio;