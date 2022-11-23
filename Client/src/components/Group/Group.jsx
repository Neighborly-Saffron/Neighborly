import React from 'react';
import GroupEventMap from './GroupEventMap.jsx'
import GroupEventList from './GroupEventList.jsx'
import CreateEventModal from './CreateEventModal.jsx'
import CreateGroupPost from './CreateGroupPost.jsx'
import GroupDescription from './GroupDescription.jsx'
import Feed from '../Feed/Feed.jsx'
import { useParams } from 'react-router-dom'

const { useState, useEffect } = React;

function Group ({ userId }) {
  let { id } = useParams();
  return (
    <div className="border-2 border-blue-900 m-5 p-1">
      <h2>
        GROUP
      </h2>
      <div className='flex'>
        <div className='flex w-2/3 flex-col'>
          <CreateGroupPost userId={userId} groupId={id} />
          <Feed userId={id} path={'group'} />
        </div>
        <div className='flex flex-col'>
          <GroupDescription groupId={id} />
          <GroupEventMap />
          <CreateEventModal />
          <GroupEventList />
        </div>
      </div>
    </div>
  )
}

export default Group;