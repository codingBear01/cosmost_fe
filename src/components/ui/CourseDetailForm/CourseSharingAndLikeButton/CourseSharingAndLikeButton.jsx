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
import axios from "axios";
import { useRecoilState } from "recoil";
import { loginStateAtom } from "../../../../store";
import { useNavigate } from "react-router-dom";

/* 현재 접속한 페이지 url */
const currentUrl = window.location.href;

function CourseSharingAndLikeButton({ courseDetail }) {
  const [isLoggedIn] = useRecoilState(loginStateAtom);
  const navigate = useNavigate();
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

  // 좋아요 버튼을 클릭했을 시 호출할 핸들러
  const onClickLikeButton = (e) => {
    if (isLoggedIn) {
      const url = `${process.env.REACT_APP_SERVER3_IP}/v1/popularities`;
      const loginToken = localStorage.getItem("token");
      const config = {
        header: {
          Authorization: loginToken,
        },
        timeout: 3000,
      };

      axios
        .post(url, {}, config)
        .then((reponse) => {
          console.log(reponse);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      navigate("/login");
    }

    // axios.post
  };

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
      <S.ShareAndLikeButton onClick={onClickLikeButton}>
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
