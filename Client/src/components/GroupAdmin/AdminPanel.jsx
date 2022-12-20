import React from 'react'
import axios from 'axios'
import AdminRow from './AdminRow.jsx'
import AddGroupModal from './AddGroupModal.jsx'

const { useState, useEffect } = React;

function AdminPanel({ userId }) {
  const [adminGroups, setAdminGroups] = useState([])
  const [toggleModal, setToggleModal] = useState(false)

  const switchModal = () => {
    setToggleModal(!toggleModal)
  }

  const getAdminGroups = () => {
    axios.get(`/admin/groupAdmin/?userId=${userId}`)
      .then((data) => {
        setAdminGroups(data.data[0].admingroup)
      })
      .catch((err) => {
        console.log('error getting groups', err)
      })
  }

  useEffect(getAdminGroups, [])

  return (
    <>
      <table className='w-full p-3 table-layout: auto bg-white rounded'>
        <thead>
        <tr>
          {/* <th className="px-4 py-2"></th>
          <th className="px-4 py-2">Group</th>
          <th className="px-4 py-2">Requests</th> */}
        </tr>
        </thead>
        <tbody>
        {adminGroups ? adminGroups.map((group, index) => {
          return <AdminRow key={index} group={group} getAdminGroups={getAdminGroups} />
        }) : null}
        </tbody>
      </table>
      <button className="bg-darkerblue hover:bg-lighterblue border-2 hover:border-2 hover:border-darkerblue hover:text-darkerblue text-white font-bold py-2 px-2 pt-1.5 rounded h-10 text-align:center" onClick={() => {setToggleModal(!toggleModal)}}>Add A Group</button>
      {toggleModal ? <AddGroupModal switchModal={switchModal} userId={userId}/> : null }
    </>
  )
}

export default AdminPanel;