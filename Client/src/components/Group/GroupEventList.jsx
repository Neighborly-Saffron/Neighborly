import React from 'react';
import axios from 'axios';
import EventItem from './EventItem.jsx';

const { useState, useEffect } = React;

function GroupEventList({ userId, eventList }) {


  return (
    <div className="w-full max-h-screen/2 overflow-hidden overflow-y-scroll">
      {eventList.events.map((event, index) => {
        return <EventItem event={event.json_build_object} key={index} userId={userId} />
      })}
    </div>
  )
}

export default GroupEventList;