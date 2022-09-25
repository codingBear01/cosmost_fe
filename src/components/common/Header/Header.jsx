import React from 'react';
import * as S from './styled';
import { Button } from '../';
import { HeaderLogo } from './HeaderLogo';
import { HeaderMenuIcon } from './HeaderMenuIcon';

function Header() {
  return (
    <S.Header>
      <S.HeaderContainer>
        <HeaderLogo>cosMost</HeaderLogo>

        <S.HeaderUtilWrap>
          <Button width={'14rem'} height={'4rem'} fontSize={'1.4rem'}>
            코스 등록하기
          </Button>

          <HeaderMenuIcon></HeaderMenuIcon>
        </S.HeaderUtilWrap>
      </S.HeaderContainer>
    </S.Header>
  );
}

export default Header;
