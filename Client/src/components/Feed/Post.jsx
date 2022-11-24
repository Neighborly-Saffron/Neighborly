import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'
import CommentFeed from './CommentFeed.jsx'

const { useState, useEffect } = React;

function Post({ postData, userId }) {
  const [likes, setLikes] = useState(postData.likes)
  const [hasLiked, setHasLiked] = useState(false)
  const [commentText, setCommentText] = useState('')
  const [comments, setComments] = useState([])

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

  const submitComment =() => {
    axios.post('/comment', { commentText, likes: 0, userId, postId: postData.postid })
      .then((res) => {
        console.log('posted a comment')
        setCommentText('')
        getComments()
      })
      .catch((err) => console.log('error posting comment'))
  }

  const getComments = () => {
    axios.get(`/comments/${postData.postid}`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => console.log('error getting comment feed data'))
  }

  useEffect(getComments, []);


  return (
    <div className="border-2 m-2 p-2 border-black rounded bg-lighterblue">
      <div className="flex">
        <img className='object-scale-down h-20 w-20 m-1' src={postData.pictureurl} alt={postData.username}></img>
        <div className="flex flex-col p-3">
          <Link className="font-bold text-lg" to={`/group/${postData.groupid}`}>{postData.groupname}</Link>
          <h3 className="italic font-bold">{postData.username}</h3>
          <ReactTimeAgo date={Date.parse(postData.postedat)} locale="en-US"/>
          <p>{postData.message}</p>
        </div>
      </div>
      <textarea className='w-full rounded' rows='3' type='text' placeholder='Comment...' value={commentText} onChange={(e) => setCommentText(e.target.value)}></textarea>
      <div className="flex justify-between">
          <button className='btn rounded border-2 bg-white p-1' onClick={() => {submitComment()}}>Comment</button>
        <div onClick={() => {likePost(postData.postid)}} className="h-6 w-6 border-2 border-lightergreen bg-darkergreen hover:bg-lightergreen hover:border-darkergreen text-white m-1 rounded-full flex items-center justify-center cursor-default">{likes}</div>
      </div>
      <CommentFeed comments={comments} postId={postData.postid}/>
    </div>
  )
}

export default Post;