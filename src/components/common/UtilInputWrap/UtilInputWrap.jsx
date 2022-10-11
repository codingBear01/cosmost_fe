/* hooks */
import React from 'react';
/* components */
import * as S from './styled';

function UtilInputWrap({ alignSelf, margin, children }) {
  return (
    <>
      <S.StyledUtilInputWrap alignSelf={alignSelf} margin={margin}>
        {children}
      </S.StyledUtilInputWrap>
    </>
  );
}

export default UtilInputWrap;
