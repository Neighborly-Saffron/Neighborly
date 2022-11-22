import React from 'react';
import Feed from '../Feed/Feed.jsx';
import GroupAdmin from './GroupAdmin.jsx';
import Map from './Map.jsx';
import UserGroupList from './UserGroupList.jsx';

const { useState, useEffect } = React;

function Home ({ userId }) {
  console.log("HOME USER ID", userId)
  let [eventList, setEventList] = useState({events:[{name: 'event1', lat:40.65, lng:-73.98}, {name: 'event2', lat:40.65, lng:-74.4}]})
  let [mapStart, setMapStart] = useState({latlng:[40.757901544177926, -73.98546651170592]})
  return (<div className="border-2 border-yellow-800 m-5 p-1">
    <h2>
      HOME
    </h2>
    <UserGroupList />
    <Map mapStart={mapStart}eventList={eventList}/>
    <GroupAdmin />
    <Feed userId={userId} path={'home'}/>
  </div>)
}

export default Home;