
import React, {useState, useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignupButton = ({ onAuth }) => {
  const { loginWithPopup, user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if(isAuthenticated) {
      onAuth(user)
    }
  }, [isAuthenticated])

  return (
    <button
      className="border-2 border-cyan-800 m-5 p-1"
      onClick={() =>
        loginWithPopup({
          screen_hint: 'signup',
        })
      }
    >
      Sign Up
    </button>
  );
};

export default SignupButton;