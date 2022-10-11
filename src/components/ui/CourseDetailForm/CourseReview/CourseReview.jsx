/* libraries */
import React, { useState } from 'react';
/* components */
import * as S from './styled';
import { CourseUtillityModal, ProfilePic } from '../../../';
/* static data */
import { COURSE_REIVEWS } from '../../../../store';
/* icons */
import * as AiIcons from 'react-icons/ai';
import * as GrIcons from 'react-icons/gr';
import * as FaIcons from 'react-icons/fa';

function CourseReview() {
  /* States */
  /* 클릭된 review의 index를 저장하는 state */
  const [reviewIndex, setReviewIndex] = useState(null);
  /* reviewUtilityModal의 Open 여부 state */
  const [isReviewUtilityModalOpened, setIsReviewUtilityModalOpened] =
    useState(false);

  /* Handlers */
  /* 클릭된 review의 index를 저장하고, reviewUtilityModal의 Open 여부를 변경하는 handler. 클릭 시 해당 review의 index가 state에 저장되며, reviewUtilityModal의 Open 여부가 반대로 변경된다. */
  const onClickSetClickedReviewIndex = (i) => {
    setReviewIndex(i);
    setIsReviewUtilityModalOpened(!isReviewUtilityModalOpened);
  };

  return (
    <>
      {COURSE_REIVEWS &&
        COURSE_REIVEWS.map((item, i) => (
          <S.CourseReviewWrap key={item.id}>
            {/* 리뷰 작성자 프로필 */}
            <S.CourseReviewAuthorWrap>
              <ProfilePic
                src={item.author.profilePictureUrl}
                alt={item.author.nickname}
                width={'8rem'}
                height={'8rem'}
              />
              <S.CourseReviewAuthorNickname>
                {item.author.nickname}
              </S.CourseReviewAuthorNickname>
            </S.CourseReviewAuthorWrap>
            <S.CourseReviewContentWrap>
              {/* 리뷰 평점, 작성일 */}
              <S.CourseReviewInnerContentWrap>
                <S.CourseReviewStar>
                  {item.rate === 5 ? (
                    <>
                      <AiIcons.AiFillStar />
                      <AiIcons.AiFillStar />
                      <AiIcons.AiFillStar />
                      <AiIcons.AiFillStar />
                      <AiIcons.AiFillStar />
                    </>
                  ) : item.rate === 4 ? (
                    <>
                      <AiIcons.AiFillStar />
                      <AiIcons.AiFillStar />
                      <AiIcons.AiFillStar />
                      <AiIcons.AiFillStar />
                    </>
                  ) : item.rate === 3 ? (
                    <>
                      <AiIcons.AiFillStar />
                      <AiIcons.AiFillStar />
                      <AiIcons.AiFillStar />
                    </>
                  ) : item.rate === 2 ? (
                    <>
                      <AiIcons.AiFillStar />
                      <AiIcons.AiFillStar />
                    </>
                  ) : (
                    <AiIcons.AiFillStar />
                  )}
                </S.CourseReviewStar>
                <S.CourseReviewCreatedDateWrap>
                  <span>{item.createdDate}</span>
                  <GrIcons.GrMoreVertical
                    onClick={() => onClickSetClickedReviewIndex(i)}
                  />
                  {i === reviewIndex && isReviewUtilityModalOpened && (
                    <CourseUtillityModal top={'2.5rem'} right={'0.1rem'} />
                  )}
                </S.CourseReviewCreatedDateWrap>
              </S.CourseReviewInnerContentWrap>
              {/* 좋아요 수, 좋아요 버튼 */}
              <S.CourseReviewInnerContentWrap>
                <S.CourseReviewLikeCountWrap>
                  <FaIcons.FaRegThumbsUp />
                  <span>{item.likeCount}</span>
                </S.CourseReviewLikeCountWrap>
                <S.CourseReviewLikeButton type="submit">
                  <FaIcons.FaRegThumbsUp />
                </S.CourseReviewLikeButton>
              </S.CourseReviewInnerContentWrap>
              {/* 리뷰 내용 */}
              <S.CourseReviewDescription>
                {item.description}
              </S.CourseReviewDescription>
            </S.CourseReviewContentWrap>
          </S.CourseReviewWrap>
        ))}
    </>
  );
}

export default CourseReview;
