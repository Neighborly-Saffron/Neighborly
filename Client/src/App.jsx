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

	const [userData, setUserData] = useState({});
	const [userId, setUserId] = useState();

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
			})
			.then((response) => {
				axios.get(`/user?authId=${userData.sub}`)
				.then((data) => {console.log(data); setUserId(data.data.rows[0].id) })
			})
			.catch((err) => console.log(err));
		}
	}, [userData])

	console.log(userData)
	console.log(userId)
	return (
		<>
			<Login path="/login" onAuth={onAuth}/>
			<Header />
      <Routes>
      <Route path="/" element={<Home userId={userId} />}/>
      <Route path="/groups" element={<Groups userId={userId} />}/>
      <Route path="/profile" element={<Profile userId={userId} />}/>
      </Routes>
			<Feed path={'home'}/>
			<AddGroup />
      <Group />
		</>
	);
}

export default App;