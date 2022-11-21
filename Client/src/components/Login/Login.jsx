//gabes playground
import React from 'react';
import Signup from './SignUpModal.jsx'
import LoginButton from './LoginButton.jsx'
import SignUpButton from './SignUpButton.jsx'
import LogoutButton from './LogoutButton.jsx'

const { useState, useEffect } = React;

function Login () {
  return (
    <div className="border-2 border-cyan-800 m-5 p-1">
      <h2>LOGIN</h2>
      <LoginButton />
      <SignUpButton />
      <LogoutButton />
      <Signup />
    </div>
  )
}

export default Login;