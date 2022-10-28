/* libraries */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
/* custom functions */

/* recoil */
import { useRecoilState } from "recoil";
import {
  createNaverMap,
  addNaverMapMarker,
  isOrderingModalOpenedAtom,
  loginStateAtom,
  displayNaverMapMarkerInfo,
  addNaverMapMarkerInfo,
} from "../../../store";
/* components */
import * as S from "./styled";
import {
  CourseContentWrap,
  CourseImageCarousel,
  CourseReview,
  CourseReviewRegisterForm,
  CourseSharingAndLikeButton,
  CourseTitleAndDate,
} from ".";
import { DeleteModal, OrderingButton, ToTopBtn, UtilDiv } from "../..";
/* static data */
import { COURSE_DETAIL as courseDetail } from "../../../store";

function CourseDetailForm() {
  /* States */
  const [isOrderingModalOpened, setIsOrderingModalOpened] = useRecoilState(
    isOrderingModalOpenedAtom
  );

  // URL로부터 전달받은 코스 ID
  const { id } = useParams();
  // 백엔드로부터 응답받은 데이터
  const [courseInfo, setCourseInfo] = useState(null);
  const [authorInfo, setAuthorInfo] = useState(null);
  // 내비게이트
  const navigate = useNavigate();

  const [isDeleteModalOpened, setIsDeleteModalOpened] = useState(false);
  const [clickedElement, setClickedElement] = useState(null);
  const [clickedCourseReviewIndex, setClickedCourseReviewIndex] =
    useState(null);
  const [isClickedCourseReviewChanged, setIsClickedCourseReviewChanged] =
    useState(false);

  //로그인 정보
  const token = localStorage.getItem("token");
  const [isLoggedIn] = useRecoilState(loginStateAtom);

  /* Handlers */
  const onClickOpenOrderingModal = () => {
    setIsOrderingModalOpened(!isOrderingModalOpened);
  };

  //코스 삭제 버튼 클릭시 호출할 핸들러
  const onClickOpenDeleteModal = (clicked, i) => {
    setIsDeleteModalOpened(!isDeleteModalOpened);
    setClickedElement(clicked);
    setClickedCourseReviewIndex(i);
  };

  //코스 수정 버튼 클릭시 호출할 핸들러
  const onClickEditCourse = (e) => {
    navigate(`/course-edit/${id}`, { state: courseInfo });
    // const url = `${process.env.REACT_APP_SERVER1_IP}/v1/cosmosts/${id}`;
    // const loginToken = localStorage.getItem("token");
    // console.log("loginToken", loginToken);
    // const config = {
    //   header: {
    //     Authorization: loginToken,
    //   },
    //   timeout: 1000,
    // };
    // axios
    //   .put(url, config)
    //   .then((response) => {
    //     const data = response.data;
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  useEffect(() => {
    const courseInfoUrl = `${process.env.REACT_APP_SERVER1_IP}/v1/cosmosts/${id}`;
    const courseInfoUConfig = { timeout: 1000 };

    //코스 정보 가져오기
    axios
      .get(courseInfoUrl, courseInfoUConfig)
      .then((response) => {
        const data = response.data;
        setCourseInfo(data);
      })
      .catch((error) => {
        console.log(error);
        alert("코스 정보 가져오기 실패");
        navigate("/");
      });
  }, []);

  // courseInfo를 성공적으로 가져오면 호출하는 useEffect.
  useEffect(() => {
    if (courseInfo) {
      // 네이버 지도 생성
      const map = createNaverMap();
      courseInfo.placeDetailList.map((item, index) => {
        const marker = addNaverMapMarker(map, {
          latitude: item.placeYCoordinate,
          longitude: item.placeXCoordinate,
          eventList: [
            {
              eventName: "mouseover",
              eventListener: (e) => {
                e.pointerEvent.target.title = item.placeName;
              },
            },
            {
              eventName: "click",
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
          backgroundColor: "#000",
          borderColor: "#2db400",
          borderWidth: 5,
          anchorSkew: true,
          anchorColor: "#eee",
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
      const authorInfoUrl = `${process.env.REACT_APP_SERVER2_IP}/v1/view/info?id=author-id`;
      const authorInfoUConfig = {
        headers: {
          Authorization: courseInfo.authorId,
        },
        timeout: 3000,
      };
      axios
        .get(authorInfoUrl, authorInfoUConfig)
        .then((response) => {
          const data = response.data;
          console.log("authorInfoUrl", data);
          setAuthorInfo(data);
        })
        .catch((error) => {
          console.log(error);
          alert("코스 등록자명 가져오기 통신 실패");
        });
    }
  }, [courseInfo]);

  console.log("courseDetail", courseDetail);
  return (
    courseInfo && (
      <>
        {/* 코스 이미지 carousel */}
        <CourseImageCarousel courseDetail={courseInfo} />
        {/* 본문 */}
        {isDeleteModalOpened && (
          <DeleteModal
            onClickOpenDeleteModal={onClickOpenDeleteModal}
            isClickedCourseReviewChanged={isClickedCourseReviewChanged}
            setIsClickedCourseReviewChanged={setIsClickedCourseReviewChanged}
            clickedElement={clickedElement}
            courseId={courseInfo.id}
            courseReviewId={clickedCourseReviewIndex}
          />
        )}
        <UtilDiv
          justifyContent={"center"}
          width={"76.8rem"}
          padding={"0 0 7rem 0"}
          margin={"0 auto"}
        >
          {/* 코스 제목 및 날짜, 더보기 버튼 */}
          <CourseTitleAndDate
            courseDetail={courseInfo}
            onClickOpenDeleteModal={onClickOpenDeleteModal}
            onClickEditCourse={onClickEditCourse}
          />
          {/* 좋아요, 리뷰 숫자 */}
          <CourseContentWrap
            courseDetail={courseDetail}
            dataCategory="likeAndReview"
          />
          {/* 카테고리 */}
          <CourseContentWrap
            courseDetail={courseInfo}
            dataCategory="categoryLists"
          />
          {/* 해시태그 */}
          <CourseContentWrap
            courseDetail={courseInfo}
            dataCategory="hashtagList"
          />
          {/* 작성자 정보 */}
          {authorInfo && (
            <CourseContentWrap
              justifyContent={"center"}
              height={"10rem"}
              courseDetail={authorInfo}
              dataCategory="authorProfile"
            />
          )}

          {/* 코스에 등록된 장소를 표시하는 지도 */}
          <div
            style={{ width: "100%", height: "46rem" }}
            // src="https://file.mk.co.kr/meet/neds/2020/11/image_readtop_2020_1206310_16061899354442297.jpg"
            // alt="locations"
            id="map"
          />
          {/* { 
            courseInfo.placeDetailList.map((itme, index) => {
              createNaverMap("map", null, [{}])
            }) 
          } */}
          {/* 코스에 등록된 장소 순서 */}
          <CourseContentWrap
            justifyContent={"center"}
            height={"10rem"}
            courseDetail={courseInfo}
            dataCategory="courses"
          />
          {/* 코스 설명 */}
          <S.CourseDescription>{courseInfo.courseComment}</S.CourseDescription>
          {/* 공유, 좋아요 버튼 */}
          <CourseSharingAndLikeButton courseDetail={courseDetail} />
          {/* 코스 평균 평점 및 별 개수별 퍼센테이지 */}
          <CourseContentWrap
            justifyContent={"center"}
            height={"30rem"}
            courseDetail={courseDetail}
            dataCategory="averageRate"
          />
          {/* 리뷰 작성 폼 */}
          <CourseReviewRegisterForm courseDetail={courseDetail} />
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
    )
  );
}

export default CourseDetailForm;
