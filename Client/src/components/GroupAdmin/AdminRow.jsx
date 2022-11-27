import React from 'react'
import axios from 'axios'
import AdminGroupModal from './AdminGroupModal.jsx'

const { useState, useEffect } = React;

function AdminRow({ group, getAdminGroups }) {
  const [toggleModal, setToggleModal] = useState(false)

  const switchModal = () => {
    setToggleModal(!toggleModal)
    getAdminGroups()
  }

  return (
    <>
    <tr>
      <td className ="px-4 py-2" onClick={()=>{
         if (group.requests) {
          setToggleModal(!toggleModal)
        }
      }}><img
        src={group.groupPic}
        className="h-20 w-25"
      /></td>
      <td className="px-4 py-2" onClick={()=>{
        if (group.requests) {
          setToggleModal(!toggleModal)
        }
        }}>{group.groupName}</td>
      <td className="px-4 py-2">{group.requests}</td>
    </tr>
    {toggleModal ? <AdminGroupModal switchModal={switchModal} groupId={group.groupid}/> : null }
    </>
  )
}

export default AdminRow;