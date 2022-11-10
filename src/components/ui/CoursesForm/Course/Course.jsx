/* libraries */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
/* recoil */
import { useRecoilState } from 'recoil';
import { searchingTypeAtom } from '../../../../store';
/* components */
import * as S from './styled';
import { SmallProfilePic } from '../../..';
/* static data */
import { FONT_SIZE_LIST as fs } from '../../../../style';
/* APIs */
import {
  fetchSingleCourseView,
  fetchCourseAuthor,
  fetchCourseLikeCount,
} from '../../../../apis';
/* icons */
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

function Course({ course, courseId }) {
  const [courseAuthor, setCourseAuthor] = useState('');
  const [courseState, setCourseState] = useState('');
  const [courseLikeCount, setCourseLikeCount] = useState('');
  const [, setSearchingType] = useRecoilState(searchingTypeAtom);

  /* APIs */
  useEffect(() => {
    if (course) {
      fetchSingleCourseView(courseId, setCourseState);
      fetchCourseLikeCount(courseId, setCourseLikeCount);
    }
  }, []);
  useEffect(() => {
    if (courseState) {
      fetchCourseAuthor(courseState.authorId, setCourseAuthor);
    }
  }, [courseState]);

  return (
    courseState && (
      <S.StyledCourse>
        {/* 코스 이미지 */}
        <Link to={`/course-detail/${courseId}`}>
          <S.CourseFeaturedImage
            src={courseState.readPlaceImgResponseList[0]?.placeImgUrl}
            alt={courseState.courseTitle}
          />
        </Link>
        {/* 코스 제목, 평점 */}
        <S.CourseContentWrap justifyContent={'space-between'}>
          <S.CourseTitle>
            {courseState.courseTitle.substring(0, 20)}
            {courseState.courseTitle.length > 20 && '...'}
          </S.CourseTitle>
          <S.CoursePopularityWrap>
            <S.CourseRate>
              <FaIcons.FaRegThumbsUp />
              {courseLikeCount && courseLikeCount}
            </S.CourseRate>
            <S.CourseRate>⭐ {courseState.courseAvgRate}</S.CourseRate>
          </S.CoursePopularityWrap>
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
            <Link
              key={hashTag.id}
              to={`/courses/hashtag?keyword=${hashTag.keyword}`}
              onClick={() => setSearchingType('search')}
            >
              <S.CourseTag>#{hashTag?.keyword}</S.CourseTag>
            </Link>
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
          {courseState.readPlaceDetailResponseList.map((item, index, arr) => (
            <S.CourseName key={item.id}>
              {item.placeOrder}. {item.placeName}{' '}
              {arr.length - 1 !== index && (
                <AiIcons.AiOutlineArrowRight
                  key={item.id}
                  style={{ fontSize: `${fs.s}` }}
                />
              )}
            </S.CourseName>
          ))}
        </S.CourseOrderWrap>
      </S.StyledCourse>
    )
  );
}

export default Course;
