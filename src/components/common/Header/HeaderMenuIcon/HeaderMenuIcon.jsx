import * as S from './styled';
import { CgMenuGridR } from 'react-icons/cg';

function HeaderMenuIcon({ onMenuBarOpen }) {
  return (
    <S.StyledHeaderMenuIcon onClick={onMenuBarOpen}>
      <CgMenuGridR />
    </S.StyledHeaderMenuIcon>
  );
}

export default HeaderMenuIcon;
