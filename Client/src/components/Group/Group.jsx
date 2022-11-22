import React from 'react';
import GroupEventMap from './GroupEventMap.jsx'
import GroupEventList from './GroupEventList.jsx'
import CreateEventModal from './CreateEventModal.jsx'
import CreateGroupPost from './CreateGroupPost.jsx'
import GroupDescription from './GroupDescription.jsx'
import Feed from '../Feed/Feed.jsx'

const { useState, useEffect } = React;

function Group ({ userId }) {
  return (
    <div className="border-2 border-blue-900 m-5 p-1">
      <h2>
        GROUP
      </h2>
      <GroupDescription />
      <div className='flex'>
        <div className='flex-auto flex-col'>
          <CreateGroupPost />
          <Feed userId={1} path={'group'} />
        </div>
        <div className='flex flex-col'>
          <GroupEventMap />
          <CreateEventModal />
          <GroupEventList />
        </div>
      </div>
    </div>
  )
}

export default Group;