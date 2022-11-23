import React from 'react';
import Feed from '../Feed/Feed.jsx';
import GroupAdmin from './GroupAdmin.jsx';
import Map from './Map.jsx';
import UserGroupList from './UserGroupList.jsx';
import Calendar from './Calendar.jsx';
import axios from 'axios';

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
		<div className="border-2 m-5 grid grid-cols-4  p-5 ">
			<div className="col-span-1 border-r-2 p-2">
				<UserGroupList userId={userId} userGroups={userGroups} />
			</div>
			<div className="col-start-2  col-span-2 ">
				<Feed userId={userId} path={'home'} />
			</div>
			<div className="col-start-4 flex flex-col gap-5 items-center">
				<Map mapStart={mapStart} eventList={eventList} />
				<Calendar />
				<GroupAdmin userId={userId}/>
			</div>
		</div>
	);
}

export default Home;

// import React from 'react';
// import Feed from '../Feed/Feed.jsx';
// import GroupAdmin from './GroupAdmin.jsx';
// import Map from './Map.jsx';
// import UserGroupList from './UserGroupList.jsx';
// import Calendar from './Calendar.jsx';

// const { useState, useEffect } = React;

// function Home ({ userId, userGroups }) {

//   console.log('user groups in home: ', userGroups)
//   console.log("HOME USER ID", userId)
//   let [eventList, setEventList] = useState({events:[{json_build_object:{name: 'event1', lat:40.65, lng:-73.98}}, {json_build_object:{name: 'event2', lat:40.65, lng:-74.4}}]})
//   let [mapStart, setMapStart] = useState({latlng:[40.757901544177926, -73.98546651170592]})
//   return (<div className="border-2 border-yellow-800 m-5 p-1">
//     <h2>
//       HOME
//     </h2>
//     <UserGroupList userId={userId} userGroups={userGroups} />
//     <Calendar/>
//     <Map mapStart={mapStart}eventList={eventList}/>
//     <GroupAdmin />
//     <Feed userId={userId} path={'home'}/>
//   </div>)
// }

// export default Home;
