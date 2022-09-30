import React from 'react';
import * as S from './styled';

function EachCourseWrap({ height, box_shadow, children }) {
  return (
    <S.StyledEachCourseWrap height={height} box_shadow={box_shadow}>
      {children}
    </S.StyledEachCourseWrap>
  );
}

export default EachCourseWrap;
