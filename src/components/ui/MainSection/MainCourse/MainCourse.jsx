/* libraries */
import React from 'react';
import { Link } from 'react-router-dom';
/* components */
import * as S from './styled';
/* icons */
import * as FaIcons from 'react-icons/fa';

function MainCourse({ item }) {
  return (
    <S.StyledMainCourse alignSelf={item.alignSelf}>
      <S.CourseTextWrap>
        <S.CourseTitle>{item.title}</S.CourseTitle>
        <S.CoureseLink to={item.path}>
          더 둘러보기
          <FaIcons.FaChevronRight />
        </S.CoureseLink>
      </S.CourseTextWrap>
      <S.CourseIcon>{item.icon}</S.CourseIcon>
    </S.StyledMainCourse>
  );
}

export default MainCourse;
