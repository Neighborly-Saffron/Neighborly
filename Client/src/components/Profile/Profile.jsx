import React from 'react';
import Bio from './Bio.jsx'
import ProfileImage from './ProfileImage.jsx'
import axios from 'axios';

const { useState, useEffect } = React;
function Profile () {
  const [userId, setUserId] = useState('5');
  const [userProfile, setUserProfile] = useState({})
  console.log('pls print this line')

  useEffect(() => {
    axios.get(`/usergroups/${userId}`)
    .then(res => {
      console.log('client success receiving data from db');
      setUserProfile(res.data)
    })
    .catch(err => {
      console.log('client failed to receive data from db', err);
    })
  },[])

  return (<div className="border-2 border-orange-600 m-5 p-1">
    <h2>
      PROFILE
    </h2>
    <p>hello world</p>
    <Bio />
    <ProfileImage></ProfileImage>
  </div>)
}
export default Profile;