import React from 'react';
import * as S from './styled';

function CourseImg({ width, height, sectionName }) {
  return (
    <S.CourseImgWrap>
      <S.StyledCourseImg
        width={width}
        height={height}
        src="https://t1.daumcdn.net/blogfile/fs11/23_blog_2008_07_13_10_37_48795c5e1d9b4?x-content-disposition=inline&filename=haeyongj_20.jpg"
        alt="사진"
      ></S.StyledCourseImg>
      {sectionName !== '지역구' && (
        <S.CourseTotalRate>⭐ 4.5</S.CourseTotalRate>
      )}
    </S.CourseImgWrap>
  );
}

export default CourseImg;
