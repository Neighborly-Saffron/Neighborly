import React from 'react';
import Home from './components/Home/Home.jsx'
import Groups from './components/Groups/Groups.jsx'
import Group from './components/Group/Group.jsx'
import Feed from './components/Feed/Feed.jsx'
import Profile from './components/Profile/Profile.jsx'
import Login from './components/Login/Login.jsx'

const { useState, useEffect } = React;

function App () {
  return (<div>
    <h2 className="text-purple-900 text-3xl">
      BASE LAYER APP
    </h2>
    <Login />
    <Home />
    <Groups />
    <Feed />
    <Group />
    <Profile />
  </div>)
}

export default App;