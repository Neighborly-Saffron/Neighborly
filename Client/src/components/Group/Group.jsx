import React from 'react'
import GroupEventMap from './GroupEventMap.jsx'
import GroupEventList from './GroupEventList.jsx'
import CreateEventModal from './CreateEventModal.jsx'
import CreateGroupPost from './CreateGroupPost.jsx'
import GroupChat from './GroupChat.jsx'
import GroupChatInput from './GroupChatInput.jsx'
import GroupDescription from './GroupDescription.jsx'
import Feed from '../Feed/Feed.jsx'
import GroupFeed from '../Feed/GroupFeed.jsx'
import { useParams } from 'react-router-dom'
import socketClient from 'socket.io-client'
import axios from 'axios'

const { useState, useEffect } = React;

function Group ({ userId, userData }) {
  let { id } = useParams();
  const [socket, setSocket] = useState(null);
  const [eventList, setEventList] = useState({events:[]});
  const [posts, setPosts] = useState([]);

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

  const getPosts = () => {
    axios.get(`/posts/group/${userId}/${id}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log('error getting group feed post data'))
  }

  useEffect(getPosts, []);

  const postMessage = (message) => {
    if (message.length > 0) {
      axios.post('/addPost', {post: message, likes: 0, userId: userId, groupId: id})
        .then((res) => {
          getPosts()
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <div className=" m-5 p-1">
      <div className='flex gap-x-4'>
        <div className='flex w-2/3 flex-col'>
          <CreateGroupPost postMessage={postMessage} userId={userId} groupId={id} />
          <GroupFeed posts={posts} userId={userId} groupId={id} path={'group'} />
          {/* <Feed userId={userId} groupId={id} path={'group'} /> */}
        </div>
        <div className='flex flex-col gap-y-3'>
          <GroupDescription groupId={id} />
          <GroupEventMap userId={userId} groupId={id} getEvents={getEvents} eventList={eventList}/>
          <CreateEventModal userId={userId} groupId={id} getEvents={getEvents}/>
          <GroupEventList userId={userId} eventList={eventList}/>
          { socket ? (
          <div className="p-3 my-3 rounded bg-lighterblue">
            <GroupChat socket={socket} userData={userData} groupId={id} />
            {userData &&
              <GroupChatInput socket={socket} userData={userData} groupId={id}/>
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