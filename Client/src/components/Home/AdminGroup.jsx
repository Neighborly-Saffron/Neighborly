import React from 'react';
import axios from 'axios'
const { useState, useEffect } = React;
import RequestList from '../Modals/RequestList.jsx'


const AdminGroup = ({group}) => {
  // console.log('group.groupPic:', group.groupPic)
  const [showModal, setShowModal] = useState(false)
  const [notificationCount, setNotificationCount] = useState(0)
  const [requestedUsers, setRequestedUsers] = useState([])

  console.log('group:', group)

  const handleNotificationClick = (e) =>{
    setShowModal(!showModal)
  }

  const getRequestedGroups = () => {

    return axios.get('/requestedGroups')
      .then((res)=>{
        console.log('res.data in getRequestedGroups', res.data)
        res.data.forEach(requestObj => {
          // console.log('requestObj', requestObj)
           setRequestedUsers([...requestedUsers,requestObj])
          if (requestObj.groupName === group.groupName) {
            // console.log('requestObj.groupName:', requestObj.groupName)
            // console.log('group.groupName:', group.groupName)
            setNotificationCount(notificationCount+1)
          }
        })
      })
      .catch(err=>{
        console.log('err in getRequestedGroups:', err)
      })
  }

  //to make this real time, i need to set a state in App
  //when the page first loads, get notification counts
  useEffect(()=>{
    getRequestedGroups()
  },[])



  return (
    <>

{showModal&&(requestedUsers.length !==0)&&<RequestList group={group} requestedUsers={requestedUsers} handleNotificationClick={handleNotificationClick}></RequestList>}

<div className="flex justify-center">
  <div className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
    <div className="flex items-center gap-3 px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">


<div className="my-6 inline-flex relative w-fit">
  {notificationCount > 0 ? <div className="absolute inline-block top-0 right-0 bottom-auto left-auto translate-x-2/4 -translate-y-1/2
   rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 py-1 px-2.5 text-xs leading-none text-center whitespace-nowrap
    align-baseline font-bold bg-lightergreen text- rounded-full z-10 border-solid"
    onClick={handleNotificationClick}>{notificationCount}</div>: null}
  <div className="w-24 h-24">
    <img src={group.groupPic} className="h-full w-full max-w-full object-cover rounded-lg"/>
  </div>
</div>
    <div>
      {group.groupName}
    </div>
    </div>

  </div>
</div>

</>
  )
}

export default AdminGroup

