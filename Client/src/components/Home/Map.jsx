import React from 'react';
import GoogleMap from 'google-map-react'

const { useState, useEffect } = React;

function Map () {
  return (
  <div className="map" style={{width:'30vw', height:'30vh'}}>
      <GoogleMap
        apiKey={''}
        center= {[40.757901544177926, -73.98546651170592]}
        zoom= {9}>
      </GoogleMap>
  </div>
  )
}

export default Map;