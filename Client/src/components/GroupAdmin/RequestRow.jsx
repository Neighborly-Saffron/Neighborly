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
          className="bject-scale-down h-10 w-10 m-1 rounded"
        /></th>
        <th className="italic font-bold cursor-default">{user.username}</th>
        <th><button className='border-2 bg-darkerblue hover:bg-lighterblue hover:border-black hover:border-2 text-white rounded p-1' onClick={() => {approveUser(user.userid, groupId)}} >Approve</button></th>
        <th><button className='border-2 bg-darkerblue hover:bg-lighterblue hover:border-black hover:border-2 text-white rounded p-1' onClick={() => {declineUser(user.userid, groupId)}}>Decline</button></th>
      </tr>
    </>
  )
}

export default RequestRow;