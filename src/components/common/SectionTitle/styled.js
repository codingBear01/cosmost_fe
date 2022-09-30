import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from '../../../style';

export const PopularTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: ${gap.l};

  @media (max-width: 1250px) {
    width: 98%;
  }
`;

export const PopularTitle = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
`;
