import React from 'react';
import * as S from './styled';

function HashTag({ fontSize, children }) {
  return <S.StyledHashtag fontSize={fontSize}>{children}</S.StyledHashtag>;
}

export default HashTag;
