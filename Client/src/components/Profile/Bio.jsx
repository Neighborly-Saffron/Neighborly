import React from 'react';
import axios from 'axios';
const { useState, useEffect } = React;

function Bio ({ userId }) {

  const [userProfile, setUserProfile] = useState({})

  const getProfile = () => {
    axios.get(`profile/bio?userId=${userId}`)
    .then(res => {
      console.log('userProfile data', res.data)
      setUserProfile(res.data)
    })
    .catch(err => {
      console.log('client failed to receive data from db', err);
    })
  }

  useEffect(getProfile, [])

  return (
    <div className="p-3">
      <div className='flex'>
        <div  className='flex flex-col'>
          <img className='h-20 m-1' src={userProfile.pictureURL}></img>
        </div>
        <div className='flex flex-col'>
          <div className='text-lg font-bold'>{userProfile.name}</div>
          <div>{userProfile.bio}</div>
          <div>{`Member of ${userProfile.groups} groups`}</div>
          <div>{`Administrator of ${userProfile.admins} groups`}</div>
        </div>
      </div>
    </div>
  )
}

export default Bio;