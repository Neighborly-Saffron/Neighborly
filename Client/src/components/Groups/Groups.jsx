import React from 'react';
import GroupList from './GroupList.jsx'

const { useState, useEffect } = React;

function Groups () {
  return (<div className="border-2 border-color-green-900 m-5 p-1">
    <h2>
      GROUPS
    </h2>
    <GroupList />
  </div>)
}

export default Groups;