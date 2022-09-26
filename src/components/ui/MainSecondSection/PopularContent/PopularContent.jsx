import React from 'react';
import * as S from './styled';

function PopularContent() {
  return (
    <S.PopularContentWrap>
      <S.PopularContentImg
        src="https://t1.daumcdn.net/blogfile/fs11/23_blog_2008_07_13_10_37_48795c5e1d9b4?x-content-disposition=inline&filename=haeyongj_20.jpg"
        alt="사진"
      ></S.PopularContentImg>
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
