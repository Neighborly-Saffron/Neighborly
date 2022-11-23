import React from 'react';
import AddGroup from '../AddGroup/AddGroup.jsx';

const AddGroupModal = ({ switchModal }) => {

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

      <div onClick={()=>{switchModal()}} className="fixed z-0 inset-0 bg-black bg-opacity-30 transition-opacity"></div>

      <div className="fixed inset-0 z-40 overflow-y-auto h-fit w-fit m-auto">
        <div className="flex min-h-fit items-end justify-center p-4 z-50 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg z-50">
            <div className="bg-white z-50 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <AddGroup userId={userId} switchModal={switchModal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddGroupModal;