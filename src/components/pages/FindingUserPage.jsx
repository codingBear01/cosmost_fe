/* libraries */
import React from 'react';
import { useLocation } from 'react-router-dom';
/* components */
import { DisplayFindedIdForm, InputPasswordForm } from '..';

function FindingUserPage() {
  const pathname = useLocation().pathname;
  const isIdPage = pathname.includes('id');

  return <>{isIdPage ? <DisplayFindedIdForm /> : <InputPasswordForm />}</>;
}

export default FindingUserPage;
