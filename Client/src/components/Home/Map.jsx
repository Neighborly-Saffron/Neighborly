import React from 'react'
import GoogleMap from 'google-map-react'
import Marker from './Marker.jsx'
const { useState, useEffect } = React;

function Map () {

  let [mapLng, setMapLng] = useState(-73.98546651170592)
  let [mapLat, setMapLat] = useState(40.757901544177926)
  let events = [{name: 'event1', lat:40.65, lng:-73.98}, {name: 'event2', lat:40.65, lng:-74}]
  return (
  <div className="map" style={{width:'30vw', height:'30vh'}}>
      <GoogleMap
        apiKey={'AIzaSyCBpmexDTMCXHUkqpE81DRHdfUbI4I31BA'}
<<<<<<< Updated upstream
        center= {[40.757901544177926, -73.98546651170592]}
=======
        center= {[mapLat, mapLng]}
>>>>>>> Stashed changes
        zoom= {9}>
          {events.map((event)=> {
            return <Marker lat={event.lat} lng={event.lng}>{event.name}</Marker>

          })}
      </GoogleMap>
  </div>
  )
}

export default Map;