import React from 'react';
import EventModal from '../Modals/EventModal.jsx'

const { useState, useEffect } = React;

function CreateEventModal ({ userId, groupId }) {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <>
      <h3 className="italic">
        Create Event modal
      </h3>
      <button
        onClick={() => toggleModal()}
        class="block border-2 bg-darkerblue hover:bg-lighterblue
        hover:border-black hover:border-2 text-white uppercase text-lg
        mx-auto p-4 rounded-full" type="button">
        Create Event
      </button>
      {showModal && <EventModal toggleModal={toggleModal} userId={userId} groupId={groupId}/>}
    </>
  )
}

export default CreateEventModal;