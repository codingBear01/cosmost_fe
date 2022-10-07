/* libraries */
import React from 'react';
/* components */
import * as S from './styled';
import { CourseUpperInfo } from '..';
/* icons */
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as GrIcons from 'react-icons/gr';

function CourseUpperInfoWrap({ justifyContent, courseData, dataCategory }) {
  return (
    // 입력 받는 데이터의 종류에 따라 rendering 스타일 달라짐.
    <S.StyledCourseUpperInfoWrap justifyContent={justifyContent}>
      {dataCategory === 'titleAndDate' ? (
        <>
          <S.CourseTitleAndRateWrap>
            <S.CourseTitle>{courseData.title}</S.CourseTitle>
            <S.CourseAverageRate>
              ⭐ {courseData.averageRate}
            </S.CourseAverageRate>
          </S.CourseTitleAndRateWrap>
          <S.CourseCreatedDataAndMoreIconWrap>
            <S.CourseCreatedDate>{courseData.createdDate}</S.CourseCreatedDate>
            <GrIcons.GrMoreVertical />
          </S.CourseCreatedDataAndMoreIconWrap>
        </>
      ) : dataCategory === 'likeAndReview' ? (
        <>
          <CourseUpperInfo>
            <FaIcons.FaRegThumbsUp />
            <span>{courseData.likeCount}</span>
          </CourseUpperInfo>
          <CourseUpperInfo>
            <MdIcons.MdOutlineRateReview />
            <span>{courseData.reviewCount}</span>
          </CourseUpperInfo>
        </>
      ) : (
        courseData[`${dataCategory}`].map((item) => (
          <CourseUpperInfo key={item.id}>
            <span>
              {dataCategory === 'hashTags' && '#'}
              {item.name}
            </span>
          </CourseUpperInfo>
        ))
      )}
    </S.StyledCourseUpperInfoWrap>
  );
}

export default CourseUpperInfoWrap;
