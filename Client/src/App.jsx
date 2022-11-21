import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from './components/Feed/Feed.jsx';
import Group from './components/Group/Group.jsx';
import Groups from './components/Groups/Groups.jsx';
import Header from './components/Home/Header.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Profile from './components/Profile/Profile.jsx';
import AddGroup from './components/AddGroup/AddGroup.jsx'
const { useState, useEffect } = React;

function App() {
	return (
		<>
			<Login />
			<Header />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/groups" element={<Groups />}/>
      <Route path="/profile" element={<Profile />}/>
      </Routes>
			<Feed path={'home'}/>
			<AddGroup />
      <Group />
		</>
	);
}

export default App;