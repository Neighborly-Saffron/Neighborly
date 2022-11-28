import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'
import CommentFeed from './CommentFeed.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartActive } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartInactive } from '@fortawesome/free-regular-svg-icons';

const { useState, useEffect } = React;

function Post({ postData, userId, removePost }) {
  const [likes, setLikes] = useState(postData.likes)
  const [hasLiked, setHasLiked] = useState(postData.hasliked)
  const [commentText, setCommentText] = useState('')
  const [comments, setComments] = useState([])

  const likePost = (postid, userid) => {
    if (!hasLiked) {
    axios.put(`/posts`, {postid, userid})
      .then((res) => {
          setLikes(likes + 1)
          setHasLiked(!hasLiked)
        })
        .catch((err) => console.log('error liking post'))
      }
  }

  const unlikePost = (postid, userid) => {
    if (hasLiked) {
    axios.put(`/unlikepost`, {postid, userid})
      .then((res) => {
          setLikes(likes - 1)
          setHasLiked(!hasLiked)
        })
        .catch((err) => console.log('error unliking post'))
      }
  }

  const setLikesOnLoad = () => {
    setLikes(postData.likes)
    setHasLiked(postData.hasliked)
  }

  useEffect(() => {setLikesOnLoad()}, [postData]);

  const submitComment =() => {
    if (commentText.length) {
      axios.post('/comment', { commentText, likes: 0, userId, postId: postData.postid })
        .then((res) => {
          setCommentText('')
          getComments()
        })
        .catch((err) => console.log('error posting comment'))
    }
  }

  const getComments = () => {
    axios.get(`/comments/${postData.postid}`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => console.log('error getting comment feed data'))
  }

  useEffect(() => {getComments()}, [postData]);


  return (
    <div className="m-2 p-5 rounded bg-lighterblue drop-shadow-md">
      <div className="flex">
        <img className='object-scale-down h-20 w-20 m-1 rounded' src={postData.pictureurl} alt={postData.username}></img>
        <div className="flex flex-col p-3 w-full">
          <Link className="font-bold text-lg hover:text-lightergreen capitalize" to={`/group/${postData.groupid}`}>{postData.groupname}</Link>
          <h3 className="italic font-bold cursor-default capitalize">{postData.username}</h3>
          <ReactTimeAgo date={Date.parse((postData.postedat+ 'Z'))} locale="en-US" className="italic text-sm cursor-default"/>
          <p className="cursor-default w-full">{postData.message}</p>
        </div>
        {postData.userid === Number(userId) ?
        <FontAwesomeIcon icon={faCircleXmark} onClick={()=>{removePost(postData.postid)}}className="hover:text-darkerblue cursor-pointer w-max justify-self-end text-sm font-extrabold"></FontAwesomeIcon>
        :
        null}
      </div>
      <textarea className='w-full rounded p-1 resize-none' rows='3' type='text' placeholder='Comment...' value={commentText} onChange={(e) => setCommentText(e.target.value)}></textarea>
      <div className="flex justify-between">
          <button className='border-2 bg-darkerblue hover:bg-white hover:text-darkerblue hover:ease-in duration-300 hover:border-darkerblue hover:border-2 text-white rounded p-1' onClick={() => {submitComment()}}>Comment</button>
        {hasLiked ?
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon onClick={() => {unlikePost(postData.postid, userId)}} icon={faHeartActive} transform="grow-8" color="red" className="fa-layers fa-fw hover:cursor-pointer"/>
          <div className="text-black">{likes}</div>
        </div>
        :
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon onClick={() => {likePost(postData.postid, userId)}} icon={faHeartInactive} transform="grow-8" color="black" className="fa-layers fa-fw hover:cursor-pointer"/>
          <div className="text-black cursor-default">{likes}</div>
        </div>
        }
      </div>
      <CommentFeed comments={comments} postId={postData.postid}/>
    </div>
  )
}

export default Post;