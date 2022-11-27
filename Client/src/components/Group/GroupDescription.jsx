import React from 'react';
import axios from 'axios';

const { useState, useEffect } = React;

function GroupDescription ( { groupId }) {
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
    <div className='m-2 p-2 rounded bg-lighterblue drop-shadow-md'>
      {groupDescription &&
      <>
        <div className='flex justify-center items-center'>
          <div className='w-96 flex flex-col p-5'>
            <img className='object-scale-down mb-2' src={groupDescription.pictureURL}></img>
            <div className='font-bold text-lg capitalize'>
              {groupDescription.name}
            </div>
            <div className="normal-case">
              {groupDescription.description}
            </div>
          </div>
          <div className='flex flex-col'>
          </div>

        </div>
      </>}
    </div>
  )
}

export default GroupDescription;