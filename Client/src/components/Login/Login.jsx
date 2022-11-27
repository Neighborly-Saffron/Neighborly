//gabes playground
import React from 'react';
import Signup from './SignUpModal.jsx'
import LoginButton from './LoginButton.jsx'
import SignUpButton from './SignUpButton.jsx'
import LogoutButton from './LogoutButton.jsx'


const { useState, useEffect } = React;

function Login ({onAuth}) {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-logo">
      <div className="flex flex-col justify-center items-center h-1/2 w-1/2 bg-lightergreen text-white rounded-md">
        <h1 className="align-middle italic text-6xl mb-2">
				  Neighborly
				</h1>
        {/* <img src={window.location.origin + "/logo.png"} className="object-cover w-80 h-80 mb-2" /> */}
        <h1 className="align-middle italic text-1xl mb-2">
				  Come and join the neighborhood
				</h1>
        <div className="flex gap-4 italic text-1xl mb-2 items-center justify-evenly">
          <LoginButton onAuth={onAuth}/>
          <span>or</span>
          <SignUpButton onAuth={onAuth}/>
        </div>
      </div>
    </div>
  )
}

export default Login;