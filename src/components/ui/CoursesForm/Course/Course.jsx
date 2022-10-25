/* libraries */
import React from 'react';
import { SmallProfilePic } from '../../..';
/* components */
import * as S from './styled';
/* static data */
import { FONT_SIZE_LIST as fs } from '../../../../style';
/* icons */
import * as AiIcons from 'react-icons/ai';

function Course({ item }) {
  return (
    <S.StyledCourse>
      {/* 코스 이미지 */}
      <S.CourseFeaturedImage src={item.courseImageUrl} alt={item.title} />
      {/* 코스 제목, 평점 */}
      <S.CourseContentWrap justifyContent={'space-between'}>
        <S.CourseTitle>제목</S.CourseTitle>
        <S.CourseRate>⭐ {item.rate}</S.CourseRate>
      </S.CourseContentWrap>
      {/* 코스 카테고리 */}
      <S.CourseContentWrap>
        {item.categories.map((category) => (
          <S.CourseTag key={category.id}>{category.name}</S.CourseTag>
        ))}
      </S.CourseContentWrap>
      {/* 코스 해시태그 */}
      <S.CourseContentWrap>
        {item.hashTags.map((hashTag) => (
          <S.CourseTag key={hashTag.id}>{hashTag.name}</S.CourseTag>
        ))}
      </S.CourseContentWrap>
      {/* 코스 작성자, 작성일 */}
      <S.CourseContentWrap justifyContent={'space-between'}>
        <S.CourseAuthorWrap>
          <SmallProfilePic
            src={item.author.profilPictureUrl}
            alt={item.author.nickname}
          />
          <S.CourseAuthorNickname>
            {item.author.nickname}
          </S.CourseAuthorNickname>
        </S.CourseAuthorWrap>
        <S.CourseCreatedDate>{item.createdDate}</S.CourseCreatedDate>
      </S.CourseContentWrap>
      {/* 코스 순서 */}
      <S.CourseOrderWrap>
        {item.courseOrder.map((order) => (
          <div key={order.id}>
            <S.CourseName>{order.name}</S.CourseName>
            {order.id !== item.courseOrder.length && (
              <AiIcons.AiOutlineArrowRight style={{ fontSize: `${fs.s}` }} />
            )}
          </div>
        ))}
      </S.CourseOrderWrap>
    </S.StyledCourse>
  );
}

export default Course;
