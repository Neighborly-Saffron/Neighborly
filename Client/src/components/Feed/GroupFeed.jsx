import React from 'react'
import axios from 'axios'
import Post from './Post.jsx'

const { useState, useEffect } = React;

function GroupFeed ({ userId, path, groupId, posts, removePost }) {
  const [groupPosts, setGroupPosts] = useState(posts)

  useEffect(() => {
    setGroupPosts(posts)
  }, [posts])

  return (<div className="flex flex-col gap-3">
    {groupPosts.map((item, index) => {
      return <Post key={index} postData={item.json_build_object} userId={userId} removePost={removePost} />
    })}
  </div>)
}

export default GroupFeed;