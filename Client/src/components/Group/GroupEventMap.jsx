import React from 'react';
import Map from '../Home/Map.jsx';
import axios from 'axios';

const { useState, useEffect } = React;

function GroupEventMap (props) {
const [eventList, setEvents] = useState({events:[]})
const [mapStart, setMapStart] = useState({latlng:[]})
const getEvents = () => {
  axios.get(`/mapEvents/${props.userId}`)
    .then((res) => {
      setEvents({events:res.data});
      console.log('mapEvents', res.data);
    })
    .catch((err) => console.log('error getting group event data'))
}
useEffect(()=>{
  if(eventList.events.length) {
    setMapStart({latlng:[eventList.events[0].json_build_object.lat, eventList.events[0].json_build_object.lng]})
  }
},[eventList])

useEffect(()=>{
  console.log(mapStart);
},[mapStart])
useEffect(getEvents, [])
  return (
  <>
    <Map mapStart={mapStart}eventList={eventList}/>
  </>
  )
}

export default GroupEventMap;