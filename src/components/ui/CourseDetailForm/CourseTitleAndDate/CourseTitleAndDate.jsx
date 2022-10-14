/* libraries */
import React, { useState, useEffect, useRef } from 'react';
/* components */
import * as S from './styled';
import { StyledCourseContentWrap } from './../CourseContentWrap/styled';
import { CourseUtillityModal, DeleteModal } from '../../../';
/* static data */
import { COLOR_LIST as color } from '../../../../style';
/* icons */
import * as GrIcons from 'react-icons/gr';

function CourseTitleAndDate({
  courseData,
  isDeleteModalOpened,
  onClickOpenDeleteModal,
}) {
  /* States */
  /* 코스 및 리뷰 수정, 삭제 Modal Open useState */
  const [isCourseUtilityModalOpened, setIsCourseUtilityModalOpened] =
    useState(false);

  /* Handlers */
  /* 코스 및 리뷰 수정, 삭제 Modal의 Open 여부를 조작하는 핸들러. 클릭 시 Open 여부를 반대로 변경 */
  const onClickOpenCourseUtilityModal = () => {
    setIsCourseUtilityModalOpened(!isCourseUtilityModalOpened);
  };

  /* 모달 바깥 영역 클릭 시 모달 닫는 함수 */
  const modalRef = useRef();
  useEffect(() => {
    const closeModal = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setIsCourseUtilityModalOpened(false);
      }
    };

    document.addEventListener('click', closeModal);

    return () => document.removeEventListener('click', closeModal);
  }, [isCourseUtilityModalOpened]);

  return (
    <StyledCourseContentWrap
      justifyContent={'space-between'}
      courseData={courseData}
      dataCategory="titleAndDate"
    >
      <StyledCourseContentWrap style={{ borderBottom: 'none' }}>
        <S.CourseTitle>{courseData.title}</S.CourseTitle>
        <S.CourseAverageRate>⭐ {courseData.rate.average}</S.CourseAverageRate>
      </StyledCourseContentWrap>
      <S.CourseCreatedDateAndMoreIconWrap>
        <S.CourseCreatedDate>{courseData.createdDate}</S.CourseCreatedDate>
        <div ref={modalRef}>
          <GrIcons.GrMoreVertical onClick={onClickOpenCourseUtilityModal} />
        </div>
        {isDeleteModalOpened && (
          <DeleteModal
            onClickOpenDeleteModal={onClickOpenDeleteModal}
            courseId={courseData.id}
            clickedElement={'course'}
          />
        )}
      </S.CourseCreatedDateAndMoreIconWrap>
      {isCourseUtilityModalOpened && (
        <CourseUtillityModal
          top={'8rem'}
          right={'2rem'}
          onClickOpenDeleteModal={onClickOpenDeleteModal}
        />
      )}
    </StyledCourseContentWrap>
  );
}

export default CourseTitleAndDate;
