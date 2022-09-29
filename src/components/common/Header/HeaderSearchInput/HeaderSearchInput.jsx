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
      type="text"
      placeholder="키워드를 입력하세요."
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
