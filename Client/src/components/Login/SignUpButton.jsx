
import React, {useState, useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignupButton = ({ onAuth }) => {
  const { loginWithPopup, user, isAuthenticated } = useAuth0();

  return (
    <button
    className="border-2 hover:bg-white hover:text-crazygreen
    border-white bg-crazygreen hover:border-2 hover:border-crazygreen text-white hover:ease-in  duration-300 text-lg
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