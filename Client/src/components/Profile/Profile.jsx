import React from 'react'
import Bio from './Bio.jsx'
import ProfileImage from './ProfileImage.jsx'
import axios from 'axios'
import Feed from '../Feed/Feed.jsx'
import UserGroupList from '../Home/UserGroupList.jsx'

const { useState, useEffect } = React

function Profile ({ userId, userGroups, setUserGroups }) {

  useEffect (() => {
		if (userId) {
			axios.get(`/usergroups/${userId}`)
			.then((res) => {
				setUserGroups(res.data);
			})
			.catch((err) => console.log('error getting user groups data'))
		}
	}, [userGroups])

  return (
  <div className='rounded-lg grid grid-cols-5 mt-6 p-10'>
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