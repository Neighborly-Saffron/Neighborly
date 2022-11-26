import React from 'react'
import axios from 'axios'
import AdminGroupModal from './AdminGroupModal.jsx'

const { useState, useEffect } = React;

function AdminRow({ group, getAdminGroups }) {
  const [toggleModal, setToggleModal] = useState(false)
  console.log("ADMIN ROW GROUP INFO", group)
  const switchModal = () => {
    setToggleModal(!toggleModal)
    getAdminGroups()
  }

  return (
    <>
    <tr>
      <th onClick={()=>{
         if (group.requests) {
          setToggleModal(!toggleModal)
        }
      }}><img
        src={group.groupPic}
        className="h-full w-full max-w-full object-cover rounded-lg"
      /></th>
      <th onClick={()=>{
        if (group.requests) {
          setToggleModal(!toggleModal)
        }
        }}>{group.groupName}</th>
      <th>{group.requests}</th>
    </tr>
    {toggleModal ? <AdminGroupModal switchModal={switchModal} groupId={group.groupid}/> : null }
    </>
  )
}

export default AdminRow;