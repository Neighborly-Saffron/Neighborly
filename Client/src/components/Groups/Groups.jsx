import React from 'react';
import GroupList from './GroupList.jsx';
import UserGroupList from '../Home/UserGroupList.jsx'
const { useState, useEffect } = React;

function Groups({userId}) {
	return (
		<div className="mt-5 border-t-2">
			<div className="grid grid-cols-4 grid-rows-4 p-5">
				<div className="col-span-1 row-span-4 border-r-2 p-2">
				<UserGroupList userId={userId} />
				</div>
				<div className="col-start-2 col-span-3 row-span-4">
					<GroupList userId={userId}/>
				</div>
			</div>
		</div>
	);
}

export default Groups;