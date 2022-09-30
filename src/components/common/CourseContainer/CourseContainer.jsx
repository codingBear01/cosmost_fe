import React from 'react';
import * as S from './styled';

function CourseContainer({ mt, children }) {
  return <S.StyledCourseContainer mt={mt}>{children}</S.StyledCourseContainer>;
}

export default CourseContainer;
