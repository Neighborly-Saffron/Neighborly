
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignupButton = () => {
  const { loginWithPopup, user, user_metadata } = useAuth0();
  console.log(user)
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