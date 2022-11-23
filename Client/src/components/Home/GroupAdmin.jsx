import React from 'react';
import axios from 'axios'
import AdminGroups from './AdminGroups.jsx'
import AddGroupModal from './AddGroupModal.jsx'

const { useState, useEffect } = React;

function GroupAdmin () {
  const [toggleModal, setToggleModal] = useState(false)

  const switchModal = ({ userId }) => {
    setToggleModal(!toggleModal)
  }

  return (
  <div>
    <h3 className="italic">
      GroupAdmin
    </h3>
    <AdminGroups></AdminGroups>
    <button className="bg-darkerblue hover:bg-lighterblue border-2 hover:border-2 hover:border-black text-white font-bold py-2 px-4 rounded-full h-10" onClick={() => {setToggleModal(!toggleModal)}}>Add A Group</button>
    {toggleModal ? <AddGroupModal switchModal={switchModal} userId={userId}/> : null }
  </div>
  )
}

export default GroupAdmin;