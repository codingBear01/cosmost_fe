import React from 'react';
/* components */
import * as S from './styled';

function RankersBox({ i, children }) {
  return <S.StyledRankersBox i={i}>{children}</S.StyledRankersBox>;
}

export default RankersBox;
