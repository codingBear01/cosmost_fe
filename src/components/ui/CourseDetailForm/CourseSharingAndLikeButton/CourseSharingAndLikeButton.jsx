/* libraries */
import React, { useState, useEffect, useRef } from 'react';
/* components */
import * as S from './styled';
import { StyledCourseContentWrap } from '../CourseContentWrap/styled';
import { CourseSharingModal } from '../';
/* icons */
import * as BiIcons from 'react-icons/bi';
import * as FaIcons from 'react-icons/fa';

function CourseSharingAndLikeButton({ courseData }) {
  /* States */
  /* 코스 공유하기 Modal Open useState */
  const [isSharingCourseModalOpened, setIsSharingCourseModalOpened] =
    useState(false);

  /* Handlers */
  /* 코스 공유하기 Modal Open 여부를 조작하는 핸들러. 클릭 시 Open 여부를 반대로 변경 */
  const onClickOpenSharingCourseModal = () => {
    setIsSharingCourseModalOpened(!isSharingCourseModalOpened);
  };

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

  return (
    // 공유, 좋아요 버튼
    <StyledCourseContentWrap
      justifyContent={'flex-end'}
      height={'10rem'}
      courseData={courseData}
    >
      {isSharingCourseModalOpened && (
        <CourseSharingModal courseData={courseData} />
      )}
      <S.ShareAndLikeButton
        ref={modalRef}
        onClick={onClickOpenSharingCourseModal}
      >
        <BiIcons.BiShare />
      </S.ShareAndLikeButton>
      <S.ShareAndLikeButton>
        <FaIcons.FaRegThumbsUp />
      </S.ShareAndLikeButton>
    </StyledCourseContentWrap>
  );
}

export default CourseSharingAndLikeButton;
