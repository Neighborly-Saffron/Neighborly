import React from 'react';
const { useState, useEffect } = React;
function Marker (props) {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6 top-0 left-0 -translate-y-full -translate-x-1/2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
      <h2 className='absolute top-0 left-0 font-bold -translate-y-full translate-x-1 bg-white bg-opacity-50'>{props.name}</h2>
    </>
  )
}

export default Marker;