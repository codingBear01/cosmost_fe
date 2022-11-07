/* libraries */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
/* components */
import * as S from './styled';
import { StyledCourseContentWrap } from './../CourseContentWrap/styled';
/* APIs */
import { deleteCourse } from '../../../../apis';
/* icons */
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
/* static data */
import { COLOR_LIST as color } from '../../../../style';

function CourseTitleAndDate({
  courseDetail,
  courseAverageRate,
  token,
  loggedInUserId,
}) {
  const navigate = useNavigate();

  /* States */
  const [isDeleteButtonClicked, setIsDeleteButtonClicked] = useState(false);

  /* Handlers */
  /** 일정 시간 경과 후 삭제 버튼을 닫는 핸들러 */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDeleteButtonClicked(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isDeleteButtonClicked]);

  return (
    <StyledCourseContentWrap
      justifyContent={'space-between'}
      courseDetail={courseDetail}
      dataCategory="titleAndDate"
    >
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        draggable
        pauseOnHover={false}
        theme="light"
        limit={1}
      />
      <StyledCourseContentWrap style={{ borderBottom: 'none' }}>
        <S.CourseTitle>{courseDetail.courseTitle}</S.CourseTitle>
        <S.CourseAverageRate>
          ⭐ {courseAverageRate && courseAverageRate[0]?.courseAvgRate}
        </S.CourseAverageRate>
      </StyledCourseContentWrap>
      <S.CourseCreatedDateAndMoreIconWrap>
        <S.CourseCreatedDate>{courseDetail.createAt}</S.CourseCreatedDate>
        {/* 수정, 삭제 버튼 */}
        {loggedInUserId === courseDetail.authorId && (
          <S.UtilityButtonWrap>
            <S.UtilityButton
              type="button"
              onClick={() => navigate(`/course-edit/${courseDetail.id}`)}
            >
              <FiIcons.FiEdit />
            </S.UtilityButton>
            {!isDeleteButtonClicked && (
              <S.UtilityButton
                type="button"
                onClick={() => setIsDeleteButtonClicked(true)}
              >
                <BsIcons.BsTrash />
              </S.UtilityButton>
            )}
            {isDeleteButtonClicked && (
              <S.UtilityButton
                type="button"
                onClick={() =>
                  deleteCourse(courseDetail.id, navigate, toast, token)
                }
              >
                <BiIcons.BiErrorAlt style={{ color: `${color.red}` }} />
              </S.UtilityButton>
            )}
          </S.UtilityButtonWrap>
        )}
      </S.CourseCreatedDateAndMoreIconWrap>
    </StyledCourseContentWrap>
  );
}

export default CourseTitleAndDate;
