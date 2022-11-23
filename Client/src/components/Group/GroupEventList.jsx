import React from 'react';
import axios from 'axios';
import EventItem from './EventItem.jsx'

const { useState, useEffect } = React;

function GroupEventList({ userId, eventList }) {

  return (<div>
    <h3 className="italic">
      Group Event List
    </h3>
    <div className="max-h-screen/2 border-2 border-black rounded overflow-hidden overflow-y-scroll">
      {eventList.events.map((event, index) => {
        return <EventItem event={event.json_build_object} key={index} userId={userId} />
      })}
    </div>
  </div>)
}

export default GroupEventList;