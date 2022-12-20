import React from 'react'
import axios from 'axios'
import AdminGroupModal from './AdminGroupModal.jsx'

const { useState, useEffect } = React;

function RequestRow({ user, approveUser, groupId, declineUser }) {

  return (
    <>
      <tr>
        <th><img
          src={user.pictureurl}
          className="object-scale-down h-10 w-10 m-1 rounded"
        /></th>
        <th className="italic font-bold cursor-default"> {user.username}</th>
        <th><button className='border-2 bg-wizardred hover:ease-in duration-300 opacity-75 hover:bg-white hover:border-wizardred hover:border-2 text-white hover:text-wizardred rounded p-1' onClick={() => {approveUser(user.userid, groupId)}} >Approve</button></th>
        <th><button className='border-2 bg-wizardred hover:ease-in duration-300 opacity-75 hover:bg-white hover:border-wizardred hover:border-2 text-white hover:text-wizardred rounded p-1' onClick={() => {declineUser(user.userid, groupId)}}>Decline</button></th>
      </tr>
    </>
  )
}

export default RequestRow;