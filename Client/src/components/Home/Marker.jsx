import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
const { useState, useEffect } = React;
function Marker (props) {
  return (
    <>
      <h2>{props.name}</h2>
      <FontAwesomeIcon style={{color:'red'}}icon={faMapPin}></FontAwesomeIcon>
    </>
  )
}

export default Marker;