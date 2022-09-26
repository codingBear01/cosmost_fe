import React from 'react';
import { CourseImg, HashTag } from '../../..';
import * as S from './styled';

function PopularCourse() {
  return (
    <S.PopularCourseWrap>
      <CourseImg width={'100%'} height={'65%'}></CourseImg>
      <S.PoplularCourseBox>
        <S.PopularCourseTitle>코스 제목</S.PopularCourseTitle>
        <div>
          <HashTag>#해시태그</HashTag>
          <HashTag>#해시태그 해시태그 해시태그</HashTag>
          <HashTag>#해시태그</HashTag>
          <HashTag>#해시태그</HashTag>
          <HashTag>#해시태그</HashTag>
        </div>
      </S.PoplularCourseBox>
    </S.PopularCourseWrap>
  );
}

export default PopularCourse;
