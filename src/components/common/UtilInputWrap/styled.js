import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
} from '../../../style';

export const StyledUtilInputWrap = styled.div`
  display: flex;
  align-items: center;
  align-self: ${({ a_self }) => a_self};
  margin-bottom: ${({ mb }) => (mb ? mb : `${gap.xl}`)};
`;
