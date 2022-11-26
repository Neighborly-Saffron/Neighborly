import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'
import CommentFeed from './CommentFeed.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart, faCircleXmark} from '@fortawesome/free-solid-svg-icons';

const { useState, useEffect } = React;

function Post({ postData, userId, deletePost }) {
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

  const submitComment =() => {
    if (commentText.length) {
      axios.post('/comment', { commentText, likes: 0, userId, postId: postData.postid })
        .then((res) => {
          console.log('posted a comment')
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
    <div className="m-2 p-5 rounded bg-lighterblue">
      <div className="flex">
        <img className='object-scale-down h-20 w-20 m-1 rounded' src={postData.pictureurl} alt={postData.username}></img>
        <div className="flex flex-col p-3 w-full">
          <Link className="font-bold text-lg hover:text-darkerblue capitalize" to={`/group/${postData.groupid}`}>{postData.groupname}</Link>
          <h3 className="italic font-bold cursor-default capitalize">{postData.username}</h3>
          <ReactTimeAgo date={Date.parse(postData.postedat)} locale="en-US" className="italic text-sm cursor-default"/>
          <p className="cursor-default w-full">{postData.message}</p>
        </div>
        {postData.userid === Number(userId) ?
        <FontAwesomeIcon icon={faCircleXmark} onClick={()=>{deletePost(postData.postid)}}className="hover:text-darkerblue cursor-pointer w-max justify-self-end text-sm font-extrabold translate-x-3 -translate-y-3"></FontAwesomeIcon>
        :
        null}
      </div>
      <textarea className='w-full rounded' rows='3' type='text' placeholder='Comment...' value={commentText} onChange={(e) => setCommentText(e.target.value)}></textarea>
      <div className="flex justify-between">
          <button className='border-2 bg-darkerblue hover:bg-lighterblue hover:border-black hover:border-2 text-white rounded p-1' onClick={() => {submitComment()}}>Comment</button>
        {hasLiked ?
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faHeart} transform="grow-8" color="red" className="fa-layers fa-fw"/>
          <div className="text-white">{likes}</div>
        </div>
        :
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon onClick={() => {likePost(postData.postid, userId)}} icon={faHeart} transform="grow-8" color="black" className="fa-layers fa-fw hover:cursor-pointer"/>
          <div className="text-white cursor-default">{likes}</div>
        </div>
        }
      </div>
      <CommentFeed comments={comments} postId={postData.postid}/>
    </div>
  )
}

export default Post;