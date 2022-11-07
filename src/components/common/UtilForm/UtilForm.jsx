/* hooks */
import React from 'react';
/* components */
import * as S from './styled';

function UtilForm({
  justifyContent,
  width,
  height,
  padding,
  children,
  onSubmit,
}) {
  return (
    <>
      <S.StyledUtilForm
        justifyContent={justifyContent}
        width={width}
        height={height}
        padding={padding}
        onSubmit={onSubmit}
      >
        {children}
      </S.StyledUtilForm>
    </>
  );
}

export default UtilForm;
