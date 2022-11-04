/* librarie */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
/* recoil */
import { useRecoilState } from 'recoil';
import { loginStateAtom, userAtom } from '../../../../store';
/* components */
import { SmallProfilePic, Icon } from '../../../';
/* icons */
import * as AiIcons from 'react-icons/ai';

function HeaderUtilBtn() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [isLoggedIn] = useRecoilState(loginStateAtom);

  //사용자 정보를 나타내는 state.
  const [user, setUser] = useRecoilState(userAtom);

  // 사용자 정보 가져오기
  useEffect(() => {
    if (token && isLoggedIn) {
      // const url = `${process.env.REACT_APP_AUTH_IP}/v1/auths`;
      const url = `${process.env.REACT_APP_API}/v1/auths`;
      const config = {
        headers: {
          Authorization: token,
        },
        timeout: 3000,
      };
      axios
        .get(url, config)
        .then((resonse) => {
          setUser(resonse.data);
        })
        .catch((error) => {
          new Error(error);
          //토큰 만료로 실패했다면 토큰 삭제
          localStorage.removeItem('token');
          // navigate("/error");
        });
    }
  }, []);

  return (
    <>
      {token && isLoggedIn && user ? (
        <Link to={`/user/${user.id}`} state={user}>
          <SmallProfilePic src={user.profileImgSaveUrl} alt={'profile_pic'} />
        </Link>
      ) : (
        <Link to="/login">
          <Icon>
            <AiIcons.AiOutlineLogin />
          </Icon>
        </Link>
      )}
    </>
  );
}

export default HeaderUtilBtn;
