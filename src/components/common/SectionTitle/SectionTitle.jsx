import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import { MoreCourseBtn } from '..';

function SectionTitle({ children }) {
  return (
    <S.PopularTitleWrap>
      <S.PopularTitle>{children}</S.PopularTitle>
      <Link to="/course/detail">
        <MoreCourseBtn></MoreCourseBtn>
      </Link>
    </S.PopularTitleWrap>
  );
}

export default SectionTitle;
