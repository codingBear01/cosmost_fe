/* libraries */
import React from 'react';
import { useLocation } from 'react-router-dom';
/* components */
import { InputAddressForm } from '..';

function InputAddress() {
  const location = useLocation();
  return <InputAddressForm state={location.state} />;
}

export default InputAddress;
