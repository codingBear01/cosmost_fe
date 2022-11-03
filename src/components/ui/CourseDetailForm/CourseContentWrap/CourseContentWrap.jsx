/* libraries */
import React from 'react';
import { Link } from 'react-router-dom';
/* components */
import * as S from './styled';
import { CourseContent } from '..';
import { Button, ProfilePic } from '../../..';
/* icons */
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as BiIcons from 'react-icons/bi';
import * as FiIcons from 'react-icons/fi';
import * as GiIcons from 'react-icons/gi';
import * as AiIcons from 'react-icons/ai';
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from '../../../../style';
import { useState } from 'react';
import { useEffect } from 'react';
import {
  getCourseGoodCount,
  getCoursePointAverage,
  getCourseReviews,
} from '../../../../store';
import { useParams } from 'react-router-dom';

function CourseContentWrap({
  justifyContent,
  height,
  courseDetail,
  author,
  dataCategory,
  authorCourseCount,
}) {
  const courseID = useParams().id;

  /* 코스의 리뷰 정보를 나타내는 state*/
  const [courseReviews, setCourseReviews] = useState([]);

  /* 코스 리뷰 평균 점수를 나타내는 state*/
  const [courseReviewAvgPoint, setCourseReviewAvgPoint] = useState('');

  /* 코스 평균 평점 state*/
  const [coursePointAverageArr, setCoursePointAverageArr] = useState('');

  /* 코스 좋아요 수 state*/
  const [courseGoodCount, setCourseGoodCount] = useState('');

  useEffect(() => {
    getCourseReviews(courseID, (result) => {
      setCourseReviews(result.data);
      setCourseReviewAvgPoint(
        result.data[0].rateAllTypeList[0]
          .match(/\[(.*)\]/)[1]
          .split(', ')
          .reverse()
      );
    });
    getCoursePointAverage(courseID, setCoursePointAverageArr);
    getCourseGoodCount(courseID, setCourseGoodCount);
  }, []);

  return (
    // dataCategory에 따라 다른 컴포넌트 렌더링됨
    <S.StyledCourseContentWrap justifyContent={justifyContent} height={height}>
      {dataCategory === 'likeAndReview' ? (
        // 좋아요, 리뷰 숫자
        <>
          <CourseContent>
            <FaIcons.FaRegThumbsUp />
            <span>{courseGoodCount.courseThumbsCnt}</span>
          </CourseContent>
          <CourseContent>
            <MdIcons.MdOutlineRateReview />
            <span>{courseReviews && courseReviews[0]?.courseReviewCnt}</span>
          </CourseContent>
        </>
      ) : dataCategory === 'authorProfile' ? (
        // 작성자 프로필
        <>
          <ProfilePic
            src={author.profileImgSaveUrl}
            alt={author.nickname}
            width={'8rem'}
            height={'8rem'}
          />
          <S.AutorProfileVerticalWrap marginRight={'3rem'}>
            <S.AutorNickname>{author.nickname}</S.AutorNickname>
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
            <span>{author?.ranking}</span>
          </S.AutorProfileVerticalWrap>
          <S.AutorProfileVerticalWrap>
            <FiIcons.FiUsers />
            <span>{author?.followers}</span>
          </S.AutorProfileVerticalWrap>
          <S.AutorProfileVerticalWrap>
            <GiIcons.GiRoad />
            <span>{authorCourseCount}</span>
          </S.AutorProfileVerticalWrap>
        </>
      ) : dataCategory === 'courses' ? (
        // 코스 순서
        <>
          {courseDetail?.placeDetailList?.map((item) => (
            <div key={item.id}>
              <S.CourseName>
                {item.id}. {item.placeName}
              </S.CourseName>
              {item.id !== courseDetail.placeDetailList.length && (
                <AiIcons.AiOutlineArrowRight style={{ fontSize: `${fs.s}` }} />
              )}
            </div>
          ))}
        </>
      ) : dataCategory === 'averageRate' ? (
        // 코스 평균 평점 및 별 개수별 퍼센테이지
        <>
          {/* 코스 평균 평점 */}
          <S.AverageRate>
            <span>평균 평점</span>
            <span>
              {coursePointAverageArr && coursePointAverageArr[0]?.courseAvgRate}
            </span>
          </S.AverageRate>
          <ul>
            {courseReviewAvgPoint &&
              courseDetail.rate?.stars.map((item, index) => {
                return (
                  <S.CourseRateStarWrap key={item.id}>
                    <S.CourseRateStar>{item.star}</S.CourseRateStar>
                    <S.CourseRateStarPercentGaugeWrap>
                      <S.CourseRateStarPercentGauge
                        width={`${courseReviewAvgPoint[index]}%`}
                      ></S.CourseRateStarPercentGauge>
                    </S.CourseRateStarPercentGaugeWrap>
                    <S.CourseRateStarPercent>
                      {courseReviewAvgPoint[index]}%
                    </S.CourseRateStarPercent>
                  </S.CourseRateStarWrap>
                );
              })}
          </ul>
        </>
      ) : (
        courseDetail[`${dataCategory}`].map((item) => {
          // 카테고리
          if (dataCategory === 'categoryLists') {
            return (
              <React.Fragment key={item.id}>
                <CourseContent>
                  <p>{item.locationCategoryName}</p>
                </CourseContent>
                <CourseContent>
                  <p>{item.themeCategoryName}</p>
                </CourseContent>
              </React.Fragment>
            );
          }
          //해시태그
          if (dataCategory === 'hashtagList') {
            return (
              <Link
                key={item.id}
                to={`/courses/hashtags?keyword=${item.keyword}`}
              >
                <CourseContent>
                  <p>{`#${item.keyword}`}</p>
                </CourseContent>
              </Link>
            );
          }
          return [];
        })
      )}
    </S.StyledCourseContentWrap>
  );
}

export default CourseContentWrap;
