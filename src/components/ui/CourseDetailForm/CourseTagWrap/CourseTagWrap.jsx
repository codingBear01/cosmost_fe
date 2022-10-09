/* libraries */
import React from 'react';
/* components */
import * as S from './styled';
import { CourseTag } from '..';
import { Button, ProfilePic } from '../../../';
/* icons */
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as GrIcons from 'react-icons/gr';
import * as BiIcons from 'react-icons/bi';
import * as FiIcons from 'react-icons/fi';
import * as GiIcons from 'react-icons/gi';
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from '../../../../style';

function CourseTagWrap({ justifyContent, height, courseData, dataCategory }) {
  return (
    // 코스 제목, 평점, 작성일, 더보기 버튼
    <S.StyledCourseTagWrap justifyContent={justifyContent} height={height}>
      {dataCategory === 'titleAndDate' ? (
        <>
          <S.StyledCourseTagWrap>
            <S.CourseTitle>{courseData.title}</S.CourseTitle>
            <S.CourseAverageRate>
              ⭐ {courseData.averageRate}
            </S.CourseAverageRate>
          </S.StyledCourseTagWrap>
          <S.CourseCreatedDateAndMoreIconWrap>
            <S.CourseCreatedDate>{courseData.createdDate}</S.CourseCreatedDate>
            <GrIcons.GrMoreVertical />
          </S.CourseCreatedDateAndMoreIconWrap>
        </>
      ) : dataCategory === 'likeAndReview' ? (
        // 좋아요, 리뷰 숫자
        <>
          <CourseTag>
            <FaIcons.FaRegThumbsUp />
            <span>{courseData.likeCount}</span>
          </CourseTag>
          <CourseTag>
            <MdIcons.MdOutlineRateReview />
            <span>{courseData.reviewCount}</span>
          </CourseTag>
        </>
      ) : dataCategory === 'authorProfile' ? (
        // 작성자 프로필
        <>
          <ProfilePic
            src={courseData.author.profilePictureUrl}
            alt={courseData.author.nickname}
            width={'8rem'}
            height={'8rem'}
          />
          <S.AutorProfileVerticalWrap marginRight={'3rem'}>
            <S.AutorNickname>{courseData.author.nickname}</S.AutorNickname>
            <Button
              type={'button'}
              width={'6rem'}
              height={'3rem'}
              fontSize={fs.s}
              color={color.black}
              bgColor={color.lightGreen}
              hoveredBgColor={color.darkGreen}
            >
              팔로우
            </Button>
          </S.AutorProfileVerticalWrap>
          <S.AutorProfileVerticalWrap>
            <BiIcons.BiCrown />
            <span>{courseData.author.ranking}</span>
          </S.AutorProfileVerticalWrap>
          <S.AutorProfileVerticalWrap>
            <FiIcons.FiUsers />
            <span>{courseData.author.followers}</span>
          </S.AutorProfileVerticalWrap>
          <S.AutorProfileVerticalWrap>
            <GiIcons.GiRoad />
            <span>{courseData.author.courses}</span>
          </S.AutorProfileVerticalWrap>
        </>
      ) : (
        courseData[`${dataCategory}`].map((item) => (
          // 카테고리 or 해시태그
          <CourseTag key={item.id}>
            <span>
              {dataCategory === 'hashTags' && '#'}
              {item.name}
            </span>
          </CourseTag>
        ))
      )}
    </S.StyledCourseTagWrap>
  );
}

export default CourseTagWrap;
