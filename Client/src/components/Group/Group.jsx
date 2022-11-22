import React from 'react';
import GroupEventMap from './GroupEventMap.jsx'
import GroupEventList from './GroupEventList.jsx'
import CreateEventModal from './CreateEventModal.jsx'
import CreateGroupPost from './CreateGroupPost.jsx'
import GroupChat from './GroupChat.jsx'
import Feed from '../Feed/Feed.jsx'

const { useState, useEffect } = React;

function Group () {
  return (
    <div className="border-2 border-blue-900 m-5 p-1">
      <h2>
        GROUP
      </h2>
      <div className='flex'>
        <div className='flex-auto flex-col'>
          <CreateGroupPost />
          <Feed path={'group'} />
        </div>
        <div className='flex flex-col'>
          <GroupEventMap />
          <CreateEventModal />
          <GroupEventList />
          <GroupChat />
        </div>
      </div>
    </div>
  )
}

export default Group;