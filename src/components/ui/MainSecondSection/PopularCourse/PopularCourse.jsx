import React from 'react';
import { CourseImg } from '../../..';
import * as S from './styled';

function PopularCourse() {
  return (
    <S.PopularCourseWrap>
      <CourseImg width={'100%'} height={'65%'}></CourseImg>
      <S.PoplularCourseBox>
        <S.PopularCourseTitle>코스 제목</S.PopularCourseTitle>
        <div>
          <S.PopularHashtag>#해시태그</S.PopularHashtag>
          <S.PopularHashtag>#해시태그</S.PopularHashtag>
          <S.PopularHashtag>#해시태그</S.PopularHashtag>
          <S.PopularHashtag>#해시태그</S.PopularHashtag>
          <S.PopularHashtag>#해시태그</S.PopularHashtag>
        </div>
      </S.PoplularCourseBox>
    </S.PopularCourseWrap>
  );
}

export default PopularCourse;
