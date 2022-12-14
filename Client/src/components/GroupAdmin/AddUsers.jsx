import React from 'react'
import axios from 'axios'
import RequestRow from './RequestRow.jsx'

const { useState, useEffect } = React;

function AddUsers({ groupId, switchModal }) {
  const [userGroupRequests, setUserGroupRequests] = useState([])

  const getUserRequests = () => {
    axios.get(`/admin/userRequests/${groupId}`)
      .then((data) => {
        if (data.data.length === 0) {
          switchModal(false)
        }
        setUserGroupRequests(data.data)
      })
      .catch((err) => {
        console.log('error getting user requests', err)
      })
  }

  useEffect(getUserRequests, [])

  const approveUser = (userId, groupId) => {
    axios.post('/admin/userApprove', {userid: userId, groupid: groupId})
      .then((data) => {
        getUserRequests()
      })
      .catch((err) => {
        console.log('error approving user requests', err)
      })
  }

  const declineUser = (userId, groupId) => {
    axios.post('/admin/userDecline', {userid: userId, groupid: groupId})
      .then((data) => {
        getUserRequests()
      })
      .catch((err) => {
        console.log('error approving user decline', err)
      })
  }

  return (
    <>
     <table className='table-auto'>
        <tbody>
        {/* <tr>
          <th></th>
          <th>User Name</th>
          <th>Approve</th>
          <th>Decline</th>
        </tr> */}
        {userGroupRequests.map((user, index) => {
          return <RequestRow key={index} user={user.json_build_object} approveUser={approveUser} declineUser={declineUser} groupId={groupId} />
        })}
        </tbody>
      </table>
    </>
  )
}

export default AddUsers;