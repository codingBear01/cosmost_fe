import React from 'react';
import { MoreContentBtn } from '../../../';
import * as S from './styled';

function PopularContentTitle() {
  return (
    <S.PopularTitleWrap>
      <S.PopularTitle>#요새 가장 인기 많은</S.PopularTitle>
      <MoreContentBtn></MoreContentBtn>
    </S.PopularTitleWrap>
  );
}

export default PopularContentTitle;
