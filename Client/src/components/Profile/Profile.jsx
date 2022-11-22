import React from 'react';
import Bio from './Bio.jsx'
import ProfileImage from './ProfileImage.jsx'
import axios from 'axios';

const { useState, useEffect } = React;
function Profile () {

  return (<div className="border-2 border-orange-600 m-5 p-1">
    <h2>
      PROFILE
    </h2>
    <Bio/>
    {/* <ProfileImage></ProfileImage> */}
  </div>)
}
export default Profile;