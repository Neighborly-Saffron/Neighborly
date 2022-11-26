import React from 'react';
import Request from './Request.jsx'
import {useEffect, useState} from 'react'


const RequestList = ({group, requestedUsers, handleNotificationClick, setNotificationCount}) => {
  console.log('it got in requestedlist')
  const [displayRequests, setDisplayRequests] = useState([])

  console.log('requestedUsers:', requestedUsers)
  const filteredRequests = []
  const filter = () => {
    requestedUsers.forEach(requestObj=>{
      if (requestObj.groupName === group.groupName){

        filteredRequests.push(requestObj)
      }
      console.log('filteredRequests', filteredRequests)

    })
    setDisplayRequests(filteredRequests)
  }

  useEffect(()=>{
    filter()
  }, [])

  return (
    <>

<div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">


<div className="fixed inset-0 z-40 overflow-y-auto h-fit w-fit m-auto">
  <div className="flex min-h-fit items-end justify-center p-4 z-50 text-center sm:items-center sm:p-0">
    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg z-50">
      <div className="bg-white z-50 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div className="flex z-50 items-center h-fit w-96">
      <div className="w-full border-2 border-black bg-lighterblue rounded shadow-lg p-8 m-1">
        {/* <h1 className="block w-full text-center text-2xl mx-auto p-4">Requests</h1> */}
        {/* {requestedUsers.map((requestedUser, index)=>{ */}
          {displayRequests.map((requestedUser, index)=>{
          return <Request key={index} requestedUser={requestedUser} displayRequests={displayRequests} setgroup={group} handleNotificationClick={handleNotificationClick}></Request>
          })
          }

      </div>
    </div>
      </div>
    </div>
  </div>
</div>
</div>

</>
  )
}

export default RequestList;

