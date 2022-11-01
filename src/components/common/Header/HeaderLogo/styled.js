import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BREAK_POINTS as media,
} from './../../../../style/';

export const StyledHeaderLogo = styled.span`
  font-size: 4rem;
  font-weight: 600;
  color: ${color.white};
  cursor: pointer;

  ${media.mobile} {
    font-size: 3rem;
  }
`;
