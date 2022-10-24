/* libraries */
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
/* recoil */
import { useRecoilState } from "recoil";
import { createNaverMap, isOrderingModalOpenedAtom } from "../../../store";
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
import axios from "axios";
import { addNaverMapMarker } from "../../../store/function";

function CourseDetailForm() {
  /* States */
  const [isOrderingModalOpened, setIsOrderingModalOpened] = useRecoilState(
    isOrderingModalOpenedAtom
  );

  // URL로부터 전달받은 코스 ID
  const { id } = useParams();
  // 백엔드로부터 응답받은 데이터
  const [responseData, setResponseData] = useState(null);
  // 내비게이트
  const navigate = useNavigate();

  const [isDeleteModalOpened, setIsDeleteModalOpened] = useState(false);
  const [clickedElement, setClickedElement] = useState(null);
  const [clickedCourseReviewIndex, setClickedCourseReviewIndex] =
    useState(null);
  const [isClickedCourseReviewChanged, setIsClickedCourseReviewChanged] =
    useState(false);

  /* Handlers */
  const onClickOpenOrderingModal = () => {
    setIsOrderingModalOpened(!isOrderingModalOpened);
  };
  const onClickOpenDeleteModal = (clicked, i) => {
    setIsDeleteModalOpened(!isDeleteModalOpened);
    setClickedElement(clicked);
    setClickedCourseReviewIndex(i);
  };

  useEffect(() => {
    const url = `http://10.10.10.211:9002/v1/cosmosts/${id}`;
    const config = { timeout: 1000 };
    console.log(url);
    axios
      .get(url, config)
      .then((response) => {
        const data = response.data;
        setResponseData(data);
      })
      .catch((error) => {
        console.log(error);
        alert("백엔드 통신 실패");
        navigate("/");
      });
  }, []);

  // 네이버 지도를 생성하는 useEffect.
  useEffect(() => {
    if (responseData) {
      const map = createNaverMap();
      responseData.placeDetailList.map((item, index) => {
        addNaverMapMarker(map, {
          latitude: item.placeYCoordinate,
          longitude: item.placeXCoordinate,
          eventName: "mouseover",
          eventHandler: (e) => {
            e.pointerEvent.target.title = item.placeName;
          },
        });
      });
    }
  }, [responseData]);

  console.log("courseDetail", courseDetail);
  return (
    responseData && (
      <>
        {/* 코스 이미지 carousel */}
        <CourseImageCarousel courseDetail={responseData} />
        {/* 본문 */}
        {isDeleteModalOpened && (
          <DeleteModal
            onClickOpenDeleteModal={onClickOpenDeleteModal}
            isClickedCourseReviewChanged={isClickedCourseReviewChanged}
            setIsClickedCourseReviewChanged={setIsClickedCourseReviewChanged}
            clickedElement={clickedElement}
            courseId={responseData.id}
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
            courseDetail={responseData}
            onClickOpenDeleteModal={onClickOpenDeleteModal}
          />
          {/* 좋아요, 리뷰 숫자 */}
          <CourseContentWrap
            courseDetail={courseDetail}
            dataCategory="likeAndReview"
          />
          {/* 카테고리 */}
          <CourseContentWrap
            courseDetail={responseData}
            dataCategory="categoryLists"
          />
          {/* 해시태그 */}
          <CourseContentWrap
            courseDetail={responseData}
            dataCategory="hashtagList"
          />
          {/* 작성자 정보 */}
          <CourseContentWrap
            justifyContent={"center"}
            height={"10rem"}
            courseDetail={courseDetail}
            dataCategory="authorProfile"
          />
          {/* 코스에 등록된 장소를 표시하는 지도 */}
          <div
            style={{ width: "100%", height: "46rem" }}
            // src="https://file.mk.co.kr/meet/neds/2020/11/image_readtop_2020_1206310_16061899354442297.jpg"
            // alt="locations"
            id="map"
          />
          {/* { 
            responseData.placeDetailList.map((itme, index) => {
              createNaverMap("map", null, [{}])
            }) 
          } */}
          {/* 코스에 등록된 장소 순서 */}
          <CourseContentWrap
            justifyContent={"center"}
            height={"10rem"}
            courseDetail={responseData}
            dataCategory="courses"
          />
          {/* 코스 설명 */}
          <S.CourseDescription>
            {responseData.courseComment}
          </S.CourseDescription>
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
