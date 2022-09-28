import * as S from './styled';
import { CgMenuGridR } from 'react-icons/cg';

function HeaderMenuIcon({ handleMenuBarOpen }) {
  return (
    <S.StyledHeaderMenuIcon onClick={handleMenuBarOpen}>
      <CgMenuGridR />
    </S.StyledHeaderMenuIcon>
  );
}

export default HeaderMenuIcon;
