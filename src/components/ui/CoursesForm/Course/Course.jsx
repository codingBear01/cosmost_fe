/* libraries */
import React from 'react';
import { SmallProfilePic } from '../../..';
/* components */
import * as S from './styled';
/* static data */
import { FONT_SIZE_LIST as fs } from '../../../../style';
/* icons */
import * as AiIcons from 'react-icons/ai';

function Course({ course }) {
  return (
    <S.StyledCourse>
      {/* 코스 이미지 */}
      <S.CourseFeaturedImage
        src={course.readPlaceImgResponseList[0]?.placeImgUrl}
        alt={course?.courseTitle}
      />
      {/* 코스 제목, 평점 */}
      <S.CourseContentWrap justifyContent={'space-between'}>
        <S.CourseTitle>{course?.courseTitle}</S.CourseTitle>
        {/* <S.CourseRate>⭐ {course.rate}</S.CourseRate> */}
      </S.CourseContentWrap>
      {/* 코스 카테고리 */}
      <S.CourseContentWrap>
        <S.CourseTag>
          {course.categoryLists[0]?.locationCategoryName}
        </S.CourseTag>
        <S.CourseTag>{course.categoryLists[0]?.themeCategoryName}</S.CourseTag>
      </S.CourseContentWrap>
      {/* 코스 해시태그 */}
      <S.CourseContentWrap>
        {course.hashtagList.map((hashTag) => (
          <S.CourseTag key={hashTag.id}>{hashTag?.keyword}</S.CourseTag>
        ))}
      </S.CourseContentWrap>
      {/* 코스 작성자, 작성일 */}
      <S.CourseContentWrap justifyContent={'space-between'}>
        <S.CourseAuthorWrap>
          <SmallProfilePic
          // src={course.author.profilPictureUrl}
          // alt={course.author.nickname}
          />
          <S.CourseAuthorNickname>
            {/* {course.author.nickname} */}
          </S.CourseAuthorNickname>
        </S.CourseAuthorWrap>
        <S.CourseCreatedDate>{course.createAt}</S.CourseCreatedDate>
      </S.CourseContentWrap>
      {/* 코스 순서 */}
      <S.CourseOrderWrap>
        {course.readPlaceDetailResponseList.map((item) => (
          <div key={item.id}>
            <S.CourseName>{item.placeName}</S.CourseName>
            {item.id !== course.readPlaceDetailResponseList.length && (
              <AiIcons.AiOutlineArrowRight style={{ fontSize: `${fs.s}` }} />
            )}
          </div>
        ))}
      </S.CourseOrderWrap>
    </S.StyledCourse>
  );
}

export default Course;
