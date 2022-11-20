import React from 'react';
import GroupEventMap from './GroupEventMap.jsx'
import GroupEventList from './GroupEventList.jsx'
import CreateEventModal from './CreateEventModal.jsx'

const { useState, useEffect } = React;

function Group () {
  return (<div className="border-2 border-blue-900 m-5 p-1">
    <h2>
      GROUP
    </h2>
    <GroupEventMap />
    <GroupEventList />
    <CreateEventModal />
  </div>)
}

export default Group;