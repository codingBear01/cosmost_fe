import styled from 'styled-components';
import {
  COLOR_LIST as color,
  BORDER_RADIUS_LIST as br,
  BUTTON_SIZE_LIST as bs,
  FONT_SIZE_LIST as fs,
  GAP_LIST as gap,
  BREAK_POINTS as media,
  mainTextFadeIn,
} from '../../../style';

export const StyledUtilForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'flex-start'};
  flex-direction: column;
  width: ${({ width }) => width};
  height: ${({ height }) => (height ? height : '100%')};
  padding: ${({ padding }) => padding};
  color: ${color.white};
  animation: ${mainTextFadeIn} 1.2s;
`;
