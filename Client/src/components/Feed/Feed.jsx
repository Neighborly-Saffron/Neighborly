import React from 'react'
import axios from 'axios'
import Post from './Post.jsx'

const { useState, useEffect } = React;

const date = new Date()
console.log(date)

function Feed ({ path }) {
  const [posts, setPosts] = useState([])

  const getPosts = () => {
    axios.get(`/posts/${path}`)
      .then((res) => {
        // console.log('post data:', res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log('error getting feed post data'))
  }

  useEffect(getPosts, []);

  return (<div className="border-2 m-5 p-1 bg-white">
    <h2>FEED</h2>
    {posts.map((item, index) => {
      return <Post key={index} postData={item.json_build_object}/>
    })}
  </div>)
}

export default Feed;

/*
So assuming we're designing this feed for the home screen we will want data for the most recent posts across
`al`l of the user's groups. That'll be a query to the DB that returns a set amount of objects from post where the post's
groupIDs are equal to the user's group ids. So we'll pass in the user's id, check the usergroups table for all group
ids associated with that user's id and then return recent posts from the post table

To populate a post we need the following
From post: id, message
From users: name & pictureurl where userid from post = id from users
From groups: name where groupid from post = id from groups
*/