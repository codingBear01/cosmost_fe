/* libraries */
import React from 'react';
import { useLocation } from 'react-router-dom';
/* components */
import { DisplayFindedIdForm, InputPasswordForm } from '..';

function FindingUserPage() {
  const location = useLocation();
  const pathname = location.pathname;
  const isIdPage = pathname.includes('id');

  return <>{isIdPage ? <DisplayFindedIdForm responseId={location.state}/> : <InputPasswordForm responseIdKey={location.state}/>}</>;
}

export default FindingUserPage;
