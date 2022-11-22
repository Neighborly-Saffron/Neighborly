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
			<div className="flex">
				<img
					className="object-scale-down h-20 w-20 m-1"
					src={group.pictureurl}
					alt={group.name}
				/>
				<ul className="flex flex-col">
					<li className="">{group.name}</li>
					<li>{group.admin}</li>
					<li>{group.description}</li>
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
