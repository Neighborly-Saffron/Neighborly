import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IndividualGroupInGroupList ({ group }) {
  return (
    <>
      <div className='grid grid-cols-10'>
        <div className='w-20'>
          <img className='object-scale-down' src={group.pictureurl} alt={group.name}></img>
        </div>
        <div className='col-span-9 text-left'>
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