import React from 'react';
import Feed from '../Feed/Feed.jsx';
import GroupAdmin from './GroupAdmin.jsx';
import Map from './Map.jsx';
import UserGroupList from './UserGroupList.jsx';
import Calendar from './Calendar.jsx';
import axios from 'axios';
import AdminPanel from '../GroupAdmin/AdminPanel.jsx'

const { useState, useEffect } = React;

function Home({ userId, userGroups }) {
	const [eventList, setEvents] = useState({events:[]})
  const [mapStart, setMapStart] = useState({latlng:[]})
  const getEvents = () => {
  axios.get(`/mapEvents/${userId}/-1`)
    .then((res) => {
      setEvents({events:res.data});
    })
    .catch((err) => console.log('error getting group event data'))
  }
  useEffect(()=>{
  if(eventList.events.length) {
    setMapStart({latlng:[eventList.events[0].json_build_object.lat, eventList.events[0].json_build_object.lng]})
  }
  },[eventList])

useEffect(getEvents, [])

	return (
		<div className="border-2 rounded-lg m-5 grid grid-cols-5  p-10 ">
			<div className="col-span-1  p-2">
				<UserGroupList userId={userId} userGroups={userGroups} />
			</div>
			<div className="col-start-2  col-span-2 ">
				<Feed userId={userId} path={'home'} />
			</div>
			<div className="col-start-4 col-span-2 flex flex-col gap-5 items-center">
				<Map mapStart={mapStart} eventList={eventList} />
				<div className="flex gap-2 justify-between">
					{/* <div className="w-fit border-2">Event List</div> */}
				<Calendar userId={userId} eventList={eventList}/>
				</div>
				<GroupAdmin userId={userId}/>
			</div>
			<AdminPanel userId={userId} ></AdminPanel>
		</div>
	);
}

export default Home;

