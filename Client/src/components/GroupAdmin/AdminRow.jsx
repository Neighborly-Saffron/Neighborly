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
      {group.requests ? <>
      <th className="cursor-default hover:cursor-pointer" onClick={()=>{
         if (group.requests) {
          setToggleModal(!toggleModal)
        }
      }}><img
        src={group.groupPic}
        className="h-full w-full max-w-full object-cover rounded-lg"
      /></th>
      </>:<>
      <th className="cursor-default" onClick={()=>{
        if (group.requests) {
         setToggleModal(!toggleModal)
       }
     }}><img
       src={group.groupPic}
       className="h-full w-full max-w-full object-cover rounded-lg"
     /></th>
      </>}
      {group.requests ? <>
      <th className="cursor-default hover:text-darkerblue hover:cursor-pointer" onClick={()=>{
        if (group.requests) {
          setToggleModal(!toggleModal)
        }
        }}>{group.groupName}</th>
      <th className="cursor-default">{group.requests}</th>
      </>:<>
      <th className="cursor-default" onClick={()=>{
        if (group.requests) {
          setToggleModal(!toggleModal)
        }
        }}>{group.groupName}</th>
      <th className="cursor-default">{group.requests}</th>
      </>}
    </tr>
    {toggleModal ? <AdminGroupModal switchModal={switchModal} groupId={group.groupid}/> : null }
    </>
  )
}

export default AdminRow;