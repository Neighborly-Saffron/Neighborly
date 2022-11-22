import React from 'react';
import axios from 'axios';

const { useState, useEffect } = React;

function GroupDescription () {
  const [groupId, setGroupId] = useState('1');
  const [groupDescription, setGroupDescription] = useState()

  const getGroupDescription = () => {
    axios.get(`/groupDescription/${groupId}`)
      .then((res) => {
        setGroupDescription(res.data);
      })
      .catch((err) => console.log('error getting group description'))
  }
  useEffect(getGroupDescription, []);

  return (
    <div className='border-2 border-blue-900 m-5 p-1'>
      {groupDescription &&
      <>
        <div className='flex justify-center items-center'>
          <div className='w-96 flex flex-col p-5'>
            <img className='object-scale-down' src={groupDescription.pictureURL}></img>
          </div>
          <div className='flex flex-col'>
            <div className='font-bold text-4xl'>
              {groupDescription.name}
            </div>
            {groupDescription.description}
          </div>

        </div>
      </>}
    </div>
  )
}

export default GroupDescription;