import React from 'react';
import GroupEventMap from './GroupEventMap.jsx'
import GroupEventList from './GroupEventList.jsx'
import CreateEventModal from './CreateEventModal.jsx'
import CreateGroupPost from './CreateGroupPost.jsx'
import GroupChat from './GroupChat.jsx'
import GroupChatInput from './GroupChatInput.jsx'
import GroupDescription from './GroupDescription.jsx'
import Feed from '../Feed/Feed.jsx'
import { useParams } from 'react-router-dom'
import socketClient  from "socket.io-client";

const { useState, useEffect } = React;

function Group ({ userId, groupId }) {
  let { id } = useParams();
  const [socket, setSocket] = useState(null);

	useEffect(() => {
    const newSocket = socketClient(`http://${window.location.hostname}:3001`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

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

          <GroupEventList userId={userId} />
          { socket ? (
          <div className="">
            <GroupChat socket={socket} />
            <GroupChatInput socket={socket} />
          </div>
          ) : (
            <div>Not Connected</div>
          )}

        </div>
      </div>
    </div>
  )
}

export default Group;