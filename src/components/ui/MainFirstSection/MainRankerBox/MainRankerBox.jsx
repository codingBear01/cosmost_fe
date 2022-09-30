/* hooks */
import React, { useState } from 'react';
import { useInterval } from './../../../hooks';
/* components */
import * as S from './styled';
import { SmallProfilePic } from '../../../';
/* static data */
import { USER_RANKING_LIST } from '../../../../data';

/* CONSTANTS */
const RANKER_LENGTH = USER_RANKING_LIST.length;

function MainRankerBox() {
  /* Ranking 기능 구현을 위한 ranker의 Top position 및 index */
  const [topPosition, setTopPosition] = useState(0);
  const [rankerIndex, setRankerIndex] = useState(1);

  // 2초마다 topPosition 및 rankerIndex값에 변화를 줘서 Ranking 보여주기 기능 구현하는 함수
  useInterval(() => {
    if (rankerIndex === RANKER_LENGTH) {
      setTopPosition(0);
      setRankerIndex(1);
    } else {
      setTopPosition((prev) => prev - 5.5);
      setRankerIndex((prev) => prev + 1);
    }
  }, 2000);

  return (
    <>
      <S.RankergBox>
        {USER_RANKING_LIST &&
          USER_RANKING_LIST.map((ranker, i) => (
            <S.EachRanker
              key={ranker.id}
              style={{
                top: `${topPosition}rem`,
              }}
            >
              <span>{ranker.medal}</span>
              <span>{ranker.rank}</span>
              <SmallProfilePic src={ranker.imgUrl} alt={ranker.nickname} />
              <span>{ranker.nickname}</span>
            </S.EachRanker>
          ))}
      </S.RankergBox>
    </>
  );
}

export default MainRankerBox;
