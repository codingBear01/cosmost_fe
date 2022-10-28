import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from '../../../style';

export const FloatingIcon = styled.div`
  position: fixed;
  right: 10rem;
  bottom: 10rem;
  display: ${({ isShownToTopBtn }) => (isShownToTopBtn ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  margin: ${gap.xs} 0;
  border-radius: ${br.circle};
  background: none;
  border: 0.2rem solid ${color.lightBlue};
  font-size: ${fs.l};
  color: ${color.lightBlue};
  cursor: pointer;
  transition: all 0.15s ease-in;

  &: hover {
    background-color: ${color.lightBlue};
    color: ${color.white};
  }

  ${media.tablet} {
    right: 5rem;
  }

  ${media.mobile} {
    right: 4rem;
  }
`;
