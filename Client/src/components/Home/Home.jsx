import React from 'react';
import Feed from '../Feed/Feed.jsx';
import GroupAdmin from './GroupAdmin.jsx';
import Map from './Map.jsx';
import UserGroupList from './UserGroupList.jsx';

const { useState, useEffect } = React;

function Home() {
	return (
		<div className="border-2 border-yellow-800 m-5 p-1">
			<UserGroupList />
			<Map />
			<GroupAdmin />
			<Feed path={'home'} />
		</div>
	);
}

export default Home;