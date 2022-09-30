/* libraries */
import styled from 'styled-components';
/* static data */
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from '../../../../style';

export const MainHashTagWrap = styled.div`
  width: 100rem;
  text-align: center;

  ${media.tablet} {
    width: 75rem;
  }

  ${media.mobile} {
    width: 55rem;
  }
`;

export const MainHashTag = styled.span`
  padding: ${gap.xs};
  border-radius: ${br.default};
  font-size: ${fs.xl};
  color: ${color.white};
  transition: all 0.15s ease-in;
  cursor: pointer;

  &:hover {
    background-color: ${color.blue};
  }

  ${media.tablet} {
    font-size: ${fs.m};
  }
`;
