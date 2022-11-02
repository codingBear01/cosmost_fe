/* libraries */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
/* components */
import * as S from './styled';
import { Button, ProfilePic } from '../../../';
/* static data */
import { COLOR_LIST as color } from '../../../../style';

function UserProfilArea({ token, userInfo }) {
  /* States */
  const [user, setUser] = useState([]);

  /* APIs */
  /* 로그인한 User의 정보를 get하는 핸들러 */
  const getUser = () => {
    const url = `${process.env.REACT_APP_AUTH_IP}/v1/auths`;
    const config = {
      headers: {
        Authorization: token,
      },
      timeout: 3000,
    };

    axios
      .get(url, config)
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .catch((error) => new Error(error));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <S.ProfileWrap>
      {/* 프로필 사진 */}
      <S.ProfilePicWrap>
        <ProfilePic
          src={userInfo.profileImgSaveUrl}
          alt="profile_pic"
          width={'60px'}
          height={'60px'}
        />
        <span>{userInfo.nickname}</span>
      </S.ProfilePicWrap>
      {/* 유저 정보 */}
      <S.ProfileUtilWrap>
        <S.UserInfoWrap>
          <Link to="/">
            <span>랭킹</span>
            <span>1</span>
          </Link>
          <Link to="followers">
            <span>팔로워</span>
            <span>100</span>
          </Link>
          <Link to="followings">
            <span>팔로잉</span>
            <span>100</span>
          </Link>
        </S.UserInfoWrap>
        <Link to="/user/edit/menu" state={userInfo}>
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
