/* hooks */
import React from 'react';
import { Link } from 'react-router-dom';
/* components */
import * as S from './styled';
import { CourseImg, CourseTitle } from '../../..';
/* static data */
import { FONT_SIZE_LIST as fs, COLOR_LIST as color } from '../../../../style';

function TheMostGuCourse() {
  return (
    <Link to="/course/detail" style={{ color: `${color.black}` }}>
      <S.TheMostGuCourseWrap>
        <CourseImg width={'100%'} height={'65%'}></CourseImg>
        <S.TheMostGuCourseBox>
          <CourseTitle fontSize={fs.l} sectionName={'지역구'}>
            지역구
          </CourseTitle>
          <S.CourseCount>000건</S.CourseCount>
        </S.TheMostGuCourseBox>
      </S.TheMostGuCourseWrap>
    </Link>
  );
}

export default TheMostGuCourse;
