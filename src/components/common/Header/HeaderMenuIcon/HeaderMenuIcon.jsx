import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from './../../../../style/';
import { CgMenuGridR } from 'react-icons/cg';

const StyledHeaderMenuIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  margin-left: 2rem;
  border-radius: ${br.circle};
  background: none;
  transition: all 0.15s ease-in;
  cursor: pointer;

  &:hover {
    border-radius: ${br.circle};
    background-color: ${color.blue};
  }

  svg {
    width: 4rem;
    height: 4rem;
    color: ${color.white};
  }
`;

function HeaderMenuIcon({ isMenuOpen, setIsMenuOpen }) {
  const onMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledHeaderMenuIcon onClick={onMenuOpen}>
      <CgMenuGridR />
    </StyledHeaderMenuIcon>
  );
}

export default HeaderMenuIcon;
