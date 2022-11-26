import React from 'react'
import axios from 'axios'
import Post from './Post.jsx'

const { useState, useEffect } = React;

function GroupFeed ({ userId, path, groupId, posts }) {
  const [groupPosts, setGroupPosts] = useState(posts)

  useEffect(() => {
    setGroupPosts(posts)
  }, [posts])

  return (<div className="">
    {groupPosts.map((item, index) => {
      return <Post key={index} postData={item.json_build_object} userId={userId} />
    })}
  </div>)
}

export default GroupFeed;