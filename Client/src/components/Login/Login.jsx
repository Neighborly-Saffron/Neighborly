//gabes playground
import React from 'react';
import Signup from './SignUpModal.jsx'
import LoginButton from './LoginButton.jsx'
import SignUpButton from './SignUpButton.jsx'
import LogoutButton from './LogoutButton.jsx'

const { useState, useEffect } = React;

function Login ({onAuth}) {
  return (
    <div className="h-full w-full flex justify-center align-middle">
      <div className="border-2 border-cyan-800 p-1">
        <h2>LOGIN</h2>
        <LoginButton onAuth={onAuth}/>
        <SignUpButton onAuth={onAuth}/>
      </div>
    </div>
  )
}

export default Login;