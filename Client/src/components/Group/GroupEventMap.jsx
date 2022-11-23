import React from 'react';
import Map from '../Home/Map.jsx';
import axios from 'axios';

const { useState, useEffect } = React;

function GroupEventMap (props) {
const [mapStart, setMapStart] = useState({latlng:[]})


useEffect(()=>{
  console.log(props)
  if(props.eventList.events.length) {
    setMapStart({latlng:[props.eventList.events[0].json_build_object.lat, props.eventList.events[0].json_build_object.lng]})
  }
},[props.eventList])

  return (
  <>
    <Map mapStart={mapStart}eventList={props.eventList}/>
  </>
  )
}

export default GroupEventMap;