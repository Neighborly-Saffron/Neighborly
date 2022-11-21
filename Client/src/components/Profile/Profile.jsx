import React from 'react';
import Bio from './Bio.jsx'
import ProfileImage from './ProfileImage.jsx'

const { useState, useEffect } = React;

function Profile () {
  const [userID, setUserID] = useState(4);

  useEffect(() => {
    axios.get('/getGroups')
    .then(res => {
      console.log(res.data);
      setGroups(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  },[])

  return (<div className="border-2 border-orange-600 m-5 p-1">
    <h2>
      PROFILE
    </h2>
    <Bio />
    <ProfileImage></ProfileImage>
  </div>)
}

export default Profile;