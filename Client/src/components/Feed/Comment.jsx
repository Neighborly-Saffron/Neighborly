import React from 'react';
import axios from 'axios';
import ReactTimeAgo from 'react-time-ago'

const { useState, useEffect } = React;

function Comment({ commentData }) {

  return (
    <div className="m-2 p-2 rounded bg-white border-2 border-lightlighterblue">
      <div className="flex gap-2">
        <img className='object-scale-down h-10 w-10 m-1 rounded' src={commentData.pictureurl} alt={commentData.username}></img>
        <div className="flex flex-col">
          <h3 className="italic font-bold cursor-default">{commentData.username}</h3>
          <ReactTimeAgo className="italic text-sm cursor-default" date={Date.parse((commentData.postedat+ 'Z'))} locale="en-US"/>
          <p className="cursor-default">{commentData.message}</p>
        </div>
      </div>
    </div>
  )
}

export default Comment;
