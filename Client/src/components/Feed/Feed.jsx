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

  const deletePost = (postid) => {
    axios.delete('/posts', {data:{postid}})
      .then((res) => {
        getPosts()
      })
      .catch((err) => console.log('error deleting post'))
  }

  return (<div className="m-5 p-1 bg-white">
    <h2>{`${path} FEED`}</h2>
    {posts.map((item, index) => {
      return <Post key={index} postData={item.json_build_object} userId={userId} deletePost={deletePost} />
    })}
  </div>)
}

export default Feed;