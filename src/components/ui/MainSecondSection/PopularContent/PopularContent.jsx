import React from 'react';
import { CourseImg } from '../../../';
import * as S from './styled';

function PopularContent() {
  return (
    <S.PopularContentWrap>
      {/* img component */}
      <CourseImg width={'100%'} height={'65%'}></CourseImg>
      <S.PoplularContentBox>
        <S.PopularCourseTitle>코스 제목</S.PopularCourseTitle>
        <div>
          <S.PopularHashtag>#해시태그</S.PopularHashtag>
          <S.PopularHashtag>#해시태그</S.PopularHashtag>
          <S.PopularHashtag>#해시태그</S.PopularHashtag>
          <S.PopularHashtag>#해시태그</S.PopularHashtag>
          <S.PopularHashtag>#해시태그</S.PopularHashtag>
        </div>
      </S.PoplularContentBox>
    </S.PopularContentWrap>
  );
}

export default PopularContent;
