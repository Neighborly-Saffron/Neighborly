import React from 'react';
import axios from 'axios'
import AdminGroup from './AdminGroup.jsx'

const { useState, useEffect } = React;

function AdminGroups () {

  // console.log('it got in AdminGroups')
  const [userId, setUserId] = useState('5')
  const [groups, setGroups] = useState([])


  const getAllAdminGroups = () => {
    axios.get('http://localhost:3001/GroupAdmin/?userId=5' )
    .then(res => {
      // console.log('AdminGroups client success receiving data from db');
      console.log('res.data client received:', res.data)
      // console.log('userProfile.pictureurl: ', res.data.pictureURL)
      setGroups(res.data)
    })
    .catch(err => {
      console.log('client failed to receive data from db', err);
    })
  }

  useEffect(()=>{
    getAllAdminGroups()
  },[])

  return (
    <>
     {groups.map((group, index)=>{
       return <AdminGroup key={index} group={group}></AdminGroup>
      })}
    </>
    )
}

export default AdminGroups;