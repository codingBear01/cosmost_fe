/* libraries */
import React, { useState, useEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";

/* components */
import * as S from "./styled";
import { StyledCourseContentWrap } from "../CourseContentWrap/styled";
import { CourseSharingModal } from "../";
/* icons */
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";

/* 현재 접속한 페이지 url */
const currentUrl = window.location.href;

function CourseSharingAndLikeButton({ courseDetail }) {
  /* States */
  /* 코스 공유하기 Modal Open useState */
  const [isSharingCourseModalOpened, setIsSharingCourseModalOpened] =
    useState(false);

  /* Handlers */
  /* 코스 공유하기 Modal Open 여부를 조작하는 핸들러. 클릭 시 Open 여부를 반대로 변경 */
  const onClickOpenSharingCourseModal = () => {
    setIsSharingCourseModalOpened(!isSharingCourseModalOpened);
  };
  /* 현재 페이지의 url을 복사하는 핸들러 */
  const onClickCopyCurrentPageUrl = () => {
    window.navigator.clipboard.writeText(currentUrl);
    toast.success("url을 복사하였습니다.");
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

    document.addEventListener("click", closeModal);

    return () => document.removeEventListener("click", closeModal);
  }, [isSharingCourseModalOpened]);

  return (
    // 공유, 좋아요 버튼
    <StyledCourseContentWrap
      justifyContent={"flex-end"}
      height={"10rem"}
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
      <S.ShareAndLikeButton>
        <FaIcons.FaRegThumbsUp />
      </S.ShareAndLikeButton>
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
