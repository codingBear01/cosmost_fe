import React from 'react';
import * as S from './styled';

function CourseContainer({ mt, pt, children }) {
  return (
    <S.StyledCourseContainer mt={mt} pt={pt}>
      {children}
    </S.StyledCourseContainer>
  );
}

export default CourseContainer;
