import React from 'react';
import axios from 'axios';
const { useState, useEffect } = React;

function GroupListItem({ group, userId }) {
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
		<div className="w-full bg-lighterblue border-2 ">
			<div className="flex gap-3 p-2 items-center">
				<img
					className="object-scale-down h-40 w-40 "
					src={group.pictureurl}
					alt={group.name}
				/>
				<ul className="flex flex-col items-center">
					<li className="text-2xl font font-semibold">{group.name}</li>
					<li className="italic">{group.admin}</li>
					<li  className="">{group.description}</li>
				</ul>
			</div>
			<div className="flex justify-end mr-2 mb-2">
				<button onClick={handleRequest} type="button" className="border-2 bg-white p-2 rounded-md">
					Request to Join
				</button>
			</div>
		</div>
	);
}

export default GroupListItem;
