import React from 'react';
import { useLocation } from 'react-router-dom';
import { SignUpForm } from '..';

function SignUp() {
  const location = useLocation();
  return <SignUpForm state={location.state} />;
}

export default SignUp;
