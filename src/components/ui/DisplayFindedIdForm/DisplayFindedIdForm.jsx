/* libraries */
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
/* components */
import * as S from './styled';
import { UtilDiv, UtilTitle } from '../..';
/* CONSTANTS */
const PAGE_TITLES = {
  '/find/password': 'cosMoster의 비밀번호는?',
  '/find/id': 'cosMoster의 아이디는?',
};

function DisplayFindedIdForm() {
  const pathname = useLocation().pathname;
  const str = 'dasan8829';
  const diplayedStr = str.substring(0, Math.floor(str.length / 2));
  const notDisplayedStr = '*'.repeat(Math.floor(str.length / 2));

  return (
    <UtilDiv>
      <UtilTitle>{PAGE_TITLES[pathname]}</UtilTitle>
      <S.FindedUserBox>
        <span>{diplayedStr + notDisplayedStr}</span>
        <Link to="/login">로그인 페이지로</Link>
      </S.FindedUserBox>
    </UtilDiv>
  );
}

export default DisplayFindedIdForm;
