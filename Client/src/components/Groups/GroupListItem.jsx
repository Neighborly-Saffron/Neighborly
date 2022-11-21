import React from 'react';

const { useState, useEffect } = React;

function GroupListItem({ group }) {
	return (
		<div className="w-full bg-lighterblue border-2 ">
			<div className="flex">
				<img
					className="object-scale-down h-20 w-20 m-1"
					src={group.pictureurl}
					alt={group.name}
				/>
				<ul className="flex flex-col">
					<li>{group.name}</li>
					<li>{group.admin}</li>
					<li>{group.description}</li>
				</ul>
			</div>
			<div className="flex justify-end">
				<button type="button" className=" relative bottom-0 right-0">
					Request to Join
				</button>
			</div>
		</div>
	);
}

export default GroupListItem;
