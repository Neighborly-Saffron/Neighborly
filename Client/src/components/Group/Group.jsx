import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import GroupEventMap from './GroupEventMap.jsx'
import GroupEventList from './GroupEventList.jsx'
import CreateEventModal from './CreateEventModal.jsx'
import CreateGroupPost from './CreateGroupPost.jsx'
import GroupChat from './GroupChat.jsx'
import GroupDescription from './GroupDescription.jsx'
import Feed from '../Feed/Feed.jsx'
import GroupFeed from '../Feed/GroupFeed.jsx'

const { useState, useEffect } = React;

function Group ({ userId, userData }) {
  let { id } = useParams();
  const [eventList, setEventList] = useState({events:[]});
  const [posts, setPosts] = useState([]);

  const getEvents = () => {
    axios.get(`/mapEvents/${userId}/${id}`)
      .then((res) => {
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

  const removePost = (postid) => {
    axios.delete('/posts', {data:{postid}})
      .then((res) => {
        getPosts()
      })
      .catch((err) => console.log('error deleting post', err))
  }

  return (
    <div className='flex gap-x-4 m-5 p-1'>
      <div className='flex w-2/3 flex-col'>
        <CreateGroupPost postMessage={postMessage} userId={userId} groupId={id} />
        <GroupFeed posts={posts} userId={userId} groupId={id} path={'group'} removePost={removePost} />
      </div>
      <div className='flex flex-col gap-y-3'>
        <GroupDescription groupId={id} />
        <GroupEventMap userId={userId} groupId={id} getEvents={getEvents} eventList={eventList}/>
        <CreateEventModal userId={userId} groupId={id} getEvents={getEvents}/>
        <GroupEventList userId={userId} eventList={eventList}/>
        <GroupChat userData={userData} groupId={id}/>
      </div>
    </div>
  )
}

export default Group;