/* libraries */
import React, { useState } from 'react';
/* recoil */
import { useRecoilState } from 'recoil';
import { isOrderingModalOpenedAtom, loginStateAtom } from '../../../store';
/* components */
import * as S from './styled';
import {
  CourseContentWrap,
  CourseImageCarousel,
  CourseReview,
  CourseReviewRegisterForm,
  CourseSharingAndLikeButton,
  CourseTitleAndDate,
} from '.';
import { DeleteModal, OrderingButton, ToTopBtn, UtilDiv } from '../..';
/* static data */
import { COURSE_DETAIL as courseDetail } from '../../../store';

function CourseDetailForm() {
  /* States */
  const [isOrderingModalOpened, setIsOrderingModalOpened] = useRecoilState(
    isOrderingModalOpenedAtom
  );
  const [isDeleteModalOpened, setIsDeleteModalOpened] = useState(false);
  const [clickedElement, setClickedElement] = useState(null);
  const [clickedCourseReviewIndex, setClickedCourseReviewIndex] =
    useState(null);
  const [isClickedCourseReviewChanged, setIsClickedCourseReviewChanged] =
    useState(false);
  const [isLoggedIn] = useRecoilState(loginStateAtom);
  const loginToken = localStorage.getItem('token');

  /* Handlers */
  const onClickOpenOrderingModal = () => {
    setIsOrderingModalOpened(!isOrderingModalOpened);
  };
  const onClickOpenDeleteModal = (clicked, i) => {
    setIsDeleteModalOpened(!isDeleteModalOpened);
    setClickedElement(clicked);
    setClickedCourseReviewIndex(i);
  };

  return (
    <>
      {/* 코스 이미지 carousel */}
      <CourseImageCarousel courseDetail={courseDetail} />
      {/* 본문 */}
      {isDeleteModalOpened && (
        <DeleteModal
          onClickOpenDeleteModal={onClickOpenDeleteModal}
          isClickedCourseReviewChanged={isClickedCourseReviewChanged}
          setIsClickedCourseReviewChanged={setIsClickedCourseReviewChanged}
          clickedElement={clickedElement}
          courseId={courseDetail.id}
          courseReviewId={clickedCourseReviewIndex}
        />
      )}
      <UtilDiv
        justifyContent={'center'}
        width={'76.8rem'}
        padding={'0 0 7rem 0'}
        margin={'0 auto'}
      >
        {/* 코스 제목 및 날짜, 더보기 버튼 */}
        <CourseTitleAndDate
          courseDetail={courseDetail}
          onClickOpenDeleteModal={onClickOpenDeleteModal}
        />
        {/* 좋아요, 리뷰 숫자 */}
        <CourseContentWrap
          courseDetail={courseDetail}
          dataCategory="likeAndReview"
        />
        {/* 카테고리 */}
        <CourseContentWrap
          courseDetail={courseDetail}
          dataCategory="categories"
        />
        {/* 해시태그 */}
        <CourseContentWrap
          courseDetail={courseDetail}
          dataCategory="hashTags"
        />
        {/* 작성자 정보 */}
        <CourseContentWrap
          justifyContent={'center'}
          height={'10rem'}
          courseDetail={courseDetail}
          dataCategory="authorProfile"
        />
        {/* 코스에 등록된 장소를 표시하는 지도 */}
        <S.LocationMap
          src="https://file.mk.co.kr/meet/neds/2020/11/image_readtop_2020_1206310_16061899354442297.jpg"
          alt="locations"
        />
        {/* 코스에 등록된 장소 순서 */}
        <CourseContentWrap
          justifyContent={'center'}
          height={'10rem'}
          courseDetail={courseDetail}
          dataCategory="courses"
        />
        {/* 코스 설명 */}
        <S.CourseDescription>{courseDetail.description}</S.CourseDescription>
        {/* 공유, 좋아요 버튼 */}
        <CourseSharingAndLikeButton courseDetail={courseDetail} />
        {/* 코스 평균 평점 및 별 개수별 퍼센테이지 */}
        <CourseContentWrap
          justifyContent={'center'}
          height={'30rem'}
          courseDetail={courseDetail}
          dataCategory="averageRate"
        />
        {/* 리뷰 작성 폼 */}
        {loginToken && isLoggedIn && (
          <CourseReviewRegisterForm courseDetail={courseDetail} />
        )}
        {/* 정렬 버튼 */}
        <OrderingButton onClick={onClickOpenOrderingModal} />
        {/* 코스 리뷰 */}
        <CourseReview
          courseDetail={courseDetail}
          onClickOpenDeleteModal={onClickOpenDeleteModal}
          isClickedCourseReviewChanged={isClickedCourseReviewChanged}
          setIsClickedCourseReviewChanged={setIsClickedCourseReviewChanged}
        />
      </UtilDiv>
      <ToTopBtn />
    </>
  );
}

export default CourseDetailForm;
