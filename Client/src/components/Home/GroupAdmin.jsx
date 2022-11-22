import React from 'react';
import axios from 'axios'
import AdminGroups from './AdminGroups.jsx'
const { useState, useEffect } = React;

function GroupAdmin () {
  return (
  <div>
    <h3 className="italic">
      GroupAdmin
    </h3>
    <AdminGroups></AdminGroups>
  </div>
  )
}

export default GroupAdmin;