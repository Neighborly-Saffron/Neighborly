import React from 'react'
import GoogleMap from 'google-map-react'
import Marker from './Marker.jsx'
import Calendar from './Calendar.jsx'
const { useState, useEffect } = React;

function Map (props) {

  let [mapLng, setMapLng] = useState()
  let [mapLat, setMapLat] = useState()

  return (
  <div className="w-full h-96">
    {
      props.mapStart.latlng.length ?
      <GoogleMap
        bootstrapURLKeys={{key:process.env.googleAPI}}
        center= {props.mapStart.latlng}
        zoom= {9}>
          {props.eventList.events.map((event, i)=> {
            return <Marker key = {i} name={event.json_build_object.name} lat={event.json_build_object.lat} lng={event.json_build_object.lng}></Marker>
          })}
      </GoogleMap> : null
    }
  </div>
  )
}

export default Map;