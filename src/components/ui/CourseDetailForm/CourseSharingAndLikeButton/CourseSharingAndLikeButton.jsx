/* libraries */
import React, { useState, useEffect, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
/* components */
import * as S from './styled';
import { StyledCourseContentWrap } from '../CourseContentWrap/styled';
import { CourseSharingModal } from '../';
/* functions */
import {
  checkIsLoggedIn,
  compareAuthorIdWithLoggedInUserId,
} from '../../../../store';
/* icons */
import * as BiIcons from 'react-icons/bi';
import * as FaIcons from 'react-icons/fa';

/* 현재 접속한 페이지 url */
const currentUrl = window.location.href;

function CourseSharingAndLikeButton({
  courseDetail,
  token,
  isLoggedIn,
  loggedInUserId,
}) {
  const navigate = useNavigate();
  /* States */
  const [isSharingCourseModalOpened, setIsSharingCourseModalOpened] =
    useState(false);
  const [isLikedCourseChanged, setIsLikedCourseChanged] = useState(false);
  const [isLikedCourse, setIsLikedCourse] = useState([]);

  /* Handlers */
  /**  코스 공유하기 Modal Open 여부를 조작하는 핸들러. 클릭 시 Open 여부를 반대로 변경 */
  const onClickOpenSharingCourseModal = () => {
    setIsSharingCourseModalOpened(!isSharingCourseModalOpened);
  };

  /** 현재 페이지의 url을 복사하는 핸들러 */
  const onClickCopyCurrentPageUrl = () => {
    window.navigator.clipboard.writeText(currentUrl);
    toast.success('url을 복사했습니다.');
  };

  /* Hooks */
  /** 모달 바깥 영역 클릭 시 모달 닫는 함수 */
  const modalRef = useRef();
  useEffect(() => {
    const closeModal = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setIsSharingCourseModalOpened(false);
      }
    };

    document.addEventListener('click', closeModal);

    return () => document.removeEventListener('click', closeModal);
  }, [isSharingCourseModalOpened]);

  /* APIs */
  /** 코스 좋아요 등록 및 취소 */
  const handleLikeCourse = (id, type) => {
    if (!checkIsLoggedIn(token, isLoggedIn, navigate)) return;

    if (
      !compareAuthorIdWithLoggedInUserId(
        courseDetail.authorId,
        loggedInUserId,
        toast
      )
    )
      return;

    // const token =
    //   'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDciLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY2NzM4ODU3MSwiZXhwIjozNzY2NzM4ODU3MX0.cO_Te3glaePLtb3-VZr_XfpM-zJbN7_JUxPfjA3zWYo';
    const URLS = {
      // like: `${process.env.REACT_APP_POPULARITY2_IP}/v1/popularities`,
      like: `${process.env.REACT_APP_API}/popularities`,
      // unlike: `${process.env.REACT_APP_POPULARITY2_IP}/v1/popularities/${id}/cosmost`,
      unlike: `${process.env.REACT_APP_API}/popularities/${id}/cosmost`,
    };
    const url = URLS[type];
    const body = {
      courseId: id,
      type: 'course',
    };
    const config = {
      headers: {
        Authorization: token,
      },
      timeout: 3000,
    };

    if (type === 'like') {
      axios
        .post(url, body, config)
        .then((response) => setIsLikedCourseChanged(!isLikedCourseChanged))
        .catch((error) => new Error(error));
    } else {
      axios
        .delete(url, config)
        .then((response) => setIsLikedCourseChanged(!isLikedCourseChanged))
        .catch((error) => new Error(error));
    }
  };

  /** 코스 좋아요 여부 확인 */
  const likedCourse = () => {
    const token =
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDciLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY2NzM4ODU3MSwiZXhwIjozNzY2NzM4ODU3MX0.cO_Te3glaePLtb3-VZr_XfpM-zJbN7_JUxPfjA3zWYo';
    // const url = `${process.env.REACT_APP_POPULARITY2_IP}/v1/popularities/${courseDetail.id}?type=cosmost`;
    const url = `${process.env.REACT_APP_API}/popularities/${courseDetail.id}?type=cosmost`;
    const config = {
      headers: {
        Authorization: token,
      },
      timeout: 3000,
    };

    axios
      .get(url, config)
      .then((response) => {
        setIsLikedCourse(response.data);
      })
      .catch((error) => new Error(error));
  };
  useEffect(() => {
    likedCourse();
  }, [isLikedCourseChanged]);

  return (
    // 공유, 좋아요 버튼
    <StyledCourseContentWrap
      justifyContent={'flex-end'}
      height={'10rem'}
      courseDetail={courseDetail}
    >
      {isSharingCourseModalOpened && (
        <CourseSharingModal
          courseDetail={courseDetail}
          onClickCopyCurrentPageUrl={onClickCopyCurrentPageUrl}
        />
      )}
      {/* 공유하기 버튼 */}
      <S.ShareAndLikeButton
        ref={modalRef}
        type="button"
        onClick={onClickOpenSharingCourseModal}
      >
        <BiIcons.BiShare />
      </S.ShareAndLikeButton>
      {/* 좋아요 버튼 */}
      {!isLikedCourse[0] && (
        <S.ShareAndLikeButton
          type="button"
          onClick={() => handleLikeCourse(courseDetail.id, 'like')}
        >
          <FaIcons.FaRegThumbsUp />
        </S.ShareAndLikeButton>
      )}
      {isLikedCourse[0] && (
        <S.ShareAndLikeButton
          type="button"
          onClick={() => handleLikeCourse(courseDetail.id, 'unlike')}
        >
          <FaIcons.FaThumbsUp style={{ color: 'white' }} />
        </S.ShareAndLikeButton>
      )}
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
    </StyledCourseContentWrap>
  );
}

export default CourseSharingAndLikeButton;
