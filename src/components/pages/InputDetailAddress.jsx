import React from 'react';
import { InputDetailAddressForm } from '..';
import { useLocation } from 'react-router-dom';

function InputDetailAddress() {
  const location = useLocation();
  return <InputDetailAddressForm state={location.state} />;
}

export default InputDetailAddress;
