import axios from 'axios';
import React from 'react';
import GroupListItem from './GroupListItem.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
const { useState, useEffect, useRef } = React;

function GroupList({userId, groupIds}) {
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
			<form className="p-2 flex gap-2  justify-center items-center" onSubmit={handleSubmit}>
				<input
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					type="text"
					className="w-7/12 h-5 p-7 mb-5 border-2 border-lightergreen rounded-lg outline-none"
					placeholder="Search for a group..."
				/>
			</form>
			<div className="flex flex-wrap justify-center gap-4 mb-3 p-2">
				{groups.map((group, i) => {
					return <GroupListItem groupIds={groupIds} userId={userId} key={i} group={group.json_build_object} />;
				})}
			</div>
		</div>
	);
}

export default GroupList;
