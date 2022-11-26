import React from 'react';
import axios from 'axios';
import AdminGroup from './AdminGroup.jsx';

const { useState, useEffect } = React;

function AdminGroups({ userId }) {
	const [groups, setGroups] = useState([]);

	const getAllAdminGroups = () => {
		axios
			.get(`/GroupAdmin/?userId=${userId}`)
			.then((res) => {
				setGroups(res.data[0].admingroup);
			})
			.catch((err) => {
				console.log('client failed to receive data from db', err);
			});
	};

	useEffect(() => {
		getAllAdminGroups();
	}, []);

	return (
		<>
			{groups &&
				groups.map((group, index) => {
					return <AdminGroup key={index} group={group}></AdminGroup>;
				})}
		</>
	);
}

export default AdminGroups;
