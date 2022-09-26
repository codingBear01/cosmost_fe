import React from 'react';
import * as S from './styled';

function CourseTitle({ fontSize, children }) {
  return (
    <S.StyledCourseTitle fontSize={fontSize}>{children}</S.StyledCourseTitle>
  );
}

export default CourseTitle;
