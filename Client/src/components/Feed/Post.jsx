import React from 'react';
import axios from 'axios';

const { useState, useEffect } = React;

function Post({ postData }) {
  const [likes, setLikes] = useState(postData.likes)
  const [hasLiked, setHasLiked] = useState(false)

  const likePost = (postid) => {
    if (!hasLiked) {
    axios.put(`/posts`, {postid})
      .then((res) => {
          console.log('liked');
          setLikes(likes + 1)
          setHasLiked(!hasLiked)
        })
        .catch((err) => console.log('error liking post'))
      }
  }

  return (
    <div className="border-2 m-2 border-black bg-blue-700">
      <div className="flex">
        <img className='object-scale-down h-20 w-20 m-1' src={postData.pictureurl} alt={postData.name}></img>
        <div className="flex flex-col p-3">
          <h3 className="italic text-white">{postData.groupname}</h3>
          <h3 className="italic text-red-500">{postData.username}</h3>
          <p className="text-white">{postData.message}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <div onClick={() => {likePost(postData.postid)}} className="h-6 w-6 border-2 border-black m-1 bg-red-500 text-white rounded-full text-center">{likes}</div>
      </div>
    </div>
  )
}

export default Post;