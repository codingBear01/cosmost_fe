/* libraries */
import React, { useState, useEffect, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
/* recoil */
import { useRecoilState } from 'recoil';
import { loginStateAtom, userAtom } from '../../../../store';
/* components */
import * as S from './styled';
import { StyledCourseContentWrap } from '../CourseContentWrap/styled';
import { CourseSharingModal } from '../';
/* icons */
import * as BiIcons from 'react-icons/bi';
import * as FaIcons from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

/* 현재 접속한 페이지 url */
const currentUrl = window.location.href;

function CourseSharingAndLikeButton({ courseDetail, token }) {
  const [isLoggedIn] = useRecoilState(loginStateAtom);
  const navigate = useNavigate();
  const location = useLocation();
  /* States */
  const [isSharingCourseModalOpened, setIsSharingCourseModalOpened] =
    useState(false);
  const [isLikedCourseChanged, setIsLikedCourseChanged] = useState(false);
  const [isLikedCourse, setIsLikedCourse] = useState([]);
  const [user] = useRecoilState(userAtom);
  const loggedInUserId = user?.id;
  const authorId = courseDetail?.authorId;

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
  const getIsLikedCourse = () => {
    const token =
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDciLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY2NzM4ODU3MSwiZXhwIjozNzY2NzM4ODU3MX0.cO_Te3glaePLtb3-VZr_XfpM-zJbN7_JUxPfjA3zWYo';
    const url = `${process.env.REACT_APP_POPULARITY2_IP}/v1/popularities/${courseDetail.id}?type=cosmost`;
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
    getIsLikedCourse();
  }, [isLikedCourseChanged]);

  const likeCourse = () => {
    const token =
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDciLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY2NzM4ODU3MSwiZXhwIjozNzY2NzM4ODU3MX0.cO_Te3glaePLtb3-VZr_XfpM-zJbN7_JUxPfjA3zWYo';
    const url = `${process.env.REACT_APP_POPULARITY2_IP}/v1/popularities`;
    const body = {
      courseId: courseDetail.id,
      type: 'course',
    };
    const config = {
      headers: {
        Authorization: token,
      },
      timeout: 3000,
    };

    axios
      .post(url, body, config)
      .then((response) => {
        setIsLikedCourseChanged(!isLikedCourseChanged);
      })
      .catch((error) => new Error(error));
  };

  const unLikeCourse = () => {
    const token =
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDciLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY2NzM4ODU3MSwiZXhwIjozNzY2NzM4ODU3MX0.cO_Te3glaePLtb3-VZr_XfpM-zJbN7_JUxPfjA3zWYo';
    const url = `${process.env.REACT_APP_POPULARITY2_IP}/v1/popularities/${courseDetail.id}/cosmost`;
    const config = {
      headers: {
        Authorization: token,
      },
      timeout: 3000,
    };

    axios
      .delete(url, config)
      .then((response) => {
        setIsLikedCourseChanged(!isLikedCourseChanged);
      })
      .catch((error) => new Error(error));
  };

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
        <S.ShareAndLikeButton type="button" onClick={likeCourse}>
          <FaIcons.FaRegThumbsUp />
        </S.ShareAndLikeButton>
      )}
      {isLikedCourse[0] && (
        <S.ShareAndLikeButton type="button" onClick={unLikeCourse}>
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
