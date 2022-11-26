import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
const { useState, useEffect } = React;
function Marker (props) {
  return (
    <>

      <FontAwesomeIcon className='top-0 left-0 -translate-y-full -translate-x-1/2' transform='grow-10' icon={faMapPin} color='red'></FontAwesomeIcon>
        <h2 className='absolute top-0 left-0 font-bold -translate-y-full translate-x-1 bg-white bg-opacity-50'>{props.name}</h2>
    </>
  )
}

export default Marker;