import React from 'react';

const { useState, useEffect } = React;

function Bio () {

  const [userID, setUserID] = useState(4)
  const [bio, setBio] = useState('')

  useEffect(() => {
    axios.get('/profile/bio')
    .then(res => {
      console.log(res.data);
      setBio(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  },[])




  return (<div>
    <h3 className="italic">
      Bio
    </h3>

  </div>)
}

export default Bio;