import React from 'react';
import axios from 'axios'
const Request = ({group, requestedUser, handleNotificationClick, requestedUsers, userData}) => {

  const newUserGroup = {
    userId: requestedUser.requestedUserId,
    groupId: requestedUser.requestedGroupId
  }
  const handleApprove = (e) => {
    console.log('it got in handleApprove')

    axios.post('/groupApproved', newUserGroup)
     .then((result)=>{
      console.log('client side: succeeded to post to db')
     //remove modal
     handleLastRequest()
     return handleDeleteRequest()
     })
     .catch((err)=>{
      console.log('client side: failed to post to db', err)
     })
  }

  const handleLastRequest = () =>{
    if (requestedUsers.length === 1) {
    handleNotificationClick()
    }
  }

  const handleDeleteRequest = () => {
    return axios.delete('/groupApproved',   { params: newUserGroup } )
      .then(()=>{
        console.log('client side: db successfully ')
      })
  }

  return (
    <div>

            <div className="text-lg font-medium leading-6 text-gray-900" id="modal-title">{requestedUser.userName} has requested to join</div>
            <div className="mt-2">
            </div>
            <button type="button" className="inline-flex w-full justify-center rounded-md border border-transparent bg-lightergreen px-4 py-2 text-base
            font-medium text-white shadow-sm hover:bg-darkerblue focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto
             sm:text-sm" onClick={handleApprove}>Approve</button>
            <button type="button" className="inline-flex w-full justify-center rounded-md border border-transparent bg-darkergreen px-4 py-2 text-base
            font-medium text-white shadow-sm hover:bg-darkerblue focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto
             sm:text-sm" onClick={handleLastRequest}>Decline</button>
    {/* //no need to do anything if declined */}
</div>
  )
}

export default Request;