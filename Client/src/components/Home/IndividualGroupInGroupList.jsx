import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

function IndividualGroupInGroupList ({ group, userId }) {
  return (
    <>
      <div className='flex'>
          <img className='object-scale-down h-20 m-1' src={group.pictureURL} alt={group.name}></img>
        <div className='flex flex-col p-3'>
          <div className='font-bold hover:text-darkerblue'>
            <Link to="/group/1">{group.name}</Link>
          </div>
          <div className='text-xs'>
            {group.description}
          </div>
        </div>
      </div>
    </>
  )
}

export default IndividualGroupInGroupList;