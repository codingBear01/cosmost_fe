import React from 'react';
/* components */
import * as S from './styled';
/* icons */
import * as FaIcons from 'react-icons/fa';

function MainCourse({ item }) {
  return (
    <S.StyledMainCourse a_self={item.a_self}>
      <S.CourseTextWrap>
        <S.CourseTitle>{item.title}</S.CourseTitle>
        <S.CoureseLink>
          더 둘러보기
          <FaIcons.FaChevronRight />
        </S.CoureseLink>
      </S.CourseTextWrap>
      <S.CourseIcon>{item.icon}</S.CourseIcon>
    </S.StyledMainCourse>
  );
}

export default MainCourse;
