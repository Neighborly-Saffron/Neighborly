import React, { useState, useEffect } from 'react';
import socketClient from 'socket.io-client'
import GroupChatMessages from './GroupChatMessages.jsx'
import GroupChatInput from './GroupChatInput.jsx'

function GroupChat ({ userData, groupId }) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = socketClient(`https://${window.location.hostname}:3001`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <>
    {socket ?
      <div className="p-5 rounded bg-lighterblue drop-shadow-md">
        <GroupChatMessages socket={socket} userData={userData} groupId={groupId} />
        <GroupChatInput socket={socket} userData={userData} groupId={groupId}/>
      </div>
      : <div>Not Connected</div>
    }
    </>
  )
}

export default GroupChat;
