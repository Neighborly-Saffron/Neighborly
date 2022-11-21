import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IndividualGroupInGroupList from './IndividualGroupInGroupList.jsx';

function UserGroupList () {
  const [userId, setUserId] = useState('4');
  const [userGroups, setUserGroups] = useState([]);

  const getUserGroups = () => {
    axios.get(`/usergroups/${userId}`)
      .then((res) => {
        // console.log('res.data: ', res.data);
        setUserGroups(res.data);
      })
      .catch((err) => console.log('error getting user groups data'))
  }

  useEffect(getUserGroups, []);

  let groups;
  if (userGroups && userGroups.length > 0) {
    groups = userGroups.map((group, index) =>
      <IndividualGroupInGroupList group={group.json_build_object} key={index}/>
    )
  }

  return (
    <>
      <h3 className="italic">
        User Group List
      </h3>
      <div className="border-2 border-yellow-800 m-5 p-1 overflow-y-scroll">
        {userGroups && groups}
      </div>

    </>
  )
}

export default UserGroupList;