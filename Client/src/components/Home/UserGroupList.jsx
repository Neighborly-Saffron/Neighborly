import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IndividualGroupInGroupList from './IndividualGroupInGroupList.jsx';

function UserGroupList ({ userId, userGroups }) {

  let groups;
  if (userGroups && userGroups.length > 0) {
    groups = userGroups.map((group, index) =>
      <IndividualGroupInGroupList group={group.json_build_object} key={index}/>
    )
  }

  return (
    <>
      {/* <h3 className='text-2xl mx-auto mb-2 w-fit italic text-center border-b-4'>
      Your Groups
      </h3> */}
      <div className='h-full flex flex-col items-center gap-3'>
        {userGroups && groups}
      </div>

    </>
  )
}

export default UserGroupList;