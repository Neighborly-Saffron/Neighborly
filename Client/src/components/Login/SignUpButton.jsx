
import React, {useState, useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignupButton = ({ onAuth }) => {
  const { loginWithPopup, user, isAuthenticated } = useAuth0();

  return (
    <button
    className="border-2 bg-lightergreen hover:bg-white
    hover:border-lightergreen hover:border-2 hover:text-lightergreen hover:ease-in duration-300 text-white text-lg
    mx-auto rounded m-5 p-2" type="button"
      onClick={() =>
        loginWithPopup({
          screen_hint: 'signup',
          action: 'signup'
        })
      }
    >
      Sign Up
    </button>
  );
};

export default SignupButton;