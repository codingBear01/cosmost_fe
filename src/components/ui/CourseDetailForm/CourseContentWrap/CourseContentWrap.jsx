/* libraries */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
/* components */
import * as S from './styled';
import { CourseContent } from '..';
import { Button, ProfilePic } from '../../..';
/* APIs */
import {
  handleFollow,
  fetchIsFollowed,
  getCourseAuthor,
} from '../../../../apis';
/* icons */
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as BiIcons from 'react-icons/bi';
import * as FiIcons from 'react-icons/fi';
import * as GiIcons from 'react-icons/gi';
import * as AiIcons from 'react-icons/ai';
/* static data */
import { COLOR_LIST as color, FONT_SIZE_LIST as fs } from '../../../../style';

function CourseContentWrap({
  justifyContent,
  height,
  courseReviews,
  courseDetail,
  dataCategory,
  authorCourseCount,
  courseLikeCount,
  courseAverageRate,
  courseReviewCount,
  courseAverageRatePercentage,
  loggedInUserId,
  author,
}) {
  /* States */
  const [isFollowed, setIsFollowed] = useState([]);
  const [isFollowedChanged, setIsFollowedChanged] = useState(false);
  const [authorsFollowersCount, setAuthorsFollowersCount] = useState(null);
  /* Variables */
  const courseAverageRateGaugeWidth =
    courseAverageRatePercentage && courseAverageRatePercentage.reverse();
  const token = localStorage.getItem('token');

  /* APIs */

  useEffect(() => {
    if (author) {
      fetchAuthorsFollowersCount();
      fetchIsFollowed(author?.id, setIsFollowed, token);
    }
  }, [isFollowedChanged]);

  /** 코스 작성자 팔로워 숫자 조회 */
  const fetchAuthorsFollowersCount = () => {
    const url = `${process.env.REACT_APP_API}/popularities?filter=cosmosts&type=follower&sort=id,desc&page=0&size=4`;
    const config = {
      headers: {
        Authorization: author?.id,
      },
      timeout: 3000,
    };

    axios
      .get(url, config)
      .then((response) => {
        setAuthorsFollowersCount(response.data[0]?.otherUserFollowerCnt);
      })
      .catch((error) => new Error(error));
  };
  useEffect(() => {
    fetchAuthorsFollowersCount();
    fetchIsFollowed(author?.id, setIsFollowed, token);
  }, [author]);

  return (
    // dataCategory에 따라 다른 컴포넌트 렌더링됨
    <S.StyledCourseContentWrap justifyContent={justifyContent} height={height}>
      {dataCategory === 'likeAndReview' ? (
        // 좋아요, 리뷰 숫자
        <>
          <CourseContent>
            <FaIcons.FaRegThumbsUp />
            <span>{courseLikeCount && courseLikeCount}</span>
          </CourseContent>
          <CourseContent>
            <MdIcons.MdOutlineRateReview />
            <span>{courseReviewCount && courseReviewCount}</span>
          </CourseContent>
        </>
      ) : dataCategory === 'authorProfile' ? (
        // 작성자 프로필
        <>
          <ProfilePic
            src={author?.profileImgSaveUrl}
            alt={author?.nickname}
            width={'8rem'}
            height={'8rem'}
          />
          <S.AutorProfileVerticalWrap marginRight={'3rem'}>
            <S.AutorNickname>{author?.nickname}</S.AutorNickname>
            {loggedInUserId ? (
              <>
                {!isFollowed[0] && (
                  <Button
                    type="button"
                    width={'70px'}
                    height={'30px'}
                    fontSize={'12px'}
                    color={color.black}
                    bgColor={color.darkGreen}
                    hoveredBgColor={color.lightGreen}
                    onClick={() =>
                      handleFollow(
                        'follow',
                        author.id,
                        setIsFollowedChanged,
                        isFollowedChanged,
                        token
                      )
                    }
                  >
                    팔로우
                  </Button>
                )}
                {isFollowed[0] && (
                  <Button
                    type="button"
                    width={'70px'}
                    height={'30px'}
                    fontSize={'12px'}
                    color={color.black}
                    bgColor={color.darkRed}
                    hoveredBgColor={color.red}
                    onClick={() =>
                      handleFollow(
                        'unfollow',
                        author.id,
                        setIsFollowedChanged,
                        isFollowedChanged,
                        token
                      )
                    }
                  >
                    언팔로우
                  </Button>
                )}
              </>
            ) : (
              <></>
            )}
          </S.AutorProfileVerticalWrap>
          <Link to={`/others/followers`} state={author?.id}>
            <S.AutorProfileVerticalWrap>
              <BiIcons.BiCrown />
              <span>{author?.ranking}</span>
            </S.AutorProfileVerticalWrap>
          </Link>
          <S.AutorProfileVerticalWrap>
            <FiIcons.FiUsers />
            <span>{authorsFollowersCount && authorsFollowersCount}</span>
          </S.AutorProfileVerticalWrap>
          <S.AutorProfileVerticalWrap>
            <GiIcons.GiRoad />
            <span>{authorCourseCount && authorCourseCount}</span>
          </S.AutorProfileVerticalWrap>
        </>
      ) : dataCategory === 'courses' ? (
        // 코스 순서
        <>
          {courseDetail?.placeDetailList?.map((item, index) => (
            <div key={item.id}>
              <S.CourseName>{item.placeName}</S.CourseName>
              {index !== courseDetail.placeDetailList.length - 1 && (
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
              {courseAverageRate && courseAverageRate[0].courseAvgRate}
            </span>
          </S.AverageRate>
          <ul>
            {!courseAverageRateGaugeWidth && (
              <>
                <S.CourseRateStarWrap>
                  <S.CourseRateStar>⭐⭐⭐⭐⭐</S.CourseRateStar>
                  <S.CourseRateStarPercentGaugeWrap>
                    <S.CourseRateStarPercentGauge
                      width={'0%'}
                    ></S.CourseRateStarPercentGauge>
                  </S.CourseRateStarPercentGaugeWrap>
                  <S.CourseRateStarPercent>0%</S.CourseRateStarPercent>
                </S.CourseRateStarWrap>

                <S.CourseRateStarWrap>
                  <S.CourseRateStar>⭐⭐⭐⭐</S.CourseRateStar>
                  <S.CourseRateStarPercentGaugeWrap>
                    <S.CourseRateStarPercentGauge
                      width={'0%'}
                    ></S.CourseRateStarPercentGauge>
                  </S.CourseRateStarPercentGaugeWrap>
                  <S.CourseRateStarPercent>0%</S.CourseRateStarPercent>
                </S.CourseRateStarWrap>

                <S.CourseRateStarWrap>
                  <S.CourseRateStar>⭐⭐⭐</S.CourseRateStar>
                  <S.CourseRateStarPercentGaugeWrap>
                    <S.CourseRateStarPercentGauge
                      width={'0%'}
                    ></S.CourseRateStarPercentGauge>
                  </S.CourseRateStarPercentGaugeWrap>
                  <S.CourseRateStarPercent>0%</S.CourseRateStarPercent>
                </S.CourseRateStarWrap>

                <S.CourseRateStarWrap>
                  <S.CourseRateStar>⭐⭐</S.CourseRateStar>
                  <S.CourseRateStarPercentGaugeWrap>
                    <S.CourseRateStarPercentGauge
                      width={'0%'}
                    ></S.CourseRateStarPercentGauge>
                  </S.CourseRateStarPercentGaugeWrap>
                  <S.CourseRateStarPercent>0%</S.CourseRateStarPercent>
                </S.CourseRateStarWrap>

                <S.CourseRateStarWrap>
                  <S.CourseRateStar>⭐ </S.CourseRateStar>
                  <S.CourseRateStarPercentGaugeWrap>
                    <S.CourseRateStarPercentGauge
                      width={'0%'}
                    ></S.CourseRateStarPercentGauge>
                  </S.CourseRateStarPercentGaugeWrap>
                  <S.CourseRateStarPercent>0%</S.CourseRateStarPercent>
                </S.CourseRateStarWrap>
              </>
            )}
            {courseAverageRateGaugeWidth &&
              courseAverageRateGaugeWidth.map((item, index) => (
                <S.CourseRateStarWrap key={index}>
                  <S.CourseRateStar>
                    {index === 0 ? (
                      '⭐⭐⭐⭐⭐'
                    ) : index === 1 ? (
                      '⭐⭐⭐⭐'
                    ) : index === 2 ? (
                      '⭐⭐⭐'
                    ) : index === 3 ? (
                      '⭐⭐'
                    ) : index === 4 ? (
                      '⭐'
                    ) : (
                      <></>
                    )}
                  </S.CourseRateStar>
                  <S.CourseRateStarPercentGaugeWrap>
                    <S.CourseRateStarPercentGauge
                      width={`${item}%`}
                      percentage={item}
                    ></S.CourseRateStarPercentGauge>
                  </S.CourseRateStarPercentGaugeWrap>
                  <S.CourseRateStarPercent>{item}%</S.CourseRateStarPercent>
                </S.CourseRateStarWrap>
              ))}
          </ul>
        </>
      ) : (
        courseDetail[dataCategory].map((item) => {
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
                to={`/courses/hashtag?keyword=${item.keyword}`}
              >
                <CourseContent>
                  <p>{`#${item.keyword}`}</p>
                </CourseContent>
              </Link>
            );
          }
          return <></>;
        })
      )}
    </S.StyledCourseContentWrap>
  );
}

export default CourseContentWrap;
