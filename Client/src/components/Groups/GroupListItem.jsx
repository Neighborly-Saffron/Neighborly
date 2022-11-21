import React from 'react';

const { useState, useEffect } = React;

function GroupListItem({group}) {
	return (
  <div className="w-2/3 bg-lighterblue flex">
    <img className='object-scale-down h-20 w-20 m-1' src={group.pictureurl} alt={group.name}></img>
    <p>{group.name} {group.admin} {group.description}</p>
  </div>
  );
}

export default GroupListItem;
