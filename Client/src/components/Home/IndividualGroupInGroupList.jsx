import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

function IndividualGroupInGroupList ({ group }) {
  return (
    <>
      <div className='flex flex-col items-center bg-lightergreen w-full rounded-lg drop-shadow-md'>
        <div className="w-9/12 pt-2">
          <img className='shadow rounded max-w-full h-auto align-middle border-none' src={group.pictureURL} alt={group.name}></img>
          </div>
        <div className='flex flex-col p-3'>
          <div className='font-bold text-2xl text-black text-center hover:text-lightlighterblue capitalize'>
            <Link to={`/group/${group.groupId}`}>{group.name}</Link>
          </div>
          <div className='text-xs text-center text-black normal-case'>
            {group.description}
          </div>
        </div>
      </div>
    </>
  )
}

export default IndividualGroupInGroupList;