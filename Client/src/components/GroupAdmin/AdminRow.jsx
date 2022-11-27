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
      }}><div className='relative'>
        <img
        src={group.groupPic}
        className="h-20 w-25 rounded-full"></img>
       <span className="top-0 left-16 absolute  w-3.5 h-3.5 bg-lightergreen border-2 border-white dark:border-gray-800 rounded-full"></span>

        </div>
      {/* <span class="flex h-3 w-3 pointer-events-none"> */}
      {/* <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-lightergreen-400 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-3 w-3 bg-lightergreen-500"></span>
    </span></td> */}
    </td>
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