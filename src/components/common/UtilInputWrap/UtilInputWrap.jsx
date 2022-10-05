/* hooks */
import React from 'react';
/* components */
import * as S from './styled';

function UtilInputWrap({ a_self, mb, children }) {
  return (
    <>
      <S.StyledUtilInputWrap a_self={a_self} mb={mb}>
        {children}
      </S.StyledUtilInputWrap>
    </>
  );
}

export default UtilInputWrap;
