import React from 'react';
import * as S from './styled';

function EachCourseBox({ column, height, padding, children }) {
  return (
    <S.StyledEachCourseBox column={column} height={height} padding={padding}>
      {children}
    </S.StyledEachCourseBox>
  );
}

export default EachCourseBox;
