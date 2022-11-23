import React from 'react';
import axios from 'axios';
import ReactTimeAgo from 'react-time-ago'

const { useState, useEffect } = React;

function Comment({ commentData }) {

  return (
    <div className="border-2 m-2 border-black rounded bg-white">
      <div className="flex">
        <img className='object-scale-down h-20 w-20 m-1' src={commentData.pictureurl} alt={commentData.username}></img>
        <div className="flex flex-col p-3">
          <h3 className="italic font-bold">{commentData.username}</h3>
          <ReactTimeAgo date={Date.parse(commentData.postedat)} locale="en-US"/>
          <p>{commentData.message}</p>
        </div>
      </div>
    </div>
  )
}

export default Comment;
