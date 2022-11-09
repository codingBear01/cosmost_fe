/* libraries */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
/* recoil */
import { useRecoilState } from 'recoil';
/* components */
import * as S from './styled';
import { Button, ProfilePic } from '../../../';
/* APIs */
import {
  handleLikeCourseReview,
  likedCourseReview,
  fetchCourseReviewLikeCount,
  getCourseAuthor,
  updateCourseReview,
  deleteCourseReview,
} from '../../../../apis';
/* functions */
import {
  checkIsLoggedIn,
  compareAuthorIdWithLoggedInUserId,
  isLoggedInAtom,
} from '../../../../store';
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from '../../../../style';
/* icons */
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';

/* CONSTANTS */
const REVIEW_RATE_INDEXES = [0, 1, 2, 3, 4];

function CourseReview({
  courseDetail,
  courseReview,
  i,
  token,
  loggedInUserId,
}) {
  const navigate = useNavigate();

  /* States*/
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
  const [courseReviewLikeCount, setCourseReviewLikeCount] = useState('');
  const [courseReviewAuthor, setCourseReviewAuthor] = useState('');
  const [isDeleteButtonClicked, setIsDeleteButtonClicked] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(true);
  const [isLoggedIn] = useRecoilState(isLoggedInAtom);

  /* Refs */
  const edittedReviewContentRef = useRef();
  const edittedReviewRateRef = useRef();

  /* Handlers */
  /** 클릭 시 코스 리뷰 수정 textarea Open 여부를 변경하고, 코스 리뷰 버튼의 인덱스를 저장하는 핸들러 */
  const onClickSetClickedCourseReviewEditButton = (i) => {
    setIsCourseReviewEditTextareaOpened(!isCourseReviewEditTextareaOpened);
  };

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
      return true;
    }
    return true;
  };

  /** 일정 시간 경과 후 삭제 버튼을 닫는 핸들러 */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDeleteButtonClicked(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isDeleteButtonClicked]);

  /* APIs */
  /** 코스 리뷰 좋아요 여부, 코스 리뷰 좋아요 개수 조회 */
  useEffect(() => {
    likedCourseReview(courseReview.id, setIsLikedCourseReview, token);
    fetchCourseReviewLikeCount(courseReview.id, setCourseReviewLikeCount);
  }, [isLikedCourseReviewChanged]);

  /** 코스 리뷰 작성자 정보 조회 */
  useEffect(() => {
    getCourseAuthor(courseReview.reviewerId, setCourseReviewAuthor);
  }, []);

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
        limit={1}
      />
      {isDisplayed && (
        <>
          <S.CourseReviewWrap key={courseReview.id}>
            {/* 리뷰 작성자 프로필 */}
            <S.CourseReviewAuthorWrap>
              <ProfilePic
                src={courseReviewAuthor && courseReviewAuthor.profileImgSaveUrl}
                alt={courseReviewAuthor && courseReviewAuthor.nickname}
                width={'8rem'}
                height={'8rem'}
              />
              <S.CourseReviewAuthorNickname>
                {courseReviewAuthor && courseReviewAuthor.nickname}
              </S.CourseReviewAuthorNickname>
            </S.CourseReviewAuthorWrap>
            <S.CourseReviewContentWrap>
              {/* 리뷰 평점, 작성일 */}
              <S.CourseReviewInnerContentWrap>
                <S.CourseReviewStar>
                  {/* 수정 textarea 열렸을 시 보여줄 별들 */}
                  {isCourseReviewEditTextareaOpened && (
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
                  )}
                  {!isCourseReviewEditTextareaOpened &&
                    courseReview.rate === 5 && (
                      <>
                        <AiIcons.AiFillStar />
                        <AiIcons.AiFillStar />
                        <AiIcons.AiFillStar />
                        <AiIcons.AiFillStar />
                        <AiIcons.AiFillStar />
                      </>
                    )}
                  {!isCourseReviewEditTextareaOpened &&
                    courseReview.rate === 4 && (
                      <>
                        <AiIcons.AiFillStar />
                        <AiIcons.AiFillStar />
                        <AiIcons.AiFillStar />
                        <AiIcons.AiFillStar />
                      </>
                    )}
                  {!isCourseReviewEditTextareaOpened &&
                    courseReview.rate === 3 && (
                      <>
                        <AiIcons.AiFillStar />
                        <AiIcons.AiFillStar />
                        <AiIcons.AiFillStar />
                      </>
                    )}
                  {!isCourseReviewEditTextareaOpened &&
                    courseReview.rate === 2 && (
                      <>
                        <AiIcons.AiFillStar />
                        <AiIcons.AiFillStar />
                      </>
                    )}
                  {!isCourseReviewEditTextareaOpened &&
                    courseReview.rate === 1 && (
                      <>
                        <AiIcons.AiFillStar />
                      </>
                    )}
                </S.CourseReviewStar>
                <S.CourseReviewCreatedDateWrap>
                  {/* 코스 리뷰 작성일 */}
                  <span>{courseReview.createdAt}</span>
                  {/* 수정, 삭제 버튼 */}
                  {isLoggedIn && loggedInUserId === courseReview.reviewerId && (
                    <S.UtilityButtonWrap>
                      <S.UtilityButton
                        type="button"
                        onClick={() =>
                          onClickSetClickedCourseReviewEditButton(i)
                        }
                      >
                        <FiIcons.FiEdit />
                      </S.UtilityButton>
                      {!isDeleteButtonClicked && (
                        <S.UtilityButton
                          type="button"
                          onClick={() => setIsDeleteButtonClicked(true)}
                        >
                          <BsIcons.BsTrash />
                        </S.UtilityButton>
                      )}
                      {isDeleteButtonClicked && (
                        <S.UtilityButton
                          type="button"
                          onClick={() =>
                            deleteCourseReview(
                              courseDetail,
                              setIsDisplayed,
                              toast,
                              token
                            )
                          }
                        >
                          <BiIcons.BiErrorAlt
                            style={{ color: `${color.red}` }}
                          />
                        </S.UtilityButton>
                      )}
                    </S.UtilityButtonWrap>
                  )}
                </S.CourseReviewCreatedDateWrap>
              </S.CourseReviewInnerContentWrap>
              {/* 좋아요 수, 좋아요 버튼 */}
              <S.CourseReviewInnerContentWrap>
                <S.CourseReviewLikeCountWrap>
                  <FaIcons.FaRegThumbsUp />
                  <span>{courseReviewLikeCount && courseReviewLikeCount}</span>
                </S.CourseReviewLikeCountWrap>
                {!isLikedCourseReview[0] && (
                  <S.CourseReviewLikeButton
                    type="button"
                    onClick={() =>
                      handleLikeCourseReview(
                        courseReview.id,
                        'like',
                        checkIsLoggedIn,
                        navigate,
                        compareAuthorIdWithLoggedInUserId,
                        courseReview,
                        loggedInUserId,
                        toast,
                        setIsLikedCourseReviewChanged,
                        isLikedCourseReviewChanged,
                        token
                      )
                    }
                  >
                    <FaIcons.FaRegThumbsUp />
                  </S.CourseReviewLikeButton>
                )}
                {isLikedCourseReview[0] &&
                  isLikedCourseReview[0].courseReviewId === courseReview.id && (
                    <S.CourseReviewLikeButton
                      type="button"
                      onClick={() =>
                        handleLikeCourseReview(
                          courseReview.id,
                          'unlike',
                          checkIsLoggedIn,
                          navigate,
                          compareAuthorIdWithLoggedInUserId,
                          courseReview,
                          loggedInUserId,
                          toast,
                          setIsLikedCourseReviewChanged,
                          isLikedCourseReviewChanged,
                          token
                        )
                      }
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
              {/* 리뷰 수정, 삭제 버튼 */}
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
                    onClick={() =>
                      updateCourseReview(
                        checkEditCourseReviewValues,
                        courseDetail,
                        edittedReviewContentRef,
                        edittedReviewRateRef,
                        token,
                        setIsCourseReviewEditTextareaOpened
                      )
                    }
                  >
                    수정
                  </Button>
                </S.CourseReviewEditButtons>
              )}
            </S.CourseReviewContentWrap>
          </S.CourseReviewWrap>
        </>
      )}
    </>
  );
}

export default CourseReview;
