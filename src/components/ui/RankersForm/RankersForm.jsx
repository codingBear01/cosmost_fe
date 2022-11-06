/* libraries */
import React from 'react';
/* components */
import * as S from './styled';
import { UtilDiv } from '../..';
import { RankersContainer } from '.';
/* static data */
// import { RANKERS } from '../../../store';

const RANKERS_CONTENTS = [
  {
    id: 1,
    title: 'TOP 10 cosMoster',
    type: 'topRankers',
  },
  {
    id: 2,
    title: '우수 cosMoster',
    type: 'bestCosmosters',
  },
  {
    id: 3,
    title: '인기 코스',
    type: 'bestCourses',
  },
];

function RankersForm() {
  return (
    <UtilDiv
      width={'76.8rem'}
      height={'100%'}
      margin={'0 auto'}
      padding={'10rem 0'}
    >
      {/* {RANKERS_CONTENTS.map((item, i) => (
        <div key={item.id}>
          <S.RankersType>{item.title}</S.RankersType>
          <RankersContainer i={i} type={item.type} rankers={RANKERS} />
        </div>
      ))} */}
    </UtilDiv>
  );
}

export default RankersForm;
