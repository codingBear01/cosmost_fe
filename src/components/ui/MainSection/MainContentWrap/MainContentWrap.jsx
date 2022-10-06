import React from 'react';
/* components */
import * as S from './styled';

function MainContentWrap({ padding, children }) {
  return (
    <S.StyledMainContentWrap padding={padding}>
      {children}
    </S.StyledMainContentWrap>
  );
}

export default MainContentWrap;
