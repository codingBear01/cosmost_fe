/* libraries */
import React from 'react';
import { SmallProfilePic } from '../../..';
/* components */
import * as S from './styled';
/* static data */
import { FONT_SIZE_LIST as fs } from '../../../../style';
/* icons */
import * as AiIcons from 'react-icons/ai';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Course({ course }) {
  const [courseRate, setCourseRate] = useState('');
  const [courseAuthor, setcourseAuthor] = useState('');

  useEffect(() => {
    if (course) {
      //코스 평균 평점 가져오기
      {
        const url = `${process.env.REACT_APP_COMMENT_IP}/v1/view?rate=average&course=${course.id}`;
        const config = {
          timeout: 3000,
        };

        axios
          .get(url, config)
          .then((result) => {
            setCourseRate(result.data);
          })
          .catch((error) => {
            new Error(error);
          });
      }
      //코스 작성자 정보 가져오기
      {
        const url = `${process.env.REACT_APP_AUTH_IP}/v1/view/info?id=author-id`;
        const config = {
          headers: {
            Authorization: course.authorId,
          },
          timeout: 3000,
        };
        axios
          .get(url, config)
          .then((result) => {
            setcourseAuthor(result.data);
          })
          .catch((error) => {
            new Error(error);
          });
      }
    }
  }, []);

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
        <S.CourseRate>
          ⭐ {courseRate && courseRate[0].courseAvgRate}
        </S.CourseRate>
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
            src={courseAuthor && courseAuthor.profileImgSaveUrl}
            alt={courseAuthor && courseAuthor.nickname}
          />
          <S.CourseAuthorNickname>
            {courseAuthor && courseAuthor.nickname}
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
