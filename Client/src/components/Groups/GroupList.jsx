import axios from 'axios';
import React from 'react';
import GroupListItem from './GroupListItem.jsx';
const { useState, useEffect } = React;

function GroupList() {

  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios.get('/getGroups')
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
			<form className="border-b-2 mb-3">
        <input type="text" className="w-full h-5 p-5 mx-2 outline-none" placeholder="Search for a group..." />
      </form>
      <div className="flex flex-col gap-4 items-center mb-3">
      {groups.map((group, i) => {
        return <GroupListItem key={i} group={group.json_build_object} />
      })}
      </div>
		</div>
	);
}

export default GroupList;