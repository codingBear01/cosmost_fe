/* libraries */
import React from 'react';
/* components */
import * as S from './styled';
/* icons */
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';

function CourseUtillityModal({
  top,
  right,
  onClickOpenDeleteModal,
  onClickSetClickedCourseReviewEditButton,
  clickedElement,
  index,
}) {
  return (
    <S.StyledCourseUtillityModal top={top} right={right}>
      <S.CourseUtilityModalButton
        type="button"
        onClick={() => onClickSetClickedCourseReviewEditButton(index)}
      >
        <AiIcons.AiOutlineEdit />
        수정
      </S.CourseUtilityModalButton>
      <S.CourseUtilityModalButton
        type="button"
        onClick={() => onClickOpenDeleteModal(clickedElement, index)}
      >
        <BsIcons.BsTrash />
        삭제
      </S.CourseUtilityModalButton>
    </S.StyledCourseUtillityModal>
  );
}

export default CourseUtillityModal;
