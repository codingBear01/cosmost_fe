/* libraries */
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDrag, useDrop } from 'react-dnd';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
/* components */
import * as S from './styled';
import { Button, UtilDiv, UtilTitle } from '../..';
/* CONSTANTS */
const PAGE_TITLES = {
  '/find/password': 'cosMoster의 비밀번호는?',
  '/find/id': 'cosMoster의 아이디는?',
};

function DisplayFindedUserForm() {
  const pathname = useLocation().pathname;
  const str = 'dasan8829';
  const diplayedStr = str.substring(0, Math.floor(str.length / 2));
  const notDisplayedStr = '*'.repeat(Math.floor(str.length / 2));

  return (
    <UtilDiv>
      <UtilTitle>{PAGE_TITLES[pathname]}</UtilTitle>
      <S.FindedUserBox>
        <span>{diplayedStr + notDisplayedStr}</span>
        <Link to="/">메인으로</Link>
      </S.FindedUserBox>
    </UtilDiv>
  );
}

export default DisplayFindedUserForm;
