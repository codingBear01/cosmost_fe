import React, { useState, useEffect } from 'react';
/* components */
import * as S from './styled';
import { RankersBox, RankerList } from '../';

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

  return (
    <S.StyledRankersContainer i={i}>
      <RankersBox i={i}>
        <RankerList items={leftRankers} type={type} />
      </RankersBox>
      <RankersBox i={i}>
        <RankerList items={rightRankers} type={type} />
      </RankersBox>
    </S.StyledRankersContainer>
  );
}

export default RankersContainer;
