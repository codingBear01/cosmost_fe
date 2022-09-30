import React from 'react';
import * as S from './styled';

function EachCourseBox({ most, children }) {
  return <S.StyledEachCourseBox most={most}>{children}</S.StyledEachCourseBox>;
}

export default EachCourseBox;
