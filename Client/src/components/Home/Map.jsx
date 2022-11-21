import React from 'react'
import GoogleMap from 'google-map-react'
import Marker from './Marker.jsx'
const { useState, useEffect } = React;

function Map () {

  let [mapLng, setMapLng] = useState(-73.98546651170592)
  let [mapLat, setMapLat] = useState(40.757901544177926)
  let events = [{name: 'event1', lat:40.65, lng:-73.98}, {name: 'event2', lat:40.65, lng:-74.4}]
  return (
  <div className="map" style={{width:'30vw', height:'30vh'}}>
      <GoogleMap
        apiKey={[process.env.googleAPI]}
        center= {[mapLat, mapLng]}
        zoom= {9}>
          {events.map((event)=> {
            return <Marker name={event.name} lat={event.lat} lng={event.lng}></Marker>

          })}
      </GoogleMap>
  </div>
  )
}

export default Map;