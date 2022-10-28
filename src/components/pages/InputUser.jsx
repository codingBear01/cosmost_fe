/* libraries */
import React from 'react';
import { useLocation } from 'react-router-dom';
/* components */
import { InputUserForm } from '..';

function InputUser() {
  const location = useLocation();
  return <InputUserForm state={location.state} />;
}

export default InputUser;
