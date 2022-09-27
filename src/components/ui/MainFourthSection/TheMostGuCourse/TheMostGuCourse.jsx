import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import { CourseImg, CourseTitle } from '../../..';
import { FONT_SIZE_LIST as fs } from '../../../../style';

function TheMostGuCourse() {
  return (
    <Link to="/course/detail">
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
    </Link>
  );
}

export default TheMostGuCourse;
