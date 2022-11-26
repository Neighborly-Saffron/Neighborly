import React from 'react'
import axios from 'axios'
import Post from './Post.jsx'

const { useState, useEffect } = React;

function Feed ({ userId, path, groupId }) {
  const [posts, setPosts] = useState([])

  const getPosts = () => {
    axios.get(`/posts/${path}/${userId}/${groupId}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log('error getting feed post data'))
  }

  useEffect(getPosts, []);

  return (<div className="border-2 m-5 p-1 bg-white">
    <h2>{`${path} FEED`}</h2>
    {posts.map((item, index) => {
      return <Post key={index} postData={item.json_build_object} userId={userId} />
    })}
  </div>)
}

export default Feed;