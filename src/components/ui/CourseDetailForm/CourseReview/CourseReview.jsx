/* libraries */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
/* components */
import * as S from './styled';
import { Button, CourseUtillityModal, ProfilePic } from '../../../';
/* functions */
import {
  checkIsLoggedIn,
  compareAuthorIdWithLoggedInUserId,
} from '../../../../store';
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from '../../../../style';
/* icons */
import * as AiIcons from 'react-icons/ai';
import * as GrIcons from 'react-icons/gr';
import * as FaIcons from 'react-icons/fa';

/* CONSTANTS */
const REVIEW_RATE_INDEXES = [0, 1, 2, 3, 4];

function CourseReview({
  courseDetail,
  courseReview,
  i,
  token,
  isLoggedIn,
  loggedInUserId,
  onClickOpenDeleteModal,
  isClickedCourseReviewChanged,
  setIsClickedCourseReviewChanged,
}) {
  const navigate = useNavigate();

  /* States*/
  const [clickedReviewIndex, setClickedReviewIndex] = useState(null);
  const [isReviewUtilityModalOpened, setIsReviewUtilityModalOpened] =
    useState(false);
  const [
    isCourseReviewEditTextareaOpened,
    setIsCourseReviewEditTextareaOpened,
  ] = useState(false);
  const [isYellowStar, setIsYellowStar] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  const [isLikedCourseReviewChanged, setIsLikedCourseReviewChanged] =
    useState(false);
  const [isLikedCourseReview, setIsLikedCourseReview] = useState([]);

  /* Refs */
  const edittedReviewContentRef = useRef();
  const edittedReviewRateRef = useRef();

  /* Variables */
  const courseId = courseReview.id;

  /* Handlers */
  /** 클릭된 review의 데이터를 저장하기 위한 핸들러. 클릭 시 해당 review의 index가 state에 저장되며, 리뷰 수정, 삭제 모달의 Open 여부가 반대로 변경되고, modalRef의 current값에 클릭된 타깃이 할당되며 코스 리뷰 수정 textarea가 닫힘. */
  const onClickSetClickedReview = (e, i) => {
    setClickedReviewIndex(i);
    setIsReviewUtilityModalOpened(!isReviewUtilityModalOpened);
    setIsCourseReviewEditTextareaOpened(false);
    modalRef.current = e.target;
  };

  /** 클릭 시 코스 리뷰 수정 textarea Open 여부를 변경하고, 코스 리뷰 버튼의 인덱스를 저장하는 핸들러 */
  const onClickSetClickedCourseReviewEditButton = (i) => {
    setIsCourseReviewEditTextareaOpened(!isCourseReviewEditTextareaOpened);
    setClickedReviewIndex(i);
  };

  /** 모달 바깥 영역 클릭 시 모달 닫는 함수 */
  const modalRef = useRef();
  useEffect(() => {
    const closeModal = (e) => {
      if (!modalRef.current?.contains(e.target)) {
        setIsReviewUtilityModalOpened(false);
      }
    };

    document.addEventListener('click', closeModal);

    return () => document.removeEventListener('click', closeModal);
  }, [isReviewUtilityModalOpened]);

  /** 평점을 설정하는 핸들러. 전달한 index 이하의 isYellowStar를 true로 만들고, index + 1을 평점으로 할당한다. */
  const onClickSetEdittedReviewRate = (index) => {
    let isYellowStarStates = [...isYellowStar];
    for (let i = 0; i < REVIEW_RATE_INDEXES.length; i++) {
      isYellowStarStates[i] = i <= index ? true : false;
    }
    setIsYellowStar(isYellowStarStates);
    edittedReviewRateRef.current = index + 1;
  };

  /** 코스 리뷰 작성 내용 및 평점 유효성 검증 */
  const checkEditCourseReviewValues = () => {
    if (!edittedReviewContentRef.current?.value) {
      toast.error('내용을 입력해주세요.');
      return false;
    }
    if (!edittedReviewRateRef.current) {
      edittedReviewRateRef.current = 1;
      return false;
    }
    return true;
  };

  /* APIs */
  /** 코스 리뷰 수정 */
  const onSubmitEditCourseReview = (courseId) => {
    if (!checkEditCourseReviewValues()) return;

    const token =
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDgiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY2NzQzNzM4NCwiZXhwIjozNzY2NzQzNzM4NH0.Tz-E2hPqW8zSC94tYcD2GzqMPZKvWWz76UJC2RmGpXw';
    // const url = `${process.env.REACT_APP_COMMENT_IP}/v1/comments/${courseId}`;
    const url = `${process.env.REACT_APP_API}/comments/${courseId}`;
    const body = {
      courseReviewContent: edittedReviewContentRef.current.value,
      rate: edittedReviewRateRef.current.value,
    };
    const config = {
      headers: {
        Authorization: token,
      },
      timeout: 3000,
    };

    axios
      .put(url, body, config)
      .then((response) => {
        edittedReviewContentRef.current.value = '';
        setIsCourseReviewEditTextareaOpened(false);
        setIsClickedCourseReviewChanged(!isClickedCourseReviewChanged);
      })
      .catch((error) => {
        new Error(error);
      });
  };

  /** 코스 리뷰 좋아요 등록 및 취소 */
  const handleLikeCourseReview = (id, type) => {
    if (!checkIsLoggedIn(token, isLoggedIn, navigate)) return;

    if (
      !compareAuthorIdWithLoggedInUserId(
        courseReview.reviewerId,
        loggedInUserId,
        toast
      )
    )
      return;

    console.log('ㅋㅋㅋㅋ');

    // const token =
    //   'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDgiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY2NzQzNzM4NCwiZXhwIjozNzY2NzQzNzM4NH0.Tz-E2hPqW8zSC94tYcD2GzqMPZKvWWz76UJC2RmGpXw';
    // const URLS = {
    //   // like: `${process.env.REACT_APP_POPULARITY2_IP}/v1/popularities`,
    //   like: `${process.env.REACT_APP_API}/popularities`,
    //   // unlike: `${process.env.REACT_APP_POPULARITY2_IP}/v1/popularities/${id}/review`,
    //   unlike: `${process.env.REACT_APP_API}/popularities/${id}/review`,
    // };
    // const body = {
    //   courseReviewId: id,
    //   type: 'courseReviewThumbsup',
    // };
    // const config = {
    //   headers: {
    //     Authorization: token,
    //   },
    //   timeout: 3000,
    // };

    // if (type === 'like') {
    //   axios
    //     .post(URLS[type], body, config)
    //     .then((response) =>
    //       setIsLikedCourseReviewChanged(!isLikedCourseReviewChanged)
    //     )
    //     .catch((error) => new Error(error));
    // } else {
    //   axios
    //     .delete(URLS[type], config)
    //     .then((response) =>
    //       setIsLikedCourseReviewChanged(!isLikedCourseReviewChanged)
    //     )
    //     .catch((error) => new Error(error));
    // }
  };

  /** 코스 리뷰 좋아요 여부 확인 */
  const likedCourseReview = (id) => {
    const token =
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDgiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY2NzQzNzM4NCwiZXhwIjozNzY2NzQzNzM4NH0.Tz-E2hPqW8zSC94tYcD2GzqMPZKvWWz76UJC2RmGpXw';
    // const url = `${process.env.REACT_APP_POPULARITY2_IP}/v1/popularities/${id}?type=review`;
    const url = `${process.env.REACT_APP_API}/popularities/${id}?type=review`;
    const config = {
      headers: {
        Authorization: token,
      },
      timeout: 3000,
    };

    axios
      .get(url, config)
      .then((response) => setIsLikedCourseReview(response.data))
      .catch((error) => new Error(error));
  };
  useEffect(() => {
    likedCourseReview(courseId);
  }, [isLikedCourseReviewChanged]);

  /** 코스 리뷰 좋아요 개수 */
  const courseReviewLikeCount = () => {};

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <S.CourseReviewWrap key={courseReview.id}>
        {/* 리뷰 작성자 프로필 */}
        <S.CourseReviewAuthorWrap>
          <ProfilePic
            // src={courseReview.author.profilePictureUrl}
            alt={courseReview.id}
            width={'8rem'}
            height={'8rem'}
          />
          <S.CourseReviewAuthorNickname>
            {/* {courseReview.author.nickname} */}
            닉네임
          </S.CourseReviewAuthorNickname>
        </S.CourseReviewAuthorWrap>
        <S.CourseReviewContentWrap>
          {/* 리뷰 평점, 작성일 */}
          <S.CourseReviewInnerContentWrap>
            <S.CourseReviewStar>
              {/* 수정 textarea 열렸을 시 보여줄 별들 */}
              {i === clickedReviewIndex && isCourseReviewEditTextareaOpened ? (
                <>
                  {REVIEW_RATE_INDEXES.map((item) => (
                    <div key={item}>
                      {isYellowStar[item] ? (
                        <AiIcons.AiFillStar
                          onClick={() => onClickSetEdittedReviewRate(item)}
                        />
                      ) : (
                        <AiIcons.AiOutlineStar
                          onClick={() => onClickSetEdittedReviewRate(item)}
                        />
                      )}
                    </div>
                  ))}
                </>
              ) : (
                // 평점 수정 textarea 닫혔을 때의 별들
                <>
                  {courseReview.rate === 5 ? (
                    <>
                      <AiIcons.AiFillStar />
                      <AiIcons.AiFillStar />
                      <AiIcons.AiFillStar />
                      <AiIcons.AiFillStar />
                      <AiIcons.AiFillStar />
                    </>
                  ) : courseReview.rate === 4 ? (
                    <>
                      <AiIcons.AiFillStar />
                      <AiIcons.AiFillStar />
                      <AiIcons.AiFillStar />
                      <AiIcons.AiFillStar />
                    </>
                  ) : courseReview.rate === 3 ? (
                    <>
                      <AiIcons.AiFillStar />
                      <AiIcons.AiFillStar />
                      <AiIcons.AiFillStar />
                    </>
                  ) : courseReview.rate === 2 ? (
                    <>
                      <AiIcons.AiFillStar />
                      <AiIcons.AiFillStar />
                    </>
                  ) : (
                    <AiIcons.AiFillStar />
                  )}
                </>
              )}
            </S.CourseReviewStar>
            <S.CourseReviewCreatedDateWrap>
              {/* 코스 리뷰 작성일 */}
              <span>{courseReview.createdAt}</span>
              {/* 더보기 버튼 */}
              {token &&
                isLoggedIn &&
                loggedInUserId === courseDetail.authorId && (
                  <GrIcons.GrMoreVertical
                    onClick={(e) => onClickSetClickedReview(e, i)}
                  />
                )}
              {/* 코스 리뷰 수정, 삭제 모달 */}
              {isReviewUtilityModalOpened && (
                <CourseUtillityModal
                  top={'2.5rem'}
                  right={'0.1rem'}
                  onClickOpenDeleteModal={onClickOpenDeleteModal}
                  onClickSetClickedCourseReviewEditButton={
                    onClickSetClickedCourseReviewEditButton
                  }
                  clickedElement={'courseReview'}
                  index={i}
                />
              )}
            </S.CourseReviewCreatedDateWrap>
          </S.CourseReviewInnerContentWrap>
          {/* 좋아요 수, 좋아요 버튼 */}
          <S.CourseReviewInnerContentWrap>
            <S.CourseReviewLikeCountWrap>
              <FaIcons.FaRegThumbsUp />
              <span>{courseReview.likeCount}</span>
            </S.CourseReviewLikeCountWrap>
            {!isLikedCourseReview[0] && (
              <S.CourseReviewLikeButton
                type="button"
                onClick={() => handleLikeCourseReview(courseId, 'like')}
              >
                <FaIcons.FaRegThumbsUp />
              </S.CourseReviewLikeButton>
            )}
            {isLikedCourseReview[0] &&
              isLikedCourseReview[0].courseReviewId === courseId && (
                <S.CourseReviewLikeButton
                  type="button"
                  onClick={() => handleLikeCourseReview(courseId, 'unlike')}
                >
                  <FaIcons.FaThumbsUp style={{ color: 'white' }} />
                </S.CourseReviewLikeButton>
              )}
          </S.CourseReviewInnerContentWrap>
          {/* 리뷰 내용 */}
          {isCourseReviewEditTextareaOpened ? (
            <S.CourseReviewEditTextarea
              ref={edittedReviewContentRef}
              maxLength={500}
              defaultValue={courseReview.courseReviewContent}
            ></S.CourseReviewEditTextarea>
          ) : (
            <S.CourseReviewDescription>
              {courseReview.courseReviewContent}
            </S.CourseReviewDescription>
          )}
          {/* 리뷰 수정, 취소 버튼 */}
          {isCourseReviewEditTextareaOpened && (
            <S.CourseReviewEditButtons>
              <Button
                type={'button'}
                width={'6rem'}
                height={'3.5rem'}
                margin={'0 1rem'}
                fontSize={fs.s}
                color={color.black}
                bgColor={color.grey}
                hoveredBgColor={color.darkGrey}
                onClick={() => onClickSetClickedCourseReviewEditButton(i)}
              >
                취소
              </Button>
              <Button
                type={'button'}
                width={'6rem'}
                height={'3.5rem'}
                margin={'0 0 0 1rem'}
                fontSize={fs.s}
                color={color.white}
                bgColor={color.darkBlue}
                hoveredBgColor={color.navy}
                onClick={() => onSubmitEditCourseReview(courseDetail.id)}
              >
                수정
              </Button>
            </S.CourseReviewEditButtons>
          )}
        </S.CourseReviewContentWrap>
      </S.CourseReviewWrap>
    </>
  );
}

export default CourseReview;
