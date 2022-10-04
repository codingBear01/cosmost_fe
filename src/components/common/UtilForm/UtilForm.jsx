/* hooks */
import React from 'react';
/* components */
import * as S from './styled';

function UtilForm({ j_content, pd, children }) {
  return (
    <>
      <S.StyledUtilForm j_content={j_content} pd={pd}>
        {children}
      </S.StyledUtilForm>
    </>
  );
}

export default UtilForm;
