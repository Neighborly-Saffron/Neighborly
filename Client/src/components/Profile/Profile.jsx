import React from 'react';
import Bio from './Bio.jsx'
import ProfileImage from './ProfileImage.jsx'
import axios from 'axios';
import Feed from '../Feed/Feed.jsx';

const { useState, useEffect } = React;
function Profile ({ userId }) {

  return (<div className="border-2 border-orange-600 m-5 p-1">
    <h2>
      PROFILE
    </h2>
    <Bio/>
    {/* <ProfileImage></ProfileImage> */}
    <Feed userId={userId} path={'profile'}/>
  </div>)
}
export default Profile;