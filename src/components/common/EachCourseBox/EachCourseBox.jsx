import React from 'react';
import * as S from './styled';

function EachCourseBox({ column, children }) {
  return (
    <S.StyledEachCourseBox column={column}>{children}</S.StyledEachCourseBox>
  );
}

export default EachCourseBox;
