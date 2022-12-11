import React, { useState, useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Login from './components/Login/Login.jsx';
import Home from './components/Home/Home.jsx';
import Feed from './components/Feed/Feed.jsx';
import Group from './components/Group/Group.jsx';
import Groups from './components/Groups/Groups.jsx';
import Header from './components/Home/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import AddGroup from './components/AddGroup/AddGroup.jsx'

function App() {
  const { isLoading, isAuthenticated, user } = useAuth0();
	const [userData, setUserData] = useState({});
	const [userId, setUserId] = useState(0);
	const [loading, setLoading] = useState(true);
	const [userGroups, setUserGroups] = useState([]);
	const onAuth = (data) => {
		setUserData(data);
	};

	useEffect(() => {
    if(isAuthenticated) {
      onAuth(user)
    }
  }, [isAuthenticated])

  useEffect(() => {
		if (Object.keys(userData).length) {
			axios.post('/user', {
				authId: userData.sub,
				name: `${userData.given_name} ${userData.family_name}`,
				bio: 'howdy',
				pictureUrl: userData.picture
			})
			.then((response) => {
				axios.get(`/user?authId=${userData.sub}`)
				.then((data) => setUserId(data.data.rows[0].id))
			})
			.catch((err) => console.log(err));
		}
	}, [userData])

	useEffect (() => {
		if (userId) {
			axios.get(`/usergroups/${userId}`)
			.then((res) => {
				setUserGroups(res.data);
			})
			.then((res) => setLoading(false))
			.catch((err) => console.log('error getting user groups data'))
		}
	}, [userId])

	return (
		<div className="bg-lightlighterblue">
			{Boolean(userId) && isAuthenticated &&
			<>
			<Header />
      <Routes>
      <Route path="/" element={<Home userId={userId} userGroups={userGroups} setUserGroups={setUserGroups}/>}/>
      <Route path="/groups" element={<Groups userId={userId} userGroups={userGroups}/>}/>
      <Route path="/profile" element={<Profile userId={userId} userGroups={userGroups} setUserGroups={setUserGroups}/>}/>
      <Route path="/group/:id" element={<Group userId={userId} userData={userData} />}/>
      <Route path="/groups/group/:id" element={<Group userId={userId} userData={userData} />}/>
      </Routes>
			</>}
			{!isAuthenticated &&
			<>
			{isLoading ?

				<div className="flex h-screen w-screen justify-center items-center">
  				<span className="animate-ping inline-flex rounded-full bg-sky-400 opacity-75 italic text-4xl mb-2">Loading...</span>
  				<span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
				</div> : null}
			{!isLoading ? <Login onAuth={onAuth} /> : null}
			</>
		}
		</div>
	);
}

export default App;