import React from 'react';
import GroupList from './GroupList.jsx';
import UserGroupList from '../Home/UserGroupList.jsx';
const { useState, useEffect } = React;

function Groups({ userId, userGroups }) {
	const [groupIds, setGroupIds] = useState([]);
	const getGroupIds = () => {
		let temp = [];
		userGroups.forEach((group) => {
			temp.push(group.json_build_object.groupId);
		});
		setGroupIds(temp);
	};

	useEffect(() => {
		getGroupIds();
	}, [userGroups]);
	return (
		<div className="m-5 mb-0 p-10">
			<div className="flex gap-5">
				<div className="w-1/5">
					<UserGroupList userId={userId} userGroups={userGroups} />
				</div>
				<div className="w-4/5">
					<GroupList groupIds={groupIds} userId={userId} />
				</div>
			</div>
		</div>
	);
}

export default Groups;
