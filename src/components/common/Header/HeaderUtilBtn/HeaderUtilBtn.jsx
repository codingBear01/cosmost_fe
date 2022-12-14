/* librarie */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
/* recoil */
import { useRecoilState } from 'recoil';
import { userAtom, isLoggedInAtom } from '../../../../store';
/* components */
import { SmallProfilePic, Icon } from '../../../';
/* icons */
import * as AiIcons from 'react-icons/ai';

function HeaderUtilBtn() {
  // 사용자 정보
  const [user, setUser] = useRecoilState(userAtom);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom);
  const token = localStorage.getItem('token');

  // 사용자 정보 가져오기
  useEffect(() => {
    if (token) {
      const url = `${process.env.REACT_APP_API}/auths`;
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
      {isLoggedIn && user ? (
        <Link to={`/user/${user?.id}`} state={user}>
          <SmallProfilePic src={user?.profileImgSaveUrl} alt={'profile_pic'} />
        </Link>
      ) : (
        <Link to="/login" onClick={() => setIsLoggedIn(false)}>
          <Icon>
            <AiIcons.AiOutlineLogin />
          </Icon>
        </Link>
      )}
    </>
  );
}

export default HeaderUtilBtn;
