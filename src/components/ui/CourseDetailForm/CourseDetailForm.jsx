/* libraries */
import React from 'react';
/* recoil */
import { useRecoilState } from 'recoil';
import { isOrderingModalOpenedAtom } from '../../../store';
/* components */
import * as S from './styled';
import {
  CourseImageCarousel,
  CourseReview,
  CourseReviewRegisterForm,
  CourseContentWrap,
} from '.';
import { OrderingButton, ToTopBtn, UtilDiv } from '../..';
/* static data */
import { COURSE_DETAIL as courseData } from '../../../store';

function CourseDetailForm() {
  const [isOrderingModalOpened, setIsOrderingModalOpened] = useRecoilState(
    isOrderingModalOpenedAtom
  );

  const onClickOpenOrderingModal = () => {
    setIsOrderingModalOpened(!isOrderingModalOpened);
  };

  return (
    <>
      {/* 코스 이미지 carousel */}
      <CourseImageCarousel courseData={courseData} />
      {/* 본문 */}
      <UtilDiv
        justifyContent={'center'}
        width={'76.8rem'}
        padding={'0 0 7rem 0'}
        margin={'0 auto'}
      >
        {/* 코스 제목 및 날짜, 더보기 버튼 */}
        <CourseContentWrap
          justifyContent={'space-between'}
          courseData={courseData}
          dataCategory="titleAndDate"
        />
        {/* 좋아요, 리뷰 숫자 */}
        <CourseContentWrap
          courseData={courseData}
          dataCategory="likeAndReview"
        />
        {/* 카테고리 */}
        <CourseContentWrap courseData={courseData} dataCategory="categories" />
        {/* 해시태그 */}
        <CourseContentWrap courseData={courseData} dataCategory="hashTags" />
        {/* 작성자 정보 */}
        <CourseContentWrap
          justifyContent={'center'}
          height={'10rem'}
          courseData={courseData}
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
          courseData={courseData}
          dataCategory="courses"
        />
        {/* 코스 설명 */}
        <S.CourseDescription>{courseData.description}</S.CourseDescription>
        {/* 공유, 좋아요 버튼 */}
        <CourseContentWrap
          justifyContent={'flex-end'}
          height={'10rem'}
          courseData={courseData}
          dataCategory="shareAndLikeButton"
        />
        {/* 코스 평균 평점 및 별 개수별 퍼센테이지 */}
        <CourseContentWrap
          justifyContent={'center'}
          height={'30rem'}
          courseData={courseData}
          dataCategory="averageRate"
        />
        {/* 리뷰 작성 폼 */}
        <CourseReviewRegisterForm />
        {/* 정렬 버튼 */}
        <OrderingButton onClick={onClickOpenOrderingModal} />
        {/* 코스 리뷰 */}
        <CourseReview />
      </UtilDiv>
      <ToTopBtn />
    </>
  );
}

export default CourseDetailForm;
