import React from 'react';
import Header from '../Home/Header.jsx';
import GroupList from './GroupList.jsx';
const { useState, useEffect } = React;

function Groups() {
	return (
		<div className="border-2 border-color-green-900 m-5 p-1 w-full">
			<Header />
			<div className="grid grid-cols-4 grid-rows-4 ">
				<div className="col-span-1 row-span-4 border-r-2">User Group List</div>
				<div className="col-start-2 col-span-3 row-span-4">
					<GroupList />
				</div>
			</div>
		</div>
	);
}

export default Groups;