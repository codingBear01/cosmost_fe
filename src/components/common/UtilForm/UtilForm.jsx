/* hooks */
import React from 'react';
/* components */
import * as S from './styled';

function UtilForm({ justifyContent, padding, children, onSubmit }) {
  return (
    <>
      <S.StyledUtilForm
        justifyContent={justifyContent}
        padding={padding}
        onSubmit={onSubmit}
      >
        {children}
      </S.StyledUtilForm>
    </>
  );
}

export default UtilForm;
