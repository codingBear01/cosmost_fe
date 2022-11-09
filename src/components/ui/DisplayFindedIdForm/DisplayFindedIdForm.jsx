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

function DisplayFindedIdForm({ responseId }) {
  const pathname = useLocation().pathname;

  return (
    <UtilDiv>
      <UtilTitle>{PAGE_TITLES[pathname]}</UtilTitle>
      <S.FindedUserBox>
        <span>{responseId.id}</span>
        <Link to="/login">로그인 페이지로</Link>
      </S.FindedUserBox>
    </UtilDiv>
  );
}

export default DisplayFindedIdForm;
