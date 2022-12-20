import axios from 'axios';
import React from 'react';
import GroupListItem from './GroupListItem.jsx';
const { useState, useEffect, useRef } = React;

function GroupList({ userId, groupIds }) {
	const [groups, setGroups] = useState([]);
	const [query, setQuery] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();

		if (query.length === 0) {
			initialGroupFetch();
		} else {
			axios
				.post('/groups/search', { query: query })
				.then((res) => {
					setGroups(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	const initialGroupFetch = () => {
		axios
			.get('/groups/getGroups')
			.then((res) => {
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
			<div className="p-2 flex gap-2 justify-center items-center">
				<form className="flex gap-5 w-full justify-center items-center" onSubmit={handleSubmit}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#EB4D2A" className="w-10 h-10 mb-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
				</svg>

					<input
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						type="text"
						className="w-7/12 h-5 p-7 mb-5 border-2 border-lightergreen rounded-lg outline-none"
						placeholder="Search for a group..."
					/>
				</form>
			</div>
			<div className="flex flex-wrap justify-center gap-4 mb-3 p-2">
				{groups.map((group, i) => {
					return (
						<GroupListItem
							groupIds={groupIds}
							userId={userId}
							key={i}
							group={group.json_build_object}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default GroupList;
