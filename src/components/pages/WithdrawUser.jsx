import React from 'react';
import { useLocation } from 'react-router-dom';
import { WithdrawUserForm } from '..';

function WithdrawUser() {
  const location = useLocation();

  return <WithdrawUserForm beforeEditUserInfo={location.state}/>;
}

export default WithdrawUser;
