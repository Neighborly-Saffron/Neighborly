import React from 'react';
import Bio from './Bio.jsx'
import ProfileImage from './ProfileImage.jsx'
import axios from 'axios';
import Feed from '../Feed/Feed.jsx';
import UserGroupList from '../Home/UserGroupList.jsx';

const { useState, useEffect } = React;
function Profile ({ userId, userGroups }) {

  return (<div className="border-2 border-orange-600 m-5 p-1">
    <h2>
      PROFILE
    </h2>
    <div className='flex'>
      <div className='flex  w-1/3 flex-col'>
        <UserGroupList userId={userId} userGroups={userGroups}/>
      </div>
      <div className='flex w-2/3 flex-col'>
        <Bio userId={userId}/>
        <Feed userId={userId} path={'profile'}/>
      </div>
    </div>
    {/* <ProfileImage></ProfileImage> */}
  </div>)
}
export default Profile;