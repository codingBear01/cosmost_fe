import * as S from './styled';
import { BiSearchAlt } from 'react-icons/bi';

function HeaderSearchIcon({ onSearchModalOpen }) {
  return (
    <S.StyledHeaderSearchIcon onClick={onSearchModalOpen}>
      <BiSearchAlt />
    </S.StyledHeaderSearchIcon>
  );
}

export default HeaderSearchIcon;
