import React from 'react';
import EventModal from '../Modals/EventModal.jsx'

const { useState, useEffect } = React;

function CreateEventModal ({ userId, groupId, getEvents }) {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <>
      <button
        onClick={() => toggleModal()}
        className="block border-2 bg-darkerblue hover:bg-white
        hover:border-darkerblue hover:border-2 text-white hover:text-darkerblue hover:ease-in duration-300 text-lg
        mx-auto px-4 py-2 rounded" type="button">
        Create Event
      </button>
      {showModal && <EventModal toggleModal={toggleModal} userId={userId} groupId={groupId} getEvents={getEvents}/>}
    </>
  )
}

export default CreateEventModal;