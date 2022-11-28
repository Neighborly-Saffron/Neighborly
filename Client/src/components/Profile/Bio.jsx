import React from 'react'
import axios from 'axios'
const { useState, useEffect } = React

function Bio ({ userId }) {

  const [userProfile, setUserProfile] = useState({})

  const getProfile = () => {
    axios.get(`profile/bio?userId=${userId}`)
    .then(res => {
      setUserProfile(res.data)
    })
    .catch(err => {
      console.log('client failed to receive data from db', err)
    })
  }

  useEffect(getProfile, [])

  return (
    <div className='flex gap-2 m-5 p-1'>
      <div className='flex gap-2 items-center'>
        <div  className='flex flex-col'>
          <img className='h-32 m-1 rounded' src={userProfile.pictureURL}></img>
        </div>
        <div className='flex flex-col'>
          <div className='text-3xl font-bold capitalize'>{userProfile.name}</div>
          <div className='text-xl normal-case'>{userProfile.bio}</div>
          <br></br>
          {userProfile.groups ?
          userProfile.groups > 1 ?
          <div>{`Member of ${userProfile.groups} groups`}</div>
          :
          <div>{`Member of ${userProfile.groups} group`}</div>
          :
          null
          }
          {userProfile.admins ?
          userProfile.admins > 1 ?
          <div>{`Administrator of ${userProfile.admins} groups`}</div>
          :
          <div>{`Administrator of ${userProfile.admins} group`}</div>
          :
          null
          }
        </div>
      </div>
    </div>
  )
}

export default Bio;