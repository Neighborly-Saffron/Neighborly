import React from 'react'
import axios from 'axios'
import Comment from './Comment.jsx'

const { useState, useEffect } = React;

function CommentFeed ({ userId, postId, comments }) {

  return (
    <div>
    { comments.length ?
  <div className="p-1">
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
  </div>)
}

export default CommentFeed;