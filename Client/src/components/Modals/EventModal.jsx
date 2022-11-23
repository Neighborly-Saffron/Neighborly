import React, { useState, useEffect } from 'react';
import AddEvent from '../AddEvent/AddEvent.jsx';

const EventModal = ({toggleModal, userId}) => {

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

      <div onClick={()=>{toggleModal()}} className="fixed z-0 inset-0 bg-black bg-opacity-30 transition-opacity"></div>

      <div className="fixed inset-0 z-40 overflow-y-auto h-4/5 w-fit m-auto">
        <div className="flex min-h-fit items-end justify-center p-0 z-50 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all  sm:w-full sm:max-w-lg z-50">
            <div className="bg-white z-50 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <AddEvent toggleModal={toggleModal} userId={userId}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventModal;