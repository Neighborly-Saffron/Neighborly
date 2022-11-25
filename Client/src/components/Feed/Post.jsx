import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'
import CommentFeed from './CommentFeed.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

const { useState, useEffect } = React;

function Post({ postData, userId }) {
  console.log('post data', postData)
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

  useEffect(getComments, []);


  return (
    <div className="m-2 p-2 rounded bg-lighterblue">
      <div className="flex">
        <img className='object-scale-down h-20 w-20 m-1 rounded' src={postData.pictureurl} alt={postData.username}></img>
        <div className="flex flex-col p-3">
          <Link className="font-bold text-lg" to={`/group/${postData.groupid}`}>{postData.groupname}</Link>
          <h3 className="italic font-bold">{postData.username}</h3>
          <ReactTimeAgo date={Date.parse(postData.postedat)} locale="en-US"/>
          <p>{postData.message}</p>
        </div>
      </div>
      <textarea className='w-full rounded' rows='3' type='text' placeholder='Comment...' value={commentText} onChange={(e) => setCommentText(e.target.value)}></textarea>
      <div className="flex justify-between">
          <button className='border-2 bg-darkerblue hover:bg-lighterblue hover:border-black hover:border-2 text-white rounded p-1' onClick={() => {submitComment()}}>Comment</button>
        {/* <div className="h-6 w-6 border-2 border-lightergreen bg-darkergreen hover:bg-lightergreen hover:border-darkergreen text-white m-1 rounded-full flex items-center justify-center cursor-default">{likes}</div> */}
        {hasLiked ?
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon icon={faHeart} transform="grow-8" color="red" className="fa-layers fa-fw"/>
          <div className="text-white">{likes}</div>
        </div>
        :
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon onClick={() => {likePost(postData.postid, userId)}} icon={faHeart} transform="grow-8" color="black" className="fa-layers fa-fw"/>
          <div className="text-white">{likes}</div>
        </div>
        }
      </div>
      <CommentFeed comments={comments} postId={postData.postid}/>
    </div>
  )
}

export default Post;