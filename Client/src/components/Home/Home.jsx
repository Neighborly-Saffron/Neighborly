import React from 'react';
import Feed from '../Feed/Feed.jsx';
import GroupAdmin from './GroupAdmin.jsx';
import Map from './Map.jsx';
import UserGroupList from './UserGroupList.jsx';
import Calendar from './Calendar.jsx';

const { useState, useEffect } = React;

function Home({ userId, userGroups }) {

  console.log('user groups in home: ', userGroups)
  console.log("HOME USER ID", userId)
  let [eventList, setEventList] = useState({ events: [{ json_build_object: { name: 'event1', lat: 40.65, lng: -73.98 } }, { json_build_object: { name: 'event2', lat: 40.65, lng: -74.4 } }] })
  let [mapStart, setMapStart] = useState({ latlng: [40.757901544177926, -73.98546651170592] })
  return (<div className="border-2 border-yellow-800 m-5 p-1">
    <h2>
      HOME
    </h2>
    <UserGroupList userId={userId} userGroups={userGroups} />
    <Calendar />
    <Map mapStart={mapStart} eventList={eventList} />
    <GroupAdmin userId={userId}/>
    <Feed userId={userId} path={'home'} />
  </div>)
}

export default Home;