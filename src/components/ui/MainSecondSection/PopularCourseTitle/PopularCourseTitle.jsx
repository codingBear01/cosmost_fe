import React from 'react';
import { MoreCourseBtn } from '../../..';
import * as S from './styled';

function PopularCourseTitle() {
  return (
    <S.PopularTitleWrap>
      <S.PopularTitle>#요새 가장 인기 많은</S.PopularTitle>
      <MoreCourseBtn></MoreCourseBtn>
    </S.PopularTitleWrap>
  );
}

export default PopularCourseTitle;
