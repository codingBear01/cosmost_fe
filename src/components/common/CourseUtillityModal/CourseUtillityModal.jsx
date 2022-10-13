/* libraries */
import React from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
/* components */
import * as S from './styled';
/* icons */
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';

function CourseUtillityModal({
  top,
  right,
  onClickSetClickedCourseReviewEditButton,
  onClickDeleteCourseReview,
  i,
  courseReviewId,
}) {
  return (
    <S.StyledCourseUtillityModal top={top} right={right}>
      <S.CourseUtilityModalButton
        onClick={() => onClickSetClickedCourseReviewEditButton(i)}
      >
        <AiIcons.AiOutlineEdit />
        수정
      </S.CourseUtilityModalButton>
      <S.CourseUtilityModalButton
        onClick={() => onClickDeleteCourseReview(courseReviewId)}
      >
        <BsIcons.BsTrash />
        삭제
      </S.CourseUtilityModalButton>
    </S.StyledCourseUtillityModal>
  );
}

export default CourseUtillityModal;
