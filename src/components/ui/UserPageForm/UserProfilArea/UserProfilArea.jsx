/* libraries */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
/* recoil */
import { useRecoilState } from 'recoil';
import { userAtom } from '../../../../store';
/* components */
import * as S from './styled';
import { Button, ProfilePic } from '../../../';
/* APIs */
import {
  fetchMyFollowersCount,
  fetchMyFollowingsCount,
} from '../../../../apis';
/* static data */
import { COLOR_LIST as color } from '../../../../style';

function UserProfilArea({ token, user }) {
  const [myFollowersCount, setMyFollowersCount] = useState(0);
  const [myFollowingsCount, setMyFollowingsCount] = useState(0);

  /* APIs */

  useEffect(() => {
    if (token) {
      fetchMyFollowersCount(token, setMyFollowersCount);
      fetchMyFollowingsCount(token, setMyFollowingsCount);
    }
  }, []);
  return (
    <S.ProfileWrap>
      {/* 프로필 사진 */}
      <S.ProfilePicWrap>
        <ProfilePic
          src={user.profileImgSaveUrl}
          alt="profile_pic"
          width={'60px'}
          height={'60px'}
        />
        <span>{user.nickname}</span>
      </S.ProfilePicWrap>
      {/* 유저 정보 */}
      <S.ProfileUtilWrap>
        <S.UserInfoWrap>
          <Link to="followers">
            <span>팔로워</span>
            <span>{myFollowersCount}</span>
          </Link>
          <Link to="followings">
            <span>팔로잉</span>
            <span>{myFollowingsCount}</span>
          </Link>
        </S.UserInfoWrap>
        <Link to="/user/edit/menu" state={user}>
          <Button
            type="button"
            width={'220px'}
            height={'25px'}
            font_size={'12px'}
            bgColor={color.darkBlue}
            hoveredBgColor={color.navy}
          >
            프로필 편집
          </Button>
        </Link>
      </S.ProfileUtilWrap>
    </S.ProfileWrap>
  );
}

export default UserProfilArea;
