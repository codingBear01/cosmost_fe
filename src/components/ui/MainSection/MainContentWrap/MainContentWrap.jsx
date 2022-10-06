import React from 'react';
/* components */
import * as S from './styled';

function MainContentWrap({ pd, children }) {
  return <S.StyledMainContentWrap pd={pd}>{children}</S.StyledMainContentWrap>;
}

export default MainContentWrap;
