import React from 'react'
import axios from 'axios'
import Comment from './Comment.jsx'

const { useState, useEffect } = React;

function CommentFeed ({ userId, postId }) {
  const [comments, setComments] = useState([])

  const getComments = () => {
    axios.get(`/comments/${postId}`)
      .then((res) => {
        console.log("RETURN OBJECT", res.data)
        setComments(res.data);
      })
      .catch((err) => console.log('error getting comment feed data'))
  }

  useEffect(getComments, []);

  return (
    <>
    { comments.length ?
  <div className="border-2 m-5 p-1 bg-white">
    {comments.length ?
    comments.map((item, index) => {
      return <Comment key={index} commentData={item.json_build_object}/>
    })
    :
    null
    }
  </div>
  :
  null
  }
  </>)
}

export default CommentFeed;