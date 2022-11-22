import React from 'react';
import GroupEventMap from './GroupEventMap.jsx'
import GroupEventList from './GroupEventList.jsx'
import CreateEventModal from './CreateEventModal.jsx'
import CreateGroupPost from './CreateGroupPost.jsx'
import GroupChat from './GroupChat.jsx'
import GroupDescription from './GroupDescription.jsx'
import Feed from '../Feed/Feed.jsx'
import { useParams } from 'react-router-dom'

const { useState, useEffect } = React;

function Group ({ userId, groupId }) {
  let { id } = useParams();
  return (
    <div className="border-2 border-blue-900 m-5 p-1">
      <h2>
        GROUP
      </h2>
      <GroupDescription groupId={id} />
      <div className='flex'>
        <div className='flex-auto flex-col'>
          <CreateGroupPost userId={userId} groupId={id} />
          <Feed userId={id} path={'group'} />
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