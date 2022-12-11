import React from 'react';
import axios from 'axios';
import ReactTimeAgo from 'react-time-ago'
import { Link } from 'react-router-dom'
import circleX from '../../../../public/circle-xmark.svg';
import CommentFeed from './CommentFeed.jsx'

const { useState, useEffect } = React;

function Post({ postData, userId, removePost }) {
  const [likes, setLikes] = useState(postData.likes)
  const [hasLiked, setHasLiked] = useState(postData.hasliked)
  const [commentText, setCommentText] = useState('')
  const [comments, setComments] = useState([])

  const likePost = (postid, userid) => {
    if (!hasLiked) {
    axios.put(`/feed/posts`, {postid, userid})
      .then((res) => {
          setLikes(likes + 1)
          setHasLiked(!hasLiked)
        })
        .catch((err) => console.log('error liking post'))
      }
  }

  const unlikePost = (postid, userid) => {
    if (hasLiked) {
    axios.put(`/feed/unlikepost`, {postid, userid})
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
      axios.post('/feed/comment', { commentText, likes: 0, userId, postId: postData.postid })
        .then((res) => {
          setCommentText('')
          getComments()
        })
        .catch((err) => console.log('error posting comment'))
    }
  }

  const getComments = () => {
    axios.get(`/feed/comments/${postData.postid}`)
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
          <Link className="font-bold text-lg hover:text-lightlighterblue capitalize" to={`/group/${postData.groupid}`}>{postData.groupname}</Link>
          <h3 className="italic font-bold cursor-default capitalize">{postData.username}</h3>
          <ReactTimeAgo date={Date.parse((postData.postedat+ 'Z'))} locale="en-US" className="italic text-sm cursor-default"/>
          <p className="cursor-default w-full">{postData.message}</p>
        </div>
        {postData.userid === Number(userId) ?
        <img src={circleX} className="hover:bg-darkerblue cursor-pointer justify-self-end w-4 h-4 rounded-full" onClick={()=>{removePost(postData.postid)}}></img>
        :
        null}
      </div>
      <textarea className='w-full rounded p-1 resize-none border-2 border-lightgray' rows='3' type='text' placeholder='Comment...' value={commentText} onChange={(e) => setCommentText(e.target.value)}></textarea>
      <div className="flex justify-between">
          <button className='border-2 bg-darkerblue hover:bg-white hover:text-darkerblue hover:ease-in duration-300 hover:border-darkerblue hover:border-2 text-white rounded p-1' onClick={() => {submitComment()}}>Comment</button>
        {hasLiked ?
        <div className="flex gap-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-6 h-6 hover:cursor-pointer" onClick={() => {unlikePost(postData.postid, userId)}}>
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
          <div className="text-black">{likes}</div>
        </div>
        :
        <div className="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:cursor-pointer" onClick={() => {likePost(postData.postid, userId)}}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          <div className="text-black cursor-default">{likes}</div>
        </div>
        }
      </div>
      <CommentFeed comments={comments} postId={postData.postid}/>
    </div>
  )
}

export default Post;