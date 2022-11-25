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
import axios from 'axios';

const { useState, useEffect } = React;

function Group ({ userId, userData }) {
  let { id } = useParams();
  const [socket, setSocket] = useState(null);
  const [eventList, setEventList] = useState({events:[]});

  console.log('user id in group: ', userId)
  console.log('user data in group: ', userData)

	useEffect(() => {
    const newSocket = socketClient(`http://${window.location.hostname}:3001`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  const getEvents = () => {
    axios.get(`/mapEvents/${userId}/${id}`)
      .then((res) => {
        // console.log(res)
        setEventList({events:res.data});
      })
      .catch((err) => console.log('error getting group event data'))
  }

  useEffect(getEvents, []);

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
          <GroupEventMap userId={userId} groupId={id} getEvents={getEvents} eventList={eventList}/>
          <CreateEventModal userId={userId} groupId={id} getEvents={getEvents}/>
          <GroupEventList userId={userId} eventList={eventList}/>
          { socket ? (
          <div className="h-44">
            <GroupChat socket={socket} />
            {userData &&
              <GroupChatInput socket={socket} userData={userData} />
            }
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