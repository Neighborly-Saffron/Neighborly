import axios from 'axios';
import React from 'react';
import GroupListItem from './GroupListItem.jsx';
const { useState, useEffect } = React;

function GroupList() {

  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios.get('/groups')
    .then(res => {
      console.log(res.data);
      setGroups(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  },[])
	return (
		<div>
			<h3 className="italic">Group List</h3>
      <div className="flex flex-col gap-4">
      {groups.map((group, i) => {
        return <GroupListItem key={i} group={group.json_build_object} />
      })}
      </div>
		</div>
	);
}

export default GroupList;