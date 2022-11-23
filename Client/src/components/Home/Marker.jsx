import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
const { useState, useEffect } = React;
function Marker (props) {
  return (
    <>

      <FontAwesomeIcon style={{top:0, left:0, transform:'translate(-50%,-100%)', color:'red'}}icon={faMapPin}></FontAwesomeIcon>
      <h2 style={{top:0, left:0, transform:'translate(-200%,-150%)'}}>{props.name}</h2>
    </>
  )
}

export default Marker;