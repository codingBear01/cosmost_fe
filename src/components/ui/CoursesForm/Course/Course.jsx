/* libraries */
import React from 'react';
import { Link } from 'react-router-dom';
/* components */
import * as S from './styled';
import { SmallProfilePic } from '../../..';
/* static data */
import { FONT_SIZE_LIST as fs } from '../../../../style';
/* APIs */
import { getSingleCourseView, getCourseAuthor } from '../../../../apis';
/* icons */
import * as AiIcons from 'react-icons/ai';
import { useState } from 'react';
import { useEffect } from 'react';

function Course({ course }) {
  const [courseAuthor, setCourseAuthor] = useState('');
  const [courseState, setCourseState] = useState('');

  useEffect(() => {
    if (course) {
      const courseId = course.id || course.courseId;
      getSingleCourseView(courseId, setCourseState);
    }
  }, []);

  useEffect(() => {
    if (courseState) {
      //코스 작성자 정보 업데이트
      getCourseAuthor(courseState.authorId, setCourseAuthor);
    }
  }, [courseState]);

  console.log("courseState", courseState);
  
  return (
    courseState && (
      <S.StyledCourse>
        {/* 코스 이미지 */}
        <S.CourseFeaturedImage
          src={courseState.readPlaceImgResponseList[0].placeImgUrl}
          alt={courseState.courseTitle}
        />
        {/* 코스 제목, 평점 */}
        <S.CourseContentWrap justifyContent={'space-between'}>
          <S.CourseTitle>{courseState.courseTitle}</S.CourseTitle>
          <S.CourseRate>⭐ {courseState.courseAvgRate}</S.CourseRate>
        </S.CourseContentWrap>
        {/* 코스 카테고리 */}
        <S.CourseContentWrap>
          <S.CourseTag>
            {courseState.categoryLists[0]?.locationCategoryName}
          </S.CourseTag>
          <S.CourseTag>
            {courseState.categoryLists[0]?.themeCategoryName}
          </S.CourseTag>
        </S.CourseContentWrap>
        {/* 코스 해시태그 */}
        <S.CourseContentWrap>
          {courseState.hashtagList.map((hashTag) => (
            <S.CourseTag key={hashTag.id}>{hashTag?.keyword}</S.CourseTag>
          ))}
        </S.CourseContentWrap>
        {/* 코스 작성자, 작성일 */}
        <S.CourseContentWrap justifyContent={'space-between'}>
          <S.CourseAuthorWrap>
            <SmallProfilePic
              src={courseAuthor && courseAuthor.profileImgSaveUrl}
              alt={courseAuthor && courseAuthor.nickname}
            />
            <S.CourseAuthorNickname>
              {courseAuthor && courseAuthor.nickname}
            </S.CourseAuthorNickname>
          </S.CourseAuthorWrap>
          <S.CourseCreatedDate>{courseState.createAt}</S.CourseCreatedDate>
        </S.CourseContentWrap>
        {/* 코스 순서 */}
        <S.CourseOrderWrap>
          {courseState.readPlaceDetailResponseList.map((item) => (
            <div key={item.id}>
              <S.CourseName>{item.placeName}</S.CourseName>
              {item.id !== courseState.readPlaceDetailResponseList.length && (
                <AiIcons.AiOutlineArrowRight style={{ fontSize: `${fs.s}` }} />
              )}
            </div>
          ))}
        </S.CourseOrderWrap>
      </S.StyledCourse>
    )
  );
}

export default Course;
