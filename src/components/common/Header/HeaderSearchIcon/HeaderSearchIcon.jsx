import * as S from './styled';
import { BiSearchAlt } from 'react-icons/bi';

function HeaderSearchIcon({ handleSearchBarOpen, pathName, scrollY }) {
  return (
    <S.StyledHeaderSearchIcon
      onClick={handleSearchBarOpen}
      pathName={pathName}
      scrollY={scrollY}
    >
      <BiSearchAlt />
    </S.StyledHeaderSearchIcon>
  );
}

export default HeaderSearchIcon;
