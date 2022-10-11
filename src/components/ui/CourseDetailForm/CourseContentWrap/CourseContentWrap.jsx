/* libraries */
import React, { useState } from 'react';
/* components */
import * as S from './styled';
import { CourseContent } from '..';
import { Button, CourseUtillityModal, ProfilePic } from '../../..';
/* icons */
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as GrIcons from 'react-icons/gr';
import * as BiIcons from 'react-icons/bi';
import * as FiIcons from 'react-icons/fi';
import * as GiIcons from 'react-icons/gi';
import * as AiIcons from 'react-icons/ai';
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from '../../../../style';

function CourseContentWrap({
  justifyContent,
  height,
  courseData,
  dataCategory,
}) {
  /* States */
  /* 코스 및 리뷰 수정, 삭제 Modal Open useState */
  const [isCoureUtilityModalOpened, setIsCoureUtilityModalOpened] =
    useState(false);

  /* Handlers */
  /* 코스 및 리뷰 수정, 삭제 Modal의 Open 여부를 조작하는 핸들러. 클릭 시 Open 여부를 반대로 변경 */
  const onClickOpenCourseUtilityModal = () => {
    setIsCoureUtilityModalOpened(!isCoureUtilityModalOpened);
  };

  return (
    // dataCategory에 따라 다른 컴포넌트 렌더링됨
    <S.StyledCourseContentWrap justifyContent={justifyContent} height={height}>
      {dataCategory === 'titleAndDate' ? (
        // 코스 제목, 평점, 작성일, 더보기 버튼
        <>
          <S.StyledCourseContentWrap style={{ borderBottom: 'none' }}>
            <S.CourseTitle>{courseData.title}</S.CourseTitle>
            <S.CourseAverageRate>
              ⭐ {courseData.rate.average}
            </S.CourseAverageRate>
          </S.StyledCourseContentWrap>
          <S.CourseCreatedDateAndMoreIconWrap>
            <S.CourseCreatedDate>{courseData.createdDate}</S.CourseCreatedDate>
            <GrIcons.GrMoreVertical onClick={onClickOpenCourseUtilityModal} />
          </S.CourseCreatedDateAndMoreIconWrap>
          {isCoureUtilityModalOpened && (
            <CourseUtillityModal top={'8rem'} right={'2rem'} />
          )}
        </>
      ) : dataCategory === 'likeAndReview' ? (
        // 좋아요, 리뷰 숫자
        <>
          <CourseContent>
            <FaIcons.FaRegThumbsUp />
            <span>{courseData.likeCount}</span>
          </CourseContent>
          <CourseContent>
            <MdIcons.MdOutlineRateReview />
            <span>{courseData.reviewCount}</span>
          </CourseContent>
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
      ) : dataCategory === 'courses' ? (
        // 코스 순서
        <>
          {courseData.uploadedLocations.map((item) => (
            <div key={item.id}>
              <S.CourseName>
                {item.id}. {item.name}
              </S.CourseName>
              {item.id !== courseData.uploadedLocations.length && (
                <AiIcons.AiOutlineArrowRight style={{ fontSize: `${fs.s}` }} />
              )}
            </div>
          ))}
        </>
      ) : dataCategory === 'shareAndLikeButton' ? (
        // 공유, 좋아요 버튼
        <>
          <S.ShareAndLikeButton>
            <AiIcons.AiOutlineShareAlt />
          </S.ShareAndLikeButton>
          <S.ShareAndLikeButton>
            <FaIcons.FaRegThumbsUp />
          </S.ShareAndLikeButton>
        </>
      ) : dataCategory === 'averageRate' ? (
        // 코스 평균 평점 및 별 개수별 퍼센테이지
        <>
          {/* 코스 평균 평점 */}
          <S.AverageRate>
            <span>평균 평점</span>
            <span>{courseData.rate.average}</span>
          </S.AverageRate>
          <ul>
            {/* 별 개수별 퍼센테이지 */}
            {courseData.rate.stars.map((item) => (
              <S.CourseRateStarWrap key={item.id}>
                <S.CourseRateStar>{item.star}</S.CourseRateStar>
                <S.CourseRateStarPercentGaugeWrap>
                  <S.CourseRateStarPercentGauge
                    width={`${item.percent}%`}
                  ></S.CourseRateStarPercentGauge>
                </S.CourseRateStarPercentGaugeWrap>
                <S.CourseRateStarPercent>
                  {item.percent}%
                </S.CourseRateStarPercent>
              </S.CourseRateStarWrap>
            ))}
          </ul>
        </>
      ) : (
        courseData[`${dataCategory}`].map((item) => (
          // 카테고리 or 해시태그
          <CourseContent key={item.id}>
            <p>
              {dataCategory === 'hashTags' && '#'}
              {item.name}
            </p>
          </CourseContent>
        ))
      )}
    </S.StyledCourseContentWrap>
  );
}

export default CourseContentWrap;
