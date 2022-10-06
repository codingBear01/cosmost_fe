/* hooks */
import React from 'react';
/* components */
import * as S from './styled';

function UtilTitle({ children }) {
  return (
    <>
      <S.StyledUtilTitle>{children}</S.StyledUtilTitle>
    </>
  );
}

export default UtilTitle;
