/* hooks */
import React from 'react';
/* components */
import * as S from './styled';

function UtilInputWrap({ alignSelf, flexDirection, margin, children }) {
  return (
    <>
      <S.StyledUtilInputWrap
        alignSelf={alignSelf}
        flexDirection={flexDirection}
        margin={margin}
      >
        {children}
      </S.StyledUtilInputWrap>
    </>
  );
}

export default UtilInputWrap;
