/* components */
import * as S from './styled';

function HeaderSearchInput({
  width,
  height,
  fontSize,
  isSearchBarOpen,
  pathName,
  scrollY,
}) {
  return (
    <S.StyledSearchInput
      width={width}
      height={height}
      fontSize={fontSize}
      isSearchBarOpen={isSearchBarOpen}
      pathName={pathName}
      scrollY={scrollY}
    />
  );
}

export default HeaderSearchInput;
