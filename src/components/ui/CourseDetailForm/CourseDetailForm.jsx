/* libraries */
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
/* custom functions */

/* recoil */
import { useRecoilState } from 'recoil';
import {
  createNaverMap,
  addNaverMapMarker,
  loginStateAtom,
  displayNaverMapMarkerInfo,
  addNaverMapMarkerInfo,
  getCourseAuthor,
  getCourseDetail,
} from '../../../store';
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
import { DeleteModal, ToTopBtn, UtilDiv } from '../..';

function CourseDetailForm() {
  // URL로부터 전달받은 코스 ID
  const { id } = useParams();
  // 백엔드로부터 응답받은 데이터
  const [courseDetail, setCourseDetail] = useState(null);
  const [author, setAuthor] = useState(null);
  const [courseReviews, setCourseReviews] = useState([]);
  // 내비게이트
  const navigate = useNavigate();

  const [isDeleteModalOpened, setIsDeleteModalOpened] = useState(false);
  const [clickedElement, setClickedElement] = useState(null);
  const [clickedCourseReviewIndex, setClickedCourseReviewIndex] =
    useState(null);
  const [isClickedCourseReviewChanged, setIsClickedCourseReviewChanged] =
    useState(false);

  //로그인 정보
  const token = localStorage.getItem('token');
  const [isLoggedIn] = useRecoilState(loginStateAtom);

  /* Handlers */
  /** 코스 삭제 버튼 클릭시 호출할 핸들러
    코스 삭제 여부 확인 모달창을 활성화하거나 비활성화한다. */
  const onClickOpenDeleteModal = (clicked, i) => {
    setIsDeleteModalOpened(!isDeleteModalOpened);
    setClickedElement(clicked);
    setClickedCourseReviewIndex(i);
  };

  //코스 수정 버튼 클릭시 호출할 핸들러
  const onClickEditCourse = (e) => {
    navigate(`/course-edit/${id}`, { state: courseDetail });
  };

  /* APIs */
  useEffect(() => {
    getCourseDetail(id, setCourseDetail);
  }, []);

  // courseDetail를 성공적으로 가져오면 호출하는 useEffect.
  useEffect(() => {
    if (courseDetail) {
      // 네이버 지도 생성
      const map = createNaverMap();
      courseDetail.placeDetailList.map((item, index) => {
        const marker = addNaverMapMarker(map, {
          latitude: item.placeYCoordinate,
          longitude: item.placeXCoordinate,
          eventList: [
            {
              eventName: 'mouseover',
              eventListener: (e) => {
                e.pointerEvent.target.title = item.placeName;
              },
            },
            {
              eventName: 'click',
              eventListener: (e) => {
                onClickMarker(e);
              },
            },
          ],
        });

        const markerInfoString = `
            <div><h3>${item.placeName}</h3><div>${item.placeComment}</div></div>
        `;
        const markerInfoStyle = {
          backgroundColor: '#000',
          borderColor: '#2db400',
          borderWidth: 5,
          anchorSkew: true,
          anchorColor: '#eee',
        };
        const info = addNaverMapMarkerInfo(
          map,
          marker,
          markerInfoString,
          markerInfoStyle
        );

        // 네이버지도 마커 클릭시 호출할 함수.
        const onClickMarker = (e) => {
          if (info.getMap()) {
            info.close();
          } else {
            info.open(map, marker);
          }
        };
      });

      // 코스등록자명과 코스 프로필 가져오기
      getCourseAuthor(courseDetail.authorId, setAuthor);
    }
  }, [courseDetail]);

  return (
    courseDetail && (
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
            onClickEditCourse={onClickEditCourse}
          />
          {/* 좋아요, 리뷰 숫자 */}
          <CourseContentWrap
            courseDetail={courseDetail}
            courseReviews={courseReviews}
            setCourseReviews={setCourseReviews}
            dataCategory="likeAndReview"
          />
          {/* 카테고리 */}
          <CourseContentWrap
            courseDetail={courseDetail}
            dataCategory="categoryLists"
          />
          {/* 해시태그 */}
          <CourseContentWrap
            courseDetail={courseDetail}
            dataCategory="hashtagList"
          />
          {/* 작성자 정보 */}
          {author && (
            <CourseContentWrap
              justifyContent={'center'}
              height={'10rem'}
              author={author}
              dataCategory="authorProfile"
              authorCourseCount={courseDetail.authorCourseCount}
            />
          )}

          {/* 코스에 등록된 장소를 표시하는 지도 */}
          <div
            style={{ width: '100%', height: '46rem' }}
            // src="https://file.mk.co.kr/meet/neds/2020/11/image_readtop_2020_1206310_16061899354442297.jpg"
            // alt="locations"
            id="map"
          />
          {/* { 
            courseDetail.placeDetailList.map((itme, index) => {
              createNaverMap("map", null, [{}])
            }) 
          } */}
          {/* 코스에 등록된 장소 순서 */}
          <CourseContentWrap
            justifyContent={'center'}
            height={'10rem'}
            courseDetail={courseDetail}
            dataCategory="courses"
          />
          {/* 코스 설명 */}
          <S.CourseDescription>
            {courseDetail.courseComment}
          </S.CourseDescription>
          {/* 공유, 좋아요 버튼 */}
          <CourseSharingAndLikeButton
            courseDetail={courseDetail}
            token={token}
          />
          {/* 코스 평균 평점 및 별 개수별 퍼센테이지 */}
          <CourseContentWrap
            justifyContent={'center'}
            height={'30rem'}
            courseDetail={courseDetail}
            dataCategory="averageRate"
          />
          {/* 리뷰 작성 폼 */}
          <CourseReviewRegisterForm courseDetail={courseDetail} />
          {/* 코스 리뷰 */}
          {courseReviews[0] &&
            courseReviews[0].courseReviewList.map((course, i) => (
              <CourseReview
                key={course.id}
                courseDetail={courseDetail}
                course={course}
                i={i}
                onClickOpenDeleteModal={onClickOpenDeleteModal}
                isClickedCourseReviewChanged={isClickedCourseReviewChanged}
                setIsClickedCourseReviewChanged={
                  setIsClickedCourseReviewChanged
                }
              />
            ))}
        </UtilDiv>
        <ToTopBtn />
      </>
    )
  );
}

export default CourseDetailForm;
