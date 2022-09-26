import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import { Button } from '../';
import { HeaderLogo } from './HeaderLogo';
import { HeaderMenuIcon } from './HeaderMenuIcon';

function Header() {
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

          <HeaderMenuIcon></HeaderMenuIcon>
        </S.HeaderUtilWrap>
      </S.HeaderContainer>
    </S.Header>
  );
}

export default Header;
