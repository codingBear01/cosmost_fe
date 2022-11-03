import React, { useState, useEffect } from 'react';
/* components */
import * as S from './styled';
import { RankersBox, RankerList } from '../';
/* CONSTANTS */
const RANKER_TYPE_TEXT = {
  bestCosmosters: { 1: '좋아요 순', 2: '코스 등록 순' },
  bestCourses: { 2: '좋아요 순', 3: '리뷰 등록 순' },
};

function RankersContainer({ i, rankers, type }) {
  const [leftRankers, setLeftRankers] = useState([]);
  const [rightRankers, setRightRankers] = useState([]);

  useEffect(() => {
    let left;
    let right;

    if (type === 'topRankers') {
      left = rankers[type].slice(0, Math.floor(rankers[type].length / 2));
      right = rankers[type].slice(
        Math.floor(rankers[type].length / 2),
        rankers[type].length
      );
    } else if (type === 'bestCosmosters') {
      left = rankers[type].theMostRegisterCourses;
      right = rankers[type].theMostLikeReceivers;
    } else {
      left = rankers[type].theMostReviewReceivers;
      right = rankers[type].theMostLikeReceivers;
    }

    setLeftRankers(left);
    setRightRankers(right);
  }, []);

  console.log(type);
  console.log(i);

  return (
    <S.StyledRankersContainer i={i}>
      <RankersBox i={i}>
        {i !== 0 && (
          <S.RankerTypeText>{RANKER_TYPE_TEXT[type][i]}</S.RankerTypeText>
        )}
        <RankerList items={leftRankers} type={type} />
      </RankersBox>
      <RankersBox i={i}>
        {i !== 0 && (
          <S.RankerTypeText>{RANKER_TYPE_TEXT[type][i + 1]}</S.RankerTypeText>
        )}
        <RankerList items={rightRankers} type={type} />
      </RankersBox>
    </S.StyledRankersContainer>
  );
}

export default RankersContainer;
