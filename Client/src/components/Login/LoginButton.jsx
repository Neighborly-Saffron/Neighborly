import React, {useState, useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = ({ onAuth }) => {
  const { loginWithPopup, user, isAuthenticated } = useAuth0();



  return (
    <button
    className="border-2 hover:bg-white hover:text-crazygreen
    border-white bg-crazygreen hover:border-2 hover:border-crazygreen text-white hover:ease-in  duration-300 text-lg
    mx-auto rounded m-5 p-2" type="button"
    onClick={() => loginWithPopup()}
    >
      Log In
    </button>
  );
};

export default LoginButton;