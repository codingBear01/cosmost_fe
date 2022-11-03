import React from 'react';
/* components */
import * as S from './styled';

function Icon({ marginRight, onClick, children }) {
  return (
    <S.StyledHeaderIcon marginRight={marginRight} onClick={onClick}>
      {children}
    </S.StyledHeaderIcon>
  );
}

export default Icon;
