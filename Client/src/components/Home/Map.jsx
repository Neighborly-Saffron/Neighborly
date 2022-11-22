import React from 'react'
import GoogleMap from 'google-map-react'
import Marker from './Marker.jsx'
const { useState, useEffect } = React;

function Map (props) {

  let [mapLng, setMapLng] = useState()
  let [mapLat, setMapLat] = useState()

  return (
  <div className="map" style={{width:'30vw', height:'30vh'}}>
      <GoogleMap
        bootstrapURLKeys={{key:process.env.googleAPI}}
        center= {props.mapStart.latlng}
        zoom= {9}>
          {props.eventList.events.map((event, i)=> {
            return <Marker key = {i} name={event.name} lat={event.lat} lng={event.lng}></Marker>
          })}
      </GoogleMap>
  </div>
  )
}

export default Map;