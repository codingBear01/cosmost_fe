import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import { Button } from '../';
import { HeaderLogo } from './HeaderLogo';
import { HeaderMenuIcon } from './HeaderMenuIcon';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

  const onClickLogin = () => {
    console.log('clicked');
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
          <li>
            {!isLogin && (
              <>
                <span onClick={onClickLogin}>로그인</span>
                <span>회원가입</span>
              </>
            )}
            {isLogin && (
              <>
                <span>프사 & 닉네임</span>
                <span>마이페이지</span>
                <span onClick={onClickLogin}>로그아웃</span>
              </>
            )}
          </li>
          <li>카테고리</li>
        </ul>
      </S.MenuModal>
    </S.Header>
  );
}

export default Header;
