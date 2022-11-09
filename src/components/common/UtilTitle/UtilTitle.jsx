/* hooks */
import React from 'react';
/* components */
import * as S from './styled';

function UtilTitle({ style, children }) {
  return (
    <>
      <S.StyledUtilTitle style={style}>{children}</S.StyledUtilTitle>
    </>
  );
}

export default UtilTitle;
