import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
} from './../../../../style/';

const StyledHeaderLogo = styled.span`
  font-size: 4rem;
  font-weight: 600;
  color: ${color.white};
  cursor: pointer;
`;

const HeaderLogo = ({ children }) => (
  <StyledHeaderLogo>{children}</StyledHeaderLogo>
);

export default HeaderLogo;
