import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'

const { useState, useEffect } = React;

function Post({ postData }) {

  const [likes, setLikes] = useState(postData.likes)
  const [hasLiked, setHasLiked] = useState(false)

  const likePost = (postid) => {
    if (!hasLiked) {
    axios.put(`/posts`, {postid})
      .then((res) => {
          setLikes(likes + 1)
          setHasLiked(!hasLiked)
        })
        .catch((err) => console.log('error liking post'))
      }
  }

  return (
    <div className="border-2 m-2 border-black rounded bg-lighterblue">
      <div className="flex">
        <img className='object-scale-down h-20 w-20 m-1' src={postData.pictureurl} alt={postData.name}></img>
        <div className="flex flex-col p-3">
          <Link className="font-bold text-lg" to={`/group/${postData.groupid}`}>{postData.groupname}</Link>
          <h3 className="italic font-bold">{postData.username}</h3>
          <ReactTimeAgo date={Date.parse(postData.postedat)} locale="en-US"/>
          <p>{postData.message}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <div onClick={() => {likePost(postData.postid)}} className="h-6 w-6 border-2 border-lightergreen bg-darkergreen hover:bg-lightergreen hover:border-darkergreen text-white m-1 rounded-full flex items-center justify-center hover:bg-red-900 cursor-default">{likes}</div>
      </div>
    </div>
  )
}

export default Post;