import React from 'react';
/* components */
import * as S from './styled';
/* icons */
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';

function CourseUtillityModal({ top, right }) {
  return (
    <S.StyledCourseUtillityModal top={top} right={right}>
      <S.CourseUtilityModalButton>
        <AiIcons.AiOutlineEdit />
        수정
      </S.CourseUtilityModalButton>
      <S.CourseUtilityModalButton>
        <BsIcons.BsTrash />
        삭제
      </S.CourseUtilityModalButton>
    </S.StyledCourseUtillityModal>
  );
}

export default CourseUtillityModal;
