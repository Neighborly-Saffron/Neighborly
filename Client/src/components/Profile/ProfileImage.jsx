import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
const { useState, useEffect } = React;

function ProfileImage () {

  //set this aside for now, it was intended to cloudinary
  const handleAddImage = () => {
  }



  return (<div>
    <label htmlFor='image' className='h-20 w-20'>
    <div className='h-15 w-15'>
        <FontAwesomeIcon className='h-15 w-15'icon={faPlus} />
    </div>
    <input type='file' id='image' onChange={(e)=>{setPhotoFile(e.target.files[0])}} ></input>
    {/* style={{display:"none"}} */}
    </label>

  </div>)
}

export default ProfileImage;