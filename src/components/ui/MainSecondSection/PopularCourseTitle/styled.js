import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from '../../../../style';

export const PopularTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${gap.l};
`;

export const PopularTitle = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
`;
