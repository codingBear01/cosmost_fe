import React from 'react';
import { MoreCourseBtn } from '..';
import * as S from './styled';

function SectionTitle({ children }) {
  return (
    <S.PopularTitleWrap>
      <S.PopularTitle>{children}</S.PopularTitle>
      <MoreCourseBtn></MoreCourseBtn>
    </S.PopularTitleWrap>
  );
}

export default SectionTitle;
