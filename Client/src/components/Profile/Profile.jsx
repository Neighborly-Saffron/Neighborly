import React from 'react'
import Bio from './Bio.jsx'
import ProfileImage from './ProfileImage.jsx'
import axios from 'axios'
import Feed from '../Feed/Feed.jsx'
import UserGroupList from '../Home/UserGroupList.jsx'

const { useState, useEffect } = React

function Profile ({ userId, userGroups }) {

  return (
  <div className='border-2 rounded-lg grid grid-cols-5 m-5 p-10'>
    <div className='col-span-1'>
        <UserGroupList userId={userId} userGroups={userGroups}/>
      </div>
      <div className='col-start-2 col-span-4'>
        <Bio userId={userId}/>
        <Feed userId={userId} path={'profile'}/>
      </div>
    </div>
    )
}
export default Profile;