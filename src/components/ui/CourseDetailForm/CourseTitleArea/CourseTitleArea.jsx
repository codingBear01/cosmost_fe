/* libraries */
import React from 'react';
/* components */
import * as S from './styled';
/* icons */
import * as GrIcons from 'react-icons/gr';

function CourseTitleArea({ courseData }) {
  return (
    <S.CourseTitleAreaWrap>
      <S.CourseTitleAndRateWrap>
        <S.CourseTitle>{courseData.title}</S.CourseTitle>
        <S.CourseAverageRate>⭐ {courseData.averageRate}</S.CourseAverageRate>
      </S.CourseTitleAndRateWrap>
      <S.CourseCreatedDataAndMoreIconWrap>
        <S.CourseCreatedDate>{courseData.createdDate}</S.CourseCreatedDate>
        <GrIcons.GrMoreVertical />
      </S.CourseCreatedDataAndMoreIconWrap>
    </S.CourseTitleAreaWrap>
  );
}

export default CourseTitleArea;
