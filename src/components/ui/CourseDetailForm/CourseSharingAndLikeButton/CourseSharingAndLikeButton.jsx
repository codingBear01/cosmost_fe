/* libraries */
import React, { useState, useEffect, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
/* recoil */
import { loginStateAtom } from '../../../../store';
/* components */
import * as S from './styled';
import { StyledCourseContentWrap } from '../CourseContentWrap/styled';
import { CourseSharingModal } from '../';
/* icons */
import * as BiIcons from 'react-icons/bi';
import * as FaIcons from 'react-icons/fa';
import { useRecoilState } from 'recoil';

/* 현재 접속한 페이지 url */
const currentUrl = window.location.href;

function CourseSharingAndLikeButton({ courseDetail }) {
  const [isLoggedIn] = useRecoilState(loginStateAtom);
  const navigate = useNavigate();

  /* States */
  const [isSharingCourseModalOpened, setIsSharingCourseModalOpened] =
    useState(false);
  const [isCourseLiked, setIsCourseLiked] = useState(false);

  /* Handlers */
  /* 코스 공유하기 Modal Open 여부를 조작하는 핸들러. 클릭 시 Open 여부를 반대로 변경 */
  const onClickOpenSharingCourseModal = () => {
    setIsSharingCourseModalOpened(!isSharingCourseModalOpened);
  };
  /* 현재 페이지의 url을 복사하는 핸들러 */
  const onClickCopyCurrentPageUrl = () => {
    window.navigator.clipboard.writeText(currentUrl);
    toast.success('url을 복사했습니다.');
  };

  /* Hooks */
  /* 모달 바깥 영역 클릭 시 모달 닫는 함수 */
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
  const likeCourse = () => {
    setIsCourseLiked(!isCourseLiked);

    const url = `${process.env.REACT_APP_POPULARITY_IP}/v1/popularities`;
    const body = {
      // authId: 1,
      courseId: courseDetail.id,
      type: 'course',
    };
    const config = { timeout: 3000 };

    axios
      .post(url, body, config)
      .then((response) => {})
      .catch((error) => new Error(error));
  };

  const unLikeCourse = () => {
    setIsCourseLiked(!isCourseLiked);
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
      <S.ShareAndLikeButton
        ref={modalRef}
        onClick={onClickOpenSharingCourseModal}
      >
        <BiIcons.BiShare />
      </S.ShareAndLikeButton>
      {/* 좋아요 버튼 */}
      {!isCourseLiked && (
        <S.ShareAndLikeButton onClick={likeCourse}>
          <FaIcons.FaRegThumbsUp />
        </S.ShareAndLikeButton>
      )}
      {isCourseLiked && (
        <S.ShareAndLikeButton onClick={unLikeCourse}>
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
