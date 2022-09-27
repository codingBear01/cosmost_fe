import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';

function HashTag({ fontSize, children }) {
  return (
    <Link to="/course/result">
      <S.StyledHashtag fontSize={fontSize}>{children}</S.StyledHashtag>
    </Link>
  );
}

export default HashTag;
