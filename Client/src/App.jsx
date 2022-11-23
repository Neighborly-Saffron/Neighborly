import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Feed from './components/Feed/Feed.jsx';
import Group from './components/Group/Group.jsx';
import Groups from './components/Groups/Groups.jsx';
import Header from './components/Home/Header.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Profile from './components/Profile/Profile.jsx';
import AddGroup from './components/AddGroup/AddGroup.jsx'
import ModalTemplate from './components/Modals/ModalTemplate.jsx'
const { useState, useEffect } = React;

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
		if (Object.keys(userData).length) {
			axios.post('/user', {
				authId: userData.sub,
				name: `${userData.given_name} ${userData.family_name}`,
				bio: 'howdy',
				pictureUrl: userData.picture
				console.log('userData.sub:', userData.sub)
			})
			.then((response) => {
				axios.get(`/user?authId=${userData.sub}`)
				.then((data) => {console.log(data); setUserId(data.data.rows[0].id) })
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

	useEffect(() => {
    if(isAuthenticated) {
      onAuth(user)
    }
  }, [isAuthenticated])

	return (
		<>
			{userId && isAuthenticated &&
			<>
			<Header />
      <Routes>
      <Route path="/" element={<Home userId={userId} userGroups={userGroups} />}/>
      <Route path="/groups" element={<Groups userGroups={userGroups} />}/>
      <Route path="/profile" element={<Profile userId={userId} />}/>
      <Route path="/group/:id" element={<Group userId={userId} />}/>
      <Route path="/groups/group/:id" element={<Group userId={userId} />}/>
      </Routes>
			</>}
			{!isAuthenticated &&
			<>
			{isLoading &&
				<div className="h-full">
					<div className="flex items-center justify-center">
						<div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
						</div>
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>}
			{!isLoading && <Login onAuth={onAuth}/>}
			</>
}
		</>
	);
}

export default App;