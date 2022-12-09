import React from 'react';
import axios from 'axios';
const { useState, useEffect } = React;

function ProfileImage () {

  return (<div>
    <label htmlFor='image' className='h-20 w-20'>
    <div className='h-15 w-15'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </div>
    <input type='file' id='image' onChange={(e)=>{setPhotoFile(e.target.files[0])}} ></input>
    </label>

  </div>)
}

export default ProfileImage;