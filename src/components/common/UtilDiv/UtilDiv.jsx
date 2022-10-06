/* hooks */
import React from 'react';
/* components */
import * as S from './styled';

function UtilDiv({ j_content, pd, children }) {
  return (
    <>
      <S.StyledUtilDiv j_content={j_content} pd={pd}>
        {children}
      </S.StyledUtilDiv>
    </>
  );
}

export default UtilDiv;
