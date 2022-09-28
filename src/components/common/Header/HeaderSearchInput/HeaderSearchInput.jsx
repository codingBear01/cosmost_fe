import React from 'react';
import * as S from './styled';

function HeaderSearchInput({
  width,
  height,
  fontSize,
  isSearchBarOpen,
  scrollY,
}) {
  return (
    <S.StyledSearchInput
      width={width}
      height={height}
      fontSize={fontSize}
      isSearchBarOpen={isSearchBarOpen}
      scrollY={scrollY}
    />
  );
}

export default HeaderSearchInput;
