import React from 'react';
import axios from 'axios';
const { useState, useEffect } = React;

function GroupListItem({ group, userId, groupIds }) {
  const handleRequest = () => {
    axios.post('/requestJoin', {info: {
			user: userId,
			group: group.group_id
		}})
		.then(res => {
			console.log(res.data);
		})
		.catch(err => {
			console.log(err);
		})
  }
	return (
		<div className="w-full h-fit bg-lighterblue rounded-lg ">
			<div className="flex gap-1 px-5 items-center">
				<img
					className="object-scale-down h-72 w-72 "
					src={group.pictureurl}
					alt={group.name}
				/>
				<ul className="flex flex-col items-center">
					<li className="text-4xl font font-semibold capitalize">{group.name}</li>
					<li className="italic capitalize">{group.admin}</li>
					<li  className="">{group.description}</li>
				</ul>
			</div>
			<div className="flex justify-end mr-2 mb-2">
				{groupIds.indexOf(group.group_id) < 0 ? <button onClick={handleRequest} type="button" className="border-2 bg-white p-2 rounded-md">
					Request to Join
				</button> : <span className="border-2 bg-white p-2 rounded-md">
					Member
				</span>}
			</div>
		</div>
	);
}

export default GroupListItem;
