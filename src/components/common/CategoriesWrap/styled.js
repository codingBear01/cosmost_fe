import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from './../../../style/';

export const StyledCategoriesWrap = styled.div`
  display: ${({ display }) => display};
  flex-direction: ${({ fd }) => fd};
  margin-bottom: ${gap.s};
  ${media.mobile} {
    margin-bottom: ${gap.xs};
  }
`;
