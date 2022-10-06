/* hooks */
import React from 'react';
/* components */
import * as S from './styled';

function UtilDiv({ justifyContent, padding, children }) {
  return (
    <>
      <S.StyledUtilDiv justifyContent={justifyContent} padding={padding}>
        {children}
      </S.StyledUtilDiv>
    </>
  );
}

export default UtilDiv;
