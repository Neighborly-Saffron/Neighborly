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
        className="block border-2 bg-darkerblue hover:bg-lighterblue
        hover:border-black hover:border-2 text-white uppercase text-lg
        mx-auto p-4 rounded-full" type="button">
        Create Event
      </button>
      {showModal && <EventModal toggleModal={toggleModal} userId={userId} groupId={groupId} getEvents={getEvents}/>}
    </>
  )
}

export default CreateEventModal;