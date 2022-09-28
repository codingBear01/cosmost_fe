/* components */
import * as S from './styled';

function HeaderSearchInput({ width, height, fontSize, isSearchBarOpen }) {
  return (
    <S.StyledSearchInput
      width={width}
      height={height}
      fontSize={fontSize}
      isSearchBarOpen={isSearchBarOpen}
    />
  );
}

export default HeaderSearchInput;
