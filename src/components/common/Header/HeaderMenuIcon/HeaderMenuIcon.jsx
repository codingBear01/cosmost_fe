/* components */
import * as S from './styled';
/* react-icons */
import { CgMenuGridR } from 'react-icons/cg';

function HeaderMenuIcon({ handleMenuBarOpen }) {
  return (
    <S.StyledHeaderMenuIcon onClick={handleMenuBarOpen}>
      <CgMenuGridR />
    </S.StyledHeaderMenuIcon>
  );
}

export default HeaderMenuIcon;
