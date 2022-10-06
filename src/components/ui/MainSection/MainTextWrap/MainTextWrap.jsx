import React from 'react';
/* components */
import * as S from './styled';
/* static data */
import { COLOR_LIST as color } from '../../../../style';

function MainTextWrap() {
  return (
    <S.StyledMainTextWrap>
      <S.MainText
        fontSize={'10rem'}
        color={color.white}
        hoveredColor={color.darkBlue}
      >
        공유
        <S.MainText fontSize={'7rem'} color={color.lightGrey}>
          하세요
        </S.MainText>
      </S.MainText>
      <S.MainText
        fontSize={'4rem'}
        margin={'5rem 0 0 0'}
        color={color.lightGrey}
      >
        당신만의{' '}
        <S.MainText
          fontSize={'6rem'}
          color={color.white}
          hoveredColor={color.blue}
        >
          코스
        </S.MainText>
        를
      </S.MainText>
      <S.MainText
        fontSize={'3rem'}
        margin={'8rem 0 0 0'}
        color={color.lightGrey}
      >
        여기서 지금
      </S.MainText>
    </S.StyledMainTextWrap>
  );
}

export default MainTextWrap;
