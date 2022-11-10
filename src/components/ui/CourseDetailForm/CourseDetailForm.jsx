/* libraries */
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
/* recoil */
import { useRecoilState } from 'recoil';
import {
  createNaverMap,
  addNaverMapMarker,
  // Atoms
  userAtom,
  isLoggedInAtom,
  // custom functions
  addNaverMapMarkerInfo,
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
import { ToTopBtn, UtilDiv } from '../..';
/* APIs */
import {
  fetchCourseAverageRate,
  fetchCourseDetail,
  fetchCourseLikeCount,
  fetchCourseAuthor,
} from '../../../apis';
/* static data */
import { COLOR_LIST as color } from '../../../style';

function CourseDetailForm() {
  const { id } = useParams();

  const navigate = useNavigate();

  /* States */
  const [isDeleteModalOpened, setIsDeleteModalOpened] = useState(false);
  const [isClickedCourseReviewChanged, setIsClickedCourseReviewChanged] =
    useState(false);
  const [isLastPage, setIsLastPage] = useState(false);
  // Auth
  const [author, setAuthor] = useState('');
  // Cosmost
  const [courseDetail, setCourseDetail] = useState(null);
  // Comment
  const [courseReviews, setCourseReviews] = useState([]);
  // Popularity
  const [courseAverageRate, setCourseAverageRate] = useState(0);
  const [courseLikeCount, setCourseLikeCount] = useState('');
  const [courseAverageRatePercentage, setCourseAverageRatePercentage] =
    useState('');
  const [courseReviewCount, setCourseReviewCount] = useState('');

  /* Refs */
  const page = useRef(0);
  const observedTarget = useRef();

  /* 로그인 정보 */
  const token = localStorage.getItem('token');
  const [user] = useRecoilState(userAtom);
  const [isLoggedIn] = useRecoilState(isLoggedInAtom);
  const loggedInUserId = user?.id;

  /* Handlers */
  /** 코스 삭제 버튼 클릭시 호출할 핸들러
    코스 삭제 여부 확인 모달창을 활성화하거나 비활성화한다. */
  const onClickOpenDeleteModal = () => {
    setIsDeleteModalOpened(!isDeleteModalOpened);
  };

  //코스 수정 버튼 클릭시 호출할 핸들러
  const onClickEditCourse = (e) => {
    navigate(`/course-edit/${id}`, { state: courseDetail });
  };

  /* APIs */
  const fetchCourseReviews = useCallback(async () => {
    try {
      const url = `${process.env.REACT_APP_API}/comments?type=review&sort=id,desc&page=${page.current}&size=4`;
      const config = {
        headers: {
          Authorization: id,
        },
        timeout: 3000,
      };

      const result = await axios.get(url, config);
      const { data } = result;

      setCourseReviews((prev) => prev.concat(data[0].courseReviewList));
      setIsLastPage(
        data[0].courseReviewList[data[0].courseReviewList.length - 1]
          .whetherLastPage
      );
      setCourseReviewCount(data[0].courseReviewCnt);
      setCourseAverageRatePercentage(data[0].rateAllTypeList);

      if (!isLastPage) {
        page.current += 1;
      }
    } catch (error) {
      new Error(error);
    }
  }, []);
  useEffect(() => {
    fetchCourseDetail(id, setCourseDetail);
    fetchCourseReviews();
  }, []);

  /** 무한 스크롤을 위해 observing을 하는 함수 */
  useEffect(() => {
    if (!observedTarget.current || isLastPage) return;

    const io = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        fetchCourseReviews();
      }
    });
    io.observe(observedTarget.current);

    return () => io.disconnect();
  }, [courseReviews, isLastPage, isClickedCourseReviewChanged]);

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
          <div>
            <h3>장소 이름: ${item.placeName}</h3>
            <span style="font-size: 15px; font-weight: 600;">한줄평: ${item.placeComment}</span>
          </div>
        `;
        const markerInfoStyle = {
          maxWidth: 150,
          backgroundColor: `${color.navy}`,
          borderColor: `${color.lightBlue}`,
          borderWidth: 2,
          anchorSkew: true,
          anchorColor: `${color.navy}`,
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

      fetchCourseAuthor(courseDetail?.authorId, setAuthor);
      fetchCourseAverageRate(
        id,
        (result) => {
          setCourseAverageRate(result.data);
        },
        (error) => {
          new Error(error);
        }
      );
      fetchCourseLikeCount(id, setCourseLikeCount);
    }
  }, [courseDetail]);

  return (
    courseDetail && (
      <>
        {/* 코스 이미지 carousel */}
        <CourseImageCarousel courseDetail={courseDetail} />
        <UtilDiv
          justifyContent={'center'}
          width={'76.8rem'}
          padding={'0 0 7rem 0'}
          margin={'0 auto'}
        >
          {/* 코스 제목 및 날짜, 더보기 버튼 */}
          <CourseTitleAndDate
            courseDetail={courseDetail}
            token={token}
            loggedInUserId={loggedInUserId}
            onClickOpenDeleteModal={onClickOpenDeleteModal}
            onClickEditCourse={onClickEditCourse}
            courseAverageRate={courseAverageRate}
          />
          {/* 좋아요, 리뷰 숫자 */}
          <CourseContentWrap
            dataCategory="likeAndReview"
            courseLikeCount={courseLikeCount}
            courseReviewCount={courseReviewCount}
          />
          {/* 카테고리 */}
          <CourseContentWrap
            courseDetail={courseDetail}
            dataCategory="categoryLists"
          />
          {/* 해시태그 */}
          <CourseContentWrap
            flexWrap={'wrap'}
            courseDetail={courseDetail}
            dataCategory="hashtagList"
          />
          {/* 작성자 정보 */}
          <CourseContentWrap
            justifyContent={'center'}
            height={'10rem'}
            dataCategory="authorProfile"
            authorCourseCount={courseDetail.authorCourseCount}
            loggedInUserId={loggedInUserId}
            author={author}
          />

          {/* 코스에 등록된 장소를 표시하는 지도 */}
          <div style={{ width: '100%', height: '46rem' }} id="map" />
          {/* 코스에 등록된 장소 순서 */}
          <CourseContentWrap
            justifyContent={'center'}
            height={'10rem'}
            dataCategory="courses"
            courseDetail={courseDetail}
            flexWrap={'wrap'}
          />
          {/* 코스 설명 */}
          <S.CourseDescription>
            {courseDetail.courseComment}
          </S.CourseDescription>
          {/* 공유, 좋아요 버튼 */}
          <CourseSharingAndLikeButton
            courseDetail={courseDetail}
            token={token}
            loggedInUserId={loggedInUserId}
          />
          {/* 코스 평균 평점 및 별 개수별 퍼센테이지 */}
          <CourseContentWrap
            justifyContent={'center'}
            height={'30rem'}
            dataCategory="averageRate"
            courseAverageRate={courseAverageRate}
            courseAverageRatePercentage={courseAverageRatePercentage}
          />
          {/* 리뷰 작성 폼 */}
          {isLoggedIn && author?.id !== user?.id && (
            <CourseReviewRegisterForm courseDetail={courseDetail} />
          )}
          {/* 코스 리뷰 */}
          {courseReviews[0] &&
            courseReviews.map((courseReview, i) => (
              <CourseReview
                key={courseReview.id}
                courseDetail={courseDetail}
                courseReview={courseReview}
                courseReviewId={courseReview.id}
                i={i}
                token={token}
                loggedInUserId={loggedInUserId}
                onClickOpenDeleteModal={onClickOpenDeleteModal}
                isClickedCourseReviewChanged={isClickedCourseReviewChanged}
                setIsClickedCourseReviewChanged={
                  setIsClickedCourseReviewChanged
                }
              />
            ))}
          {!courseReviews[0] && (
            <h1>아직 등록된 리뷰가 없습니다. 첫 리뷰의 주인공이 되어보세요.</h1>
          )}
          <div ref={observedTarget} style={{ paddingBottom: '10rem' }}></div>
        </UtilDiv>
        <ToTopBtn />
      </>
    )
  );
}

export default CourseDetailForm;
