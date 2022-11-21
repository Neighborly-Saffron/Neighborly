import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
const { useState, useEffect } = React;
function Marker () {
  return (

    <FontAwesomeIcon icon={faMapPin}></FontAwesomeIcon>
  )
}

export default Marker;