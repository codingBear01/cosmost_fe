import React from 'react';
import { Link } from 'react-router-dom';
import { CourseImg, CourseTitle, HashTag } from '../../..';
import { FONT_SIZE_LIST as fs } from '../../../../style';
import * as S from './styled';

function PopularCourse() {
  return (
    <Link to="/course/detail">
      <S.PopularCourseWrap>
        <CourseImg width={'100%'} height={'65%'}></CourseImg>
        <S.PoplularCourseBox>
          <CourseTitle fontSize={fs.l}>코스 제목</CourseTitle>
          <div>
            <HashTag fontSize={fs.xs}>#해시태그</HashTag>
            <HashTag fontSize={fs.xs}>#해시태그 해시태그 해시태그</HashTag>
            <HashTag fontSize={fs.xs}>#해시태그</HashTag>
            <HashTag fontSize={fs.xs}>#해시태그</HashTag>
            <HashTag fontSize={fs.xs}>#해시태그</HashTag>
          </div>
        </S.PoplularCourseBox>
      </S.PopularCourseWrap>
    </Link>
  );
}

export default PopularCourse;
