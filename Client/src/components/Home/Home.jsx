import React from 'react';
import Feed from '../Feed/Feed.jsx';
import Map from './Map.jsx';
import UserGroupList from './UserGroupList.jsx';
import Calendar from './Calendar.jsx';
import axios from 'axios';
import AdminPanel from '../GroupAdmin/AdminPanel.jsx';

const { useState, useEffect } = React;

function Home({ userId, userGroups, setUserGroups }) {
	const [eventList, setEvents] = useState({ events: [] });
	const [mapStart, setMapStart] = useState({ latlng: [] });
	const getEvents = () => {
		axios
			.get(`/event/map/${userId}/-1`)
			.then((res) => {
				setEvents({ events: res.data });
			})
			.catch((err) => console.log('error getting group event data'));
	};
	useEffect(() => {
		if (eventList.events.length) {
			setMapStart({
				latlng: [
					eventList.events[0].json_build_object.lat,
					eventList.events[0].json_build_object.lng,
				],
			});
		}
	}, [eventList]);

	useEffect(getEvents, []);

	return (
		<div className="rounded-lg m-5 mb-0 p-10 grid grid-cols-4 gap-5">
			<div className="col-span-1 h-full">
				<UserGroupList userId={userId} userGroups={userGroups} />
			</div>
			<div className="col-start-2 col-span-2">
				<Feed userId={userId} path={'home'} />
			</div>
			<div className="col-start-4 col-span-1 flex flex-col items-center gap-3">
				<Map mapStart={mapStart} eventList={eventList} />
				{/* <div className="flex justify-between"> */}
					<Calendar eventList={eventList} userId={userId} />
				{/* </div>s */}
				<AdminPanel userId={userId}></AdminPanel>
			</div>
		</div>
	);
}

export default Home;