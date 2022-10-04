/* hooks */
import React from 'react';
/* components */
import * as S from './styled';

function UtilInputWrap({ a_self, children }) {
  return (
    <>
      <S.StyledUtilInputWrap a_self={a_self}>{children}</S.StyledUtilInputWrap>
    </>
  );
}

export default UtilInputWrap;
