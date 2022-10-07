/* libraries */
import React from 'react';
/* components */
import * as S from './styled';
import {
  CourseCategories,
  CourseImageCarousel,
  CourseLikeAndReviewCount,
  CourseTitleArea,
  CourseUpperInfoWrap,
} from '.';
import {
  Button,
  Icon,
  Input,
  NextBtn,
  UtilDiv,
  UtilInputWrap,
  UtilTitle,
} from '../..';
/* static data */
import { COURSE_DETAIL as courseData } from '../../../store';

function CourseDetailForm() {
  return (
    <>
      {/* 코스 이미지 carousel */}
      <CourseImageCarousel courseData={courseData} />
      {/* 본문 */}
      <UtilDiv
        justifyContent={'center'}
        width={'76.8rem'}
        padding={'7rem 0'}
        margin={'0 auto'}
      >
        {/* 코스 제목 및 날짜, 더보기 버튼 */}
        <CourseUpperInfoWrap
          justifyContent={'space-between'}
          courseData={courseData}
          dataCategory="titleAndDate"
        />
        {/* 좋아요, 리뷰 숫자 */}
        <CourseUpperInfoWrap
          courseData={courseData}
          dataCategory="likeAndReview"
        />
        {/* 카테고리 */}
        <CourseUpperInfoWrap
          courseData={courseData}
          dataCategory="categories"
        />
        {/* 해시태그 */}
        <CourseUpperInfoWrap courseData={courseData} dataCategory="hashTags" />
      </UtilDiv>
    </>
  );
}

export default CourseDetailForm;
