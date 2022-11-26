import React from 'react'
import axios from 'axios'
import AdminRow from './AdminRow.jsx'

const { useState, useEffect } = React;

function AdminPanel({ userId }) {
  const [adminGroups, setAdminGroups] = useState([])

  const getAdminGroups = () => {
    axios.get(`/GroupAdmin/?userId=${userId}`)
      .then((data) => {
        setAdminGroups(data.data[0].admingroup)
      })
      .catch((err) => {
        console.log('error getting groups', err)
      })
  }

  useEffect(getAdminGroups, [])

  return (
    <>
      <table>
        <tbody>
        <tr>
          <th></th>
          <th>Group Name</th>
          <th>Join Requests</th>
        </tr>
        {adminGroups ? adminGroups.map((group, index) => {
          return <AdminRow key={index} group={group} getAdminGroups={getAdminGroups} />
        }) : null}
        </tbody>
      </table>
    </>
  )
}

export default AdminPanel;