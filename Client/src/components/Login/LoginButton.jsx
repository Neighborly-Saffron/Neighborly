import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithPopup, user, user_metadata } = useAuth0();

  return (
    <button
      className="border-2 border-cyan-800 m-5 p-1"
      onClick={() => loginWithPopup()}
    >
      Log In
    </button>
  );
};

export default LoginButton;