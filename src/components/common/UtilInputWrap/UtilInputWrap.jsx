/* hooks */
import React from 'react';
/* components */
import * as S from './styled';

function UtilInputWrap({ alignSelf, marginBottom, children }) {
  return (
    <>
      <S.StyledUtilInputWrap alignSelf={alignSelf} marginBottom={marginBottom}>
        {children}
      </S.StyledUtilInputWrap>
    </>
  );
}

export default UtilInputWrap;
