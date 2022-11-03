/* libraries */
import React, { useState, useEffect, useRef } from 'react';
/* components */
import * as S from './styled';
import { StyledCourseContentWrap } from './../CourseContentWrap/styled';
import { CourseUtillityModal } from '../../../';
/* icons */
import * as GrIcons from 'react-icons/gr';
import { getCoursePointAverage } from '../../../../store';

function CourseTitleAndDate({
  courseDetail,
  onClickOpenDeleteModal,
  onClickEditCourse,
}) {
  /* States */
  /* 코스 및 리뷰 수정, 삭제 Modal Open useState */
  const [isCourseUtilityModalOpened, setIsCourseUtilityModalOpened] =
    useState(false);

  /* 코스 평균 평점 state*/
  const [coursePointAverageArr, setCoursePointAverageArr] = useState('');

  /* Handlers */
  /* 코스 및 리뷰 수정, 삭제 Modal의 Open 여부를 조작하는 핸들러. 클릭 시 Open 여부를 반대로 변경 */
  const onClickOpenCourseUtilityModal = () => {
    setIsCourseUtilityModalOpened(!isCourseUtilityModalOpened);
  };

  /* 모달 바깥 영역 클릭 시 모달 닫는 함수 */
  const modalRef = useRef();

  useEffect(() => {
    getCoursePointAverage(courseDetail.id, (result) => {
      setCoursePointAverageArr(result.data);
    });
  }, []);

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
      courseDetail={courseDetail}
      dataCategory="titleAndDate"
    >
      <StyledCourseContentWrap style={{ borderBottom: 'none' }}>
        <S.CourseTitle>{courseDetail.courseTitle}</S.CourseTitle>
        <S.CourseAverageRate>
          ⭐ {coursePointAverageArr && coursePointAverageArr[0]?.courseAvgRate}
        </S.CourseAverageRate>
      </StyledCourseContentWrap>
      <S.CourseCreatedDateAndMoreIconWrap>
        <S.CourseCreatedDate>{courseDetail.createAt}</S.CourseCreatedDate>
        <div ref={modalRef}>
          <GrIcons.GrMoreVertical onClick={onClickOpenCourseUtilityModal} />
        </div>
      </S.CourseCreatedDateAndMoreIconWrap>
      {isCourseUtilityModalOpened && (
        <CourseUtillityModal
          top={'8rem'}
          right={'2rem'}
          onClickOpenDeleteModal={onClickOpenDeleteModal}
          onClickSetClickedCourseReviewEditButton={onClickEditCourse}
          clickedElement={'course'}
        />
      )}
    </StyledCourseContentWrap>
  );
}

export default CourseTitleAndDate;
