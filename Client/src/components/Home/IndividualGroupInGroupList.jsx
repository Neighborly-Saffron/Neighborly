import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IndividualGroupInGroupList ({ group }) {
  return (
    <>
      <div className='flex'>
          <img className='object-scale-down h-20 m-1' src={group.pictureurl} alt={group.name}></img>
        <div className='flex flex-col p-3'>
          <div className='font-bold'>
            {group.name}
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