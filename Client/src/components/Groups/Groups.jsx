import React from 'react';
import GroupList from './GroupList.jsx';
import UserGroupList from '../Home/UserGroupList.jsx'
const { useState, useEffect } = React;

function Groups({userId, userGroups}) {
	const [groupIds, setGroupIds] = useState([]);

	const getGroupIds = () => {
		let temp = [];
		userGroups.forEach(group => {
			temp.push(group.json_build_object.groupId);
		})
		setGroupIds(temp);
	}

	useEffect(() => {
		getGroupIds();
	}, [userGroups])
	return (
		<div className="mt-5 border-t-2">
			<div className="grid grid-cols-5 p-5 overflow-y-scroll">
				<div className="col-span-1 border-r-2 p-2 mt-6">
				<UserGroupList userId={userId} userGroups={userGroups} />
				</div>
				<div className="col-start-2 col-span-4 ">
					<GroupList groupIds={groupIds} userId={userId} />
				</div>
			</div>
		</div>
	);
}

export default Groups;