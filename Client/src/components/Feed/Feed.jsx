import React from 'react'
import axios from 'axios'
import Post from './Post.jsx'

const { useState, useEffect } = React;

function Feed ({ userId, path, groupId }) {
  const [posts, setPosts] = useState([])

  const getPosts = () => {
    axios.get(`/feed/posts/${path}/${userId}/${groupId}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log('error getting feed post data'))
  }

  useEffect(getPosts, []);

  const removePost = (postid) => {
    axios.delete('/feed/posts', {data:{postid}})
      .then((res) => {
        getPosts()
      })
      .catch((err) => console.log('error deleting post'))
  }

  return (<div className="flex flex-col gap-3">
    {posts.map((item, index) => {
      return <Post key={index} postData={item.json_build_object} userId={userId} removePost={removePost} />
    })}
  </div>)
}

export default Feed;