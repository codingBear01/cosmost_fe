import React from 'react';
/* components */
import * as S from './styled';
/* static data */
import { COLOR_LIST as color } from '../../../../style';

function MainTextWrap() {
  return (
    <S.StyledMainTextWrap>
      <S.MainText fs={'10rem'} col={color.white} hover_col={color.darkBlue}>
        공유
        <S.MainText fs={'7rem'} col={color.lightGrey}>
          하세요
        </S.MainText>
      </S.MainText>
      <S.MainText fs={'4rem'} mr={'5rem 0 0 0'} col={color.lightGrey}>
        당신만의{' '}
        <S.MainText fs={'6rem'} col={color.white} hover_col={color.blue}>
          코스
        </S.MainText>
        를
      </S.MainText>
      <S.MainText fs={'3rem'} mr={'8rem 0 0 0'} col={color.lightGrey}>
        여기서 지금
      </S.MainText>
    </S.StyledMainTextWrap>
  );
}

export default MainTextWrap;
