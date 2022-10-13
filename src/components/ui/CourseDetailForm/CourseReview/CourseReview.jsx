/* libraries */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
/* components */
import * as S from './styled';
import { Button, CourseUtillityModal, ProfilePic } from '../../../';
/* static data */
import { COURSE_REIVEWS } from '../../../../store';
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from '../../../../style';
/* icons */
import * as AiIcons from 'react-icons/ai';
import * as GrIcons from 'react-icons/gr';
import * as FaIcons from 'react-icons/fa';

/* CONSTANTS */
const REVIEW_RATE_INDEXES = [0, 1, 2, 3, 4];

function CourseReview({ courseData }) {
  /* States and Refs */
  /* 클릭된 review의 index를 저장하는 state */
  const [reviewIndex, setReviewIndex] = useState(null);
  /* reviewUtilityModal의 Open 여부 state */
  const [isReviewUtilityModalOpened, setIsReviewUtilityModalOpened] =
    useState(false);
  /* review update textarea Open 여부 state */
  const [
    isCourseReviewEditTextareaOpened,
    setIsCourseReviewEditTextareaOpened,
  ] = useState(false);
  /* 리뷰 수정에 쓰이는 states 및 ref */
  const [isYellowStar, setIsYellowStar] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  const edittedReviewContentRef = useRef();
  const edittedReviewRateRef = useRef();

  /* Handlers */
  /* 클릭된 review의 데이터를 저장하기 위한 핸들러. 클릭 시 해당 review의 index가 state에 저장되며, 리뷰 수정, 삭제 모달의 Open 여부가 반대로 변경되고, modalRef의 current값에 클릭된 타깃이 할당되며 코스 리뷰 수정 textarea가 닫힘. */
  const onClickSetClickedReview = (e, i) => {
    setReviewIndex(i);
    setIsReviewUtilityModalOpened(!isReviewUtilityModalOpened);
    setIsCourseReviewEditTextareaOpened(false);
    modalRef.current = e.target;
  };

  /* 클릭 시 코스 리뷰 수정 textarea Open 여부를 변경하고, 코스 리뷰 버튼의 인덱스를 저장하는 핸들러. */
  const onClickSetClickedCourseReviewEditButton = (i) => {
    setIsCourseReviewEditTextareaOpened(!isCourseReviewEditTextareaOpened);
    setReviewIndex(i);
  };

  /* 모달 바깥 영역 클릭 시 모달 닫는 함수 */
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

  /* 평점을 설정하는 핸들러. 전달한 index 이하의 isYellowStar를 true로 만들고, index + 1을 평점으로 할당한다. */
  const onClickSetEdittedReviewRate = (index) => {
    let isYellowStarStates = [...isYellowStar];
    for (let i = 0; i < REVIEW_RATE_INDEXES.length; i++) {
      isYellowStarStates[i] = i <= index ? true : false;
    }
    setIsYellowStar(isYellowStarStates);
    edittedReviewRateRef.current = index + 1;
  };

  /* 코스 리뷰 내용 및 평점 유효성 검증 */
  const checkEditCourseReviewValues = () => {
    if (!edittedReviewContentRef.current.value) {
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
  /* 코스 리뷰 수정 */
  const onSubmitEditCourseReview = (e, courseReview) => {
    e.preventDefault();

    if (!checkEditCourseReviewValues()) return;

    const editCourseReviewUrl = `http://10.10.10.189:8081/v1/comments/${courseReview.id}`;
    const temporaryData = {
      courseId: courseData.id,
      reviewerId: 1,
      courseReviewContent: edittedReviewContentRef.current.value,
      rate: edittedReviewRateRef.current,
    };

    axios
      .put(editCourseReviewUrl, temporaryData)
      .then((response) => {
        console.log(response);
        edittedReviewContentRef.current.value = '';
        setIsCourseReviewEditTextareaOpened(false);
        toast.success('코스 리뷰가 수정되었습니다.');
      })
      .catch((error) => {
        console.log(error);
        toast.error('오류가 발생했습니다. 관리자에게 문의하세요.');
      });
  };

  /* 코스 리뷰 삭제 */
  const onClickDeleteCourseReview = (courseReviewId) => {
    const deleteCourseReviewUrl = `http://10.10.10.189:8081/v1/comments/${courseReviewId}/review`;
    axios
      .delete(deleteCourseReviewUrl)
      .then((response) => {
        console.log(response);
        toast.success('코스 리뷰가 삭제되었습니다.');
      })
      .catch((error) => {
        console.log(error);
        toast.error('오류가 발생했습니다. 관리자에게 문의하세요.');
      });
  };

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
      {COURSE_REIVEWS &&
        COURSE_REIVEWS.map((item, i) => (
          <S.CourseReviewWrap
            key={item.id}
            onSubmit={(e) => onSubmitEditCourseReview(e, item, i)}
          >
            {/* 리뷰 작성자 프로필 */}
            <S.CourseReviewAuthorWrap>
              <ProfilePic
                src={item.author.profilePictureUrl}
                alt={item.author.nickname}
                width={'8rem'}
                height={'8rem'}
              />
              <S.CourseReviewAuthorNickname>
                {item.author.nickname}
              </S.CourseReviewAuthorNickname>
            </S.CourseReviewAuthorWrap>
            <S.CourseReviewContentWrap>
              {/* 리뷰 평점, 작성일 */}
              <S.CourseReviewInnerContentWrap>
                <S.CourseReviewStar>
                  {/* 수정 textarea 열렸을 시 보여줄 별들 */}
                  {i === reviewIndex && isCourseReviewEditTextareaOpened ? (
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
                      {item.isYellowStarDisplayed.map((item, i) => (
                        <div key={i}>{item && <AiIcons.AiFillStar />}</div>
                      ))}
                    </>
                  )}
                </S.CourseReviewStar>
                <S.CourseReviewCreatedDateWrap>
                  <span>{item.createdDate}</span>
                  {/* 더보기 버튼 */}
                  <GrIcons.GrMoreVertical
                    onClick={(e) => onClickSetClickedReview(e, i)}
                  />
                  {/* 코스 리뷰 수정, 삭제 모달 */}
                  {i === reviewIndex && isReviewUtilityModalOpened && (
                    <CourseUtillityModal
                      top={'2.5rem'}
                      right={'0.1rem'}
                      onClickSetClickedCourseReviewEditButton={
                        onClickSetClickedCourseReviewEditButton
                      }
                      onClickDeleteCourseReview={onClickDeleteCourseReview}
                      i={i}
                      courseReviewId={item.id}
                    />
                  )}
                </S.CourseReviewCreatedDateWrap>
              </S.CourseReviewInnerContentWrap>
              {/* 좋아요 수, 좋아요 버튼 */}
              <S.CourseReviewInnerContentWrap>
                <S.CourseReviewLikeCountWrap>
                  <FaIcons.FaRegThumbsUp />
                  <span>{item.likeCount}</span>
                </S.CourseReviewLikeCountWrap>
                <S.CourseReviewLikeButton type="submit">
                  <FaIcons.FaRegThumbsUp />
                </S.CourseReviewLikeButton>
              </S.CourseReviewInnerContentWrap>
              {/* 리뷰 내용 */}
              {i === reviewIndex && isCourseReviewEditTextareaOpened ? (
                <S.CourseReviewEditTextarea
                  ref={edittedReviewContentRef}
                  maxLength={500}
                  defaultValue={item.description}
                ></S.CourseReviewEditTextarea>
              ) : (
                <S.CourseReviewDescription>
                  {item.description}
                </S.CourseReviewDescription>
              )}
              {/* 리뷰 수정, 취소 버튼 */}
              {i === reviewIndex && isCourseReviewEditTextareaOpened ? (
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
                    type={'submit'}
                    width={'6rem'}
                    height={'3.5rem'}
                    margin={'0 0 0 1rem'}
                    fontSize={fs.s}
                    color={color.white}
                    bgColor={color.darkBlue}
                    hoveredBgColor={color.navy}
                  >
                    수정
                  </Button>
                </S.CourseReviewEditButtons>
              ) : (
                <></>
              )}
            </S.CourseReviewContentWrap>
          </S.CourseReviewWrap>
        ))}
    </>
  );
}

export default CourseReview;
