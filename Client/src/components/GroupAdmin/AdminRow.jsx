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
      }}>
        <div className='relative'>
        <img
      src={group.groupPic}
      className="h-20 w-25 max-w-full object-cover rounded-full"
        />
        {group.requests? <span class="top-0 left-16 absolute  w-3.5 h-3.5 bg-wizardred border-2 border-white dark:border-gray-800 rounded-full"></span>: null}
        </div>
    </th>
    </>:<>
    <th className="cursor-default px-4 py-2" onClick={()=>{
      if (group.requests) {
       setToggleModal(!toggleModal)
     }
   }}><img
     src={group.groupPic}
     className=" h-20 w-20 max-w-full object-cover rounded"
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