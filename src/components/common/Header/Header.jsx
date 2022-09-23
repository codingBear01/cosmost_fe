import React from 'react';
import * as S from './styled';
import { Button } from '../';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from './../../../style/';
import { CgMenuGridR } from 'react-icons/cg';

function Header() {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.HeaderLogo logoTxt={'cosMost'}></S.HeaderLogo>

        <S.HeaderUtilWrap>
          <Button
            width={bs.width.l}
            height={bs.height.l}
            btnTxt={'코스 등록하기'}
          ></Button>

          <S.HeaderMenuIcon>
            <CgMenuGridR />
          </S.HeaderMenuIcon>
        </S.HeaderUtilWrap>
      </S.HeaderContainer>
    </S.Header>
  );
}

export default Header;
