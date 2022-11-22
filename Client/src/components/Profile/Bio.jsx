import React from 'react';
import axios from 'axios';
const { useState, useEffect } = React;

function Bio () {

  // const [userID, setUserID] = useState(4)
  // const [bio, setBio] = useState('')

  // useEffect(() => {
  //   axios.get('/profile/bio')
  //   .then(res => {
  //     console.log(res.data);
  //     setBio(res.data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // },[])
  const [userId, setUserId] = useState('5');
  const [userProfile, setUserProfile] = useState({})
  console.log('pls print this line')


  const getProfile = () => {
    axios.get('http://localhost:3001/profile/bio?userId=5' )
    .then(res => {
      console.log('client success receiving data from db');
      console.log('userProfile.pictureurl: ', res.data.pictureURL)
      setUserProfile(res.data)
    })
    .catch(err => {
      console.log('client failed to receive data from db', err);
    })
  }

useEffect(()=>{
  getProfile()
}, [])



  return (<div>
    <h3 className="italic">
      Bio
    </h3>
    <div>{userProfile.name}</div>
    <div>{userProfile.bio}</div>
    <img className='h-20 m-1' src={userProfile.pictureURL}></img>
  </div>)
}

export default Bio;