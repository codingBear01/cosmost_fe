/* libraries */
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
/* components */
import * as S from './styled';
import {
  Button,
  Icon,
  Input,
  ProfilePic,
  NextBtn,
  UtilForm,
  UtilInputWrap,
  UtilTitle,
} from '../..';
/* static data */
import { COLOR_LIST as color } from '../../../style';
import { FOLLOW_DATA_LIST as follows } from '../../../data';

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
      <S.FollowList>
        {follows &&
          follows.map((item) => (
            <S.FollowListItem key={item.id}>
              <Link>
                <ProfilePic
                  src={item.imgUrl}
                  alt={item.alt}
                  w={'60px'}
                  h={'60px'}
                />
                <span>{item.nickname}</span>
              </Link>
              <Button
                type="button"
                w={'70px'}
                h={'30px'}
                fs={'12px'}
                col={color.black}
                bg_col={item.isFollow ? color.darkRed : color.darkGreen}
                hov_bg_col={item.isFollow ? color.red : color.lightGreen}
              >
                {item.isFollow ? '언팔로우' : '팔로우'}
              </Button>
            </S.FollowListItem>
          ))}
      </S.FollowList>
    </UtilForm>
  );
}

export default FollowForm;
