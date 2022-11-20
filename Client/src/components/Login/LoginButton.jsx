import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="border-2 border-cyan-800 m-5 p-1"
      onClick={() => loginWithRedirect().then((data) => console.log('logged in!'))}
    >
      Log In
    </button>
  );
};

export default LoginButton;