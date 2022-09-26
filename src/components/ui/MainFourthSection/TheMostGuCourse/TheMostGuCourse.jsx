import React from 'react';
import { CourseImg, CourseTitle } from '../../..';
import { FONT_SIZE_LIST as fs } from '../../../../style';
import * as S from './styled';

function TheMostGuCourse() {
  return (
    <S.TheMostGuCourseWrap>
      <CourseImg
        width={'100%'}
        height={'65%'}
        sectionName={'지역구'}
      ></CourseImg>
      <S.TheMostGuCourseBox>
        <CourseTitle fontSize={fs.l}>지역구</CourseTitle>
        <S.CourseCount>000건</S.CourseCount>
      </S.TheMostGuCourseBox>
    </S.TheMostGuCourseWrap>
  );
}

export default TheMostGuCourse;
