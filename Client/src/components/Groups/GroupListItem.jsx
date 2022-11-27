import React from 'react';
import axios from 'axios';
const { useState, useEffect } = React;

function GroupListItem({ group, userId, groupIds }) {
	const handleRequest = () => {
		axios
			.post('/requestJoin', {
				info: {
					user: userId,
					group: group.group_id,
				},
			})
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className="flex flex-col items-center gap-3">
			<div className="w-72 h-fit max-h-72 overflow-hidden overflow-y-scroll bg-darkerblue text-white rounded-lg drop-shadow-md">
				<div className="flex flex-col gap-1 p-5 items-center">
					<img
						className="object-scale-down h-40 w-40 "
						src={group.pictureurl}
						alt={group.name}
					/>
					<ul className="flex flex-col items-center">
						<li className="text-4xl font font-semibold capitalize">
							{group.name}
						</li>
						<li className="italic capitalize">{group.admin}</li>
						<li className="normal-case">{group.description}</li>
					</ul>
				</div>

			</div>
			<div className="flex justify-end mr-2 mb-2">
					{groupIds.indexOf(group.group_id) < 0 ? (
						<button
							onClick={handleRequest}
							type="button"
							className="border-2 bg-lighterblue p-2 rounded-md"
						>
							Request to Join
						</button>
					) : (
						<span className="border-2 text-black bg-white p-2 rounded-md">
							Member
						</span>
					)}
				</div>
		</div>
	);
}

export default GroupListItem;
