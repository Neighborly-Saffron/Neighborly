import axios from 'axios';
import React from 'react';
import GroupListItem from './GroupListItem.jsx';
const { useState, useEffect, useRef } = React;

function GroupList() {
	const [groups, setGroups] = useState([]);
	const [query, setQuery] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();

    if (query.length === 0) {
      initialGroupFetch();
    } else {
		axios
			.post('/searchGroups', { query: query })
			.then((res) => {
				console.log(res.data);
				setGroups(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
    }
	};

	const initialGroupFetch = () => {
		axios
			.get('/getGroups')
			.then((res) => {
				console.log(res.data);
				setGroups(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		initialGroupFetch();
	}, []);
	return (
		<div>
			<form onSubmit={handleSubmit} className="border-b-2 mb-3">
				<input
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					type="text"
					className="w-full h-5 p-5 mx-2 outline-none"
					placeholder="Search for a group..."
				/>
			</form>
			<div className="flex flex-col gap-4 items-center mb-3">
				{groups.map((group, i) => {
					return <GroupListItem key={i} group={group.json_build_object} />;
				})}
			</div>
		</div>
	);
}

export default GroupList;
