import React from 'react';
import axios from 'axios'
import AdminGroups from './AdminGroups.jsx'
import AddGroupModal from './AddGroupModal.jsx'

const { useState, useEffect } = React;

function GroupAdmin ({ userId }) {
  const [toggleModal, setToggleModal] = useState(false)

  const switchModal = () => {
    setToggleModal(!toggleModal)
  }

  return (
  <div className="flex flex-col items-center gap-5">
    <h3 className="italic">
      GroupAdmin
    </h3>
    <AdminGroups userId={userId}></AdminGroups>
    <button className="bg-darkerblue hover:bg-lighterblue border-2 hover:border-2 hover:border-black text-white font-bold py-2 px-4 rounded-full h-10" onClick={() => {setToggleModal(!toggleModal)}}>Add A Group</button>
    {toggleModal ? <AddGroupModal switchModal={switchModal} userId={userId}/> : null }
  </div>
  )
}

export default GroupAdmin;