import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import { Button } from '../';
import { HeaderLogo } from './HeaderLogo';
import { HeaderMenuIcon } from './HeaderMenuIcon';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const onClickLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <S.Header>
      <S.HeaderContainer>
        <Link to="/">
          <HeaderLogo>cosMost</HeaderLogo>
        </Link>

        <S.HeaderUtilWrap>
          <Link to="/course/register">
            <Button width={'14rem'} height={'4rem'} fontSize={'1.4rem'}>
              코스 등록하기
            </Button>
          </Link>

          <HeaderMenuIcon
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          ></HeaderMenuIcon>
        </S.HeaderUtilWrap>
      </S.HeaderContainer>

      <S.MenuModal isMenuOpen={isMenuOpen}>
        <ul>
          {!isLogin && (
            <>
              <li onClick={onClickLogin}>
                <span>로그인</span>
                <span>회원가입</span>
              </li>
            </>
          )}
          {isLogin && (
            <>
              <li>
                <img
                  src="https://i.pinimg.com/564x/26/ad/53/26ad538a432e0b13fe76a23dd22f55ad.jpg"
                  alt="img"
                  style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '100%',
                  }}
                />
                <span>닉네임</span>

                <span>아이콘</span>
                <span onClick={onClickLogin}>로그아웃</span>
              </li>
              <li>
                <span>신고하기</span>
              </li>
            </>
          )}
          <li>카테고리</li>
        </ul>
      </S.MenuModal>
    </S.Header>
  );
}

export default Header;
