/* hooks */
import React from 'react';
/* components */
import * as S from './styled';

function UtilDiv({
  justifyContent,
  width,
  height,
  margin,
  padding,
  bgColor,
  children,
}) {
  return (
    <>
      <S.StyledUtilDiv
        justifyContent={justifyContent}
        width={width}
        height={height}
        margin={margin}
        padding={padding}
        bgColor={bgColor}
      >
        {children}
      </S.StyledUtilDiv>
    </>
  );
}

export default UtilDiv;
