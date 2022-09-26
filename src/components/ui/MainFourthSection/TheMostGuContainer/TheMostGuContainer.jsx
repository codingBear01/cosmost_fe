import React from 'react';
import { TheMostGuCourse } from '../TheMostGuCourse/';
import * as S from './styled';

function TheMostGuContainer() {
  return (
    <S.TheMostGuContainer>
      <TheMostGuCourse></TheMostGuCourse>
      <TheMostGuCourse></TheMostGuCourse>
      <TheMostGuCourse></TheMostGuCourse>
      <TheMostGuCourse></TheMostGuCourse>
    </S.TheMostGuContainer>
  );
}

export default TheMostGuContainer;
