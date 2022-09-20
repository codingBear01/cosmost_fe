import React from 'react';
import * as S from './styled';
import { CgMenuGridO } from 'react-icons/cg';

function Header() {
  return (
    <>
      <S.Header>
        <S.HeaderContainer>
          <S.Logo>cosMost</S.Logo>

          <S.HeaderUtilWrap>
            <S.LoginBtn>로그인</S.LoginBtn>
            <S.HeaderIconWrap>
              <CgMenuGridO />
            </S.HeaderIconWrap>
          </S.HeaderUtilWrap>
        </S.HeaderContainer>
      </S.Header>
    </>
  );
}

export default Header;
