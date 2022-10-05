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
  justify-content: ${({ j_content }) => (j_content ? j_content : 'flex-start')};
  flex-direction: column;
  height: 100vh;
  padding: ${({ pd }) => pd};
  color: ${color.white};
  animation: ${mainTextFadeIn} 1.2s;
`;
