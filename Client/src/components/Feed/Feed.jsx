import React from 'react';
import Post from './Post.jsx'

const { useState, useEffect } = React;

const postItems = [1,2,3,4,5]

function Feed () {
  return (<div className="border-2 border-red-900 m-5 p-1">
    <h2>FEED</h2>
    {postItems.map(item => {
      return <Post />
    })}
  </div>)
}

export default Feed;

/*
So assuming we're designing this feed for the home screen we will want data for the most recent posts across
all of the user's groups. That'll be a query to the DB that returns a set amount of objects from post where the post's
groupIDs are equal to the user's group ids. So we'll pass in the user's id, check the usergroups table for all group
ids associated with that user's id and then return recent posts from the post table
*/