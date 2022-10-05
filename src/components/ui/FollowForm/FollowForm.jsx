/* libraries */
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
/* components */
import {
  Button,
  Icon,
  Input,
  NextBtn,
  UtilForm,
  UtilInputWrap,
  UtilTitle,
} from '../..';
/* static data */
import { COLOR_LIST as color } from '../../../style';

function FollowForm() {
  /* 현재 접속한 페이지의 url에 따라 유저의 followers 혹은 followings 정보를 달리 뿌려주기 위한 state 및 pathname */
  const [isFollower, setIsFollower] = useState(false);
  const path = useLocation().pathname;

  /* 페이지 rendering 시 pathname에 followers라는 문자열이 포함되어 있다면 isFollower를 true로 설정 */
  useEffect(() => {
    if (path.includes('followers')) {
      setIsFollower(true);
    }
  }, [path]);

  return (
    <UtilForm pd={'15.4rem 10rem'}>
      <UtilTitle>{isFollower ? '팔로워' : '팔로잉'}</UtilTitle>
    </UtilForm>
  );
}

export default FollowForm;
