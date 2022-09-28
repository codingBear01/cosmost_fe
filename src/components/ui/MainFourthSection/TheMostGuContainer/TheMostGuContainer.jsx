/* hooks */
import React from 'react';
/* components */
import { TheMostGuCourse } from '../TheMostGuCourse/';
/* static data */
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
