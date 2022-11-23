import React from 'react'
import GoogleMap from 'google-map-react'
import Marker from './Marker.jsx'
import Calendar from './Calendar.jsx'
const { useState, useEffect } = React;

function Map (props) {

  let [mapLng, setMapLng] = useState()
  let [mapLat, setMapLat] = useState()

  let maplatlng = props.mapStart.latlng.length ? props.mapStart.latlng : [40.7487658,-73.9857248];


  return (
  <div className="w-full h-96">
    {
      maplatlng.length ?
      <GoogleMap
        bootstrapURLKeys={{key:process.env.googleAPI}}
        center= {maplatlng}
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