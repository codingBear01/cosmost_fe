import React from 'react';
/* components */
import { InputPasswordForm } from '..';
import { useLocation } from "react-router-dom";

function InputPassword() {
  const location = useLocation();

  return <InputPasswordForm beforeEditUserInfo={location.state}/>;
}

export default InputPassword;
